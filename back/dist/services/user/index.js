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
exports.postUserLoginService = exports.postUserRegisterService = exports.getUserByIdService = exports.getAllUsersServices = void 0;
const user_1 = require("../../repositories/user");
const credential_1 = require("../credential");
function getAllUsersServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const usuarios = yield user_1.UserRepository.getAll();
            return usuarios;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getAllUsersServices = getAllUsersServices;
function getUserByIdService(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.UserRepository.findById(id);
            if (!user)
                throw new Error(`User with ${id}not found`);
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.getUserByIdService = getUserByIdService;
function postUserRegisterService(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_1.UserRepository.createNewUser(userData);
            if (newUser)
                return newUser;
            else
                throw "User not created";
        }
        catch (error) {
            throw new Error("Error desconocido al registrar un nuevo usuario.");
        }
    });
}
exports.postUserRegisterService = postUserRegisterService;
function postUserLoginService(credentials) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = yield (0, credential_1.checkCredential)(credentials);
            if (userId) {
                const user = yield user_1.UserRepository.findById(userId);
                if (user) {
                    return user;
                }
                else {
                    throw new Error("Usuario no encontrado");
                }
            }
            else {
                throw new Error("Credenciales incorrectas");
            }
        }
        catch (error) {
            throw error;
        }
    });
}
exports.postUserLoginService = postUserLoginService;
