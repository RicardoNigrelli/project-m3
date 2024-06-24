"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authLogin = exports.authRegister = exports.authAppointment = void 0;
const authAppointment = (req, res, next) => {
    const { date, time, description, user } = req.body;
    if (!date) {
        return res.status(400).json({ message: "Error. Debe ingresar una fecha" });
    }
    if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
        return res.status(400).json({ message: "Error. 'time' debe ser una cadena en formato de hora válida." });
    }
    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ message: "Error. 'description' debe ser una cadena no vacía." });
    }
    if (typeof user !== 'number') {
        return res.status(400).json({ message: "Error, user debe ser un número." });
    }
    next();
};
exports.authAppointment = authAppointment;
const authRegister = (req, res, next) => {
};
exports.authRegister = authRegister;
const authLogin = (req, res, next) => {
};
exports.authLogin = authLogin;
