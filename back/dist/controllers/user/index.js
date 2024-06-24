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
exports.postUserLoginController = exports.postUserRegisterController = exports.getUserByIdController = exports.getAllUsersControllers = void 0;
const user_1 = require("../../services/user");
function getAllUsersControllers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield (0, user_1.getAllUsersServices)();
            res.status(200).json(usuarios);
        }
        catch (error) {
            res.status(404).json("Users not found");
        }
    });
}
exports.getAllUsersControllers = getAllUsersControllers;
function getUserByIdController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const user = yield (0, user_1.getUserByIdService)(Number(id));
            if (user) {
                res.status(200).json(user);
            }
        }
        catch (error) {
            res.status(404).send("User not found");
        }
    });
}
exports.getUserByIdController = getUserByIdController;
function postUserRegisterController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const newUser = yield (0, user_1.postUserRegisterService)(user);
            res.status(201).json({ message: "¡Usuario Creado!" });
        }
        catch (error) {
            res.status(400).json("Datos Incorrectos");
        }
    });
}
exports.postUserRegisterController = postUserRegisterController;
function postUserLoginController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const credential = req.body;
            const user = yield (0, user_1.postUserLoginService)(credential);
            res.status(201).json({ login: true, user, message: "Usuario Conectado" });
        }
        catch (error) {
            res.status(500).json({ login: false, message: "Error en el inicio de sesión" });
        }
    });
}
exports.postUserLoginController = postUserLoginController;
