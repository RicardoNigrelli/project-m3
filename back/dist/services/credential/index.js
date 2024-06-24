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
exports.checkCredential = void 0;
const credential_1 = require("../../repositories/credential");
const utils_1 = require("../../utils");
function checkCredential(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password }) {
        try {
            const credential = yield credential_1.CredentialRepository.findByUsername(username);
            if (!credential) {
                throw new Error("Credencial no encontrada");
            }
            if (!(0, utils_1.comparePassword)(password, credential.password)) {
                throw new Error("Credencial incorrecta");
            }
            return credential.id;
        }
        catch (error) {
            throw error;
        }
    });
}
exports.checkCredential = checkCredential;
