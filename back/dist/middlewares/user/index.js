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
exports.authLogin = exports.authRegister = void 0;
const repositories_1 = require("../../repositories");
const utils_1 = require("../../utils");
const authRegister = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: "Error. 'name' debe ser una cadena no vacía." });
    }
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: "Error. 'email' debe ser una cadena válida de correo electrónico." });
    }
    if (!birthdate) {
        return res.status(400).json({ message: "Error. 'birthdate' debe ser una fecha válida." });
    }
    if (!nDni || typeof nDni !== 'number') {
        return res.status(400).json({ message: "Error. 'nDni' debe ser un número válido." });
    }
    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ message: "Error. 'username' debe ser una cadena no vacía." });
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
        return res.status(400).json({ message: "Error. 'password' debe ser una cadena no vacía." });
    }
    const credential = yield repositories_1.CredentialRepository.findByUsername(username);
    if (credential) {
        return res.status(400).json({ message: "Username ya registrado" });
    }
    const allUsers = yield repositories_1.UserRepository.getAll();
    for (let i = 0; i < allUsers.length; i++) {
        if (nDni === allUsers[i].nDni) {
            return res.status(400).json({ message: "Dni ya registrado" });
        }
        if (email === allUsers[i].email) {
            return res.status(400).json({ message: "Email ya registrado" });
        }
    }
    next();
});
exports.authRegister = authRegister;
const authLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ message: "Error. 'username' debe ser una cadena no vacía." });
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
        return res.status(400).json({ message: "Error. 'password' debe ser una cadena no vacía." });
    }
    const credential = yield repositories_1.CredentialRepository.findByUsername(username);
    if (!credential) {
        return res.status(400).json({ message: "Datos incorrectos" });
    }
    if (!(0, utils_1.comparePassword)(password, credential.password)) {
        return res.status(400).json({ message: "Datos incorrectos" });
    }
    next();
});
exports.authLogin = authLogin;
