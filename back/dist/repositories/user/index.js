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
exports.UserRepository = void 0;
const data_source_1 = require("../../config/data-source");
const User_1 = require("../../entities/User");
const credential_1 = require("../credential");
const UserRepository = data_source_1.AppDataSource.getRepository(User_1.User).extend({
    findById: function (id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.createQueryBuilder("user")
                .leftJoinAndSelect("user.appointments", "appointment")
                .where("user.id = :id", { id })
                .getOne();
            return user;
        });
    },
    getAll: function () {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.createQueryBuilder("user")
                .select([
                "user.id",
                "user.name",
                "user.birthdate",
                "user.email",
                "user.nDni",
                "credentials.username",
                "credentials.password",
            ])
                .leftJoin("user.credentials", "credentials")
                .getMany();
        });
    },
    createNewUser: function (userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const credentialId = yield credential_1.CredentialRepository.newCredential({ username: userData.username, password: userData.password });
            if (typeof credentialId !== "number") {
                throw new Error("Credential not created");
            }
            const newUser = yield UserRepository
                .createQueryBuilder()
                .insert()
                .into(User_1.User)
                .values({
                name: userData.name,
                email: userData.email,
                birthdate: userData.birthdate,
                nDni: userData.nDni,
                credentials: credentialId,
                appointments: []
            })
                .execute();
            return newUser;
        });
    }
});
exports.UserRepository = UserRepository;
