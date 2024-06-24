"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentRepository = void 0;
const data_source_1 = require("../../config/data-source");
const Appointment_1 = require("../../entities/Appointment");
exports.AppointmentRepository = data_source_1.AppDataSource.getRepository(Appointment_1.Appointment).extend({
    getAll: function () {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createQueryBuilder("appointment")
                .select([
                "appointment.id",
                "appointment.date",
                "appointment.time",
                "appointment.description",
                "user.id",
                "appointment.status",
            ])
                .leftJoin("appointment.user", "user")
                .getMany();
        });
    },
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            const appointment = yield this.findOneBy({ id });
            if (appointment)
                return appointment;
            else
                throw Error("Invalid Id");
        });
    },
    createNewAppointment: function (appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const newAppointment = exports.AppointmentRepository.create({
                date: appointment.date,
                time: appointment.time,
                description: appointment.description,
                status: appointment.status,
                user: appointment.user,
            });
            const savedAppointment = yield exports.AppointmentRepository.save(newAppointment);
            if (savedAppointment) {
                return savedAppointment;
            }
            else {
                throw new Error("No se pudo guardar la cita");
            }
        });
    },
    cancelById: function (id, appointment) {
        return __awaiter(this, void 0, void 0, function* () {
            const app = yield this.findById(id);
            if (!app) {
                throw new Error("Appointment not found");
            }
            const cancelAppointment = yield exports.AppointmentRepository.createQueryBuilder()
                .update(appointment)
                .set({
                status: Appointment_1.Status.CANCELED,
            })
                .where("id = :id", { id })
                .execute();
            return cancelAppointment;
        });
    },
});
