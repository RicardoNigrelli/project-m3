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
exports.putAppointmentController = exports.postAppointmentController = exports.getAppointmentByIdController = exports.getAllAppointmentsControllers = void 0;
const appointment_1 = require("../../services/appointment");
function getAllAppointmentsControllers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointments = yield (0, appointment_1.getAllAppointmentsServices)();
            res.status(200).json(appointments);
        }
        catch (error) {
            res.status(404).json("Appointments not found");
        }
    });
}
exports.getAllAppointmentsControllers = getAllAppointmentsControllers;
function getAppointmentByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointment = yield (0, appointment_1.getAppointmentByIdService)(Number(id));
            if (appointment) {
                res.status(200).json(appointment);
            }
        }
        catch (error) {
            res.status(404).json("Appointment not found");
        }
    });
}
exports.getAppointmentByIdController = getAppointmentByIdController;
function postAppointmentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const appointment = req.body;
            const newAppointment = yield (0, appointment_1.postAppointmentService)(appointment);
            res
                .status(201)
                .json({
                message: "Appointment created successfully", newAppointment
            });
        }
        catch (error) {
            res.status(400).json("Datos Incorrectos");
        }
    });
}
exports.postAppointmentController = postAppointmentController;
function putAppointmentController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const appointmentCanceled = yield (0, appointment_1.putAppointmentService)(Number(id));
            res.status(200).json({ message: "Appointment canceled", appointmentCanceled });
        }
        catch (error) {
            res.status(404).json("Appointment not found");
        }
    });
}
exports.putAppointmentController = putAppointmentController;
