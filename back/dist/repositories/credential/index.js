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
exports.CredentialRepository = void 0;
const data_source_1 = require("../../config/data-source");
const Credential_1 = require("../../entities/Credential");
const utils_1 = require("../../utils");
exports.CredentialRepository = data_source_1.AppDataSource.getRepository(Credential_1.Credential).extend({
    findByUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.findOne({
                where: { username },
                select: ["id", "password"]
            });
        });
    },
    newCredential(credential) {
        return __awaiter(this, void 0, void 0, function* () {
            const hash = yield (0, utils_1.encryptPassword)(credential.password);
            const newCredentials = exports.CredentialRepository.create({
                username: credential.username,
                password: hash,
            });
            yield exports.CredentialRepository.save(newCredentials);
            const creds = yield this.findByUsername(credential.username);
            if (!creds)
                throw new Error("Error creating credential");
            return creds.id;
        });
    }
});
