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
exports.putAppointmentService = exports.postAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsServices = void 0;
const data_source_1 = require("../../config/data-source");
const user_1 = require("../../repositories/user");
const appointment_1 = require("../../repositories/appointment");
const Appointment_1 = require("../../entities/Appointment");
function getAllAppointmentsServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointments = yield appointment_1.AppointmentRepository.getAll();
            return appointments;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getAllAppointmentsServices = getAllAppointmentsServices;
function getAppointmentByIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = yield appointment_1.AppointmentRepository.findById(id);
            return appointment;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getAppointmentByIdService = getAppointmentByIdService;
function postAppointmentService(appointmentData) {
    return __awaiter(this, void 0, void 0, function* () {
        const queryRunner = data_source_1.AppDataSource.createQueryRunner();
        yield queryRunner.connect();
        try {
            yield queryRunner.startTransaction();
            const user = yield user_1.UserRepository.findById(appointmentData.user);
            if (!user) {
                throw new Error("Usuario inexistente. No se pudo crear el appointment");
            }
            const newAppointment = yield appointment_1.AppointmentRepository.createNewAppointment(appointmentData);
            console.log(appointmentData);
            if (newAppointment instanceof Appointment_1.Appointment) {
                newAppointment.user = user;
                yield queryRunner.manager.save(newAppointment);
                yield queryRunner.commitTransaction();
            }
            return newAppointment;
        }
        catch (error) {
            console.log("Error al crear el appointment:", error.message);
            yield queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            yield queryRunner.release();
        }
    });
}
exports.postAppointmentService = postAppointmentService;
function putAppointmentService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointmentToUpdate = yield appointment_1.AppointmentRepository.findById(id);
            if (!appointmentToUpdate) {
                throw new Error(`No se encontró el appointment con el ID ${id}`);
            }
            appointmentToUpdate.status = Appointment_1.Status.CANCELED;
            yield appointment_1.AppointmentRepository.save(appointmentToUpdate);
            return appointmentToUpdate;
        }
        catch (error) {
            throw new Error(`Error al actualizar el appointment`);
        }
    });
}
exports.putAppointmentService = putAppointmentService;
