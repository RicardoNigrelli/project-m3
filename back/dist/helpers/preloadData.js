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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preloadAppointmentsData = exports.preloadUserData = void 0;
const data_source_1 = require("../config/data-source");
const user_1 = require("../repositories/user");
const appointment_1 = require("../repositories/appointment");
const User_1 = require("../entities/User");
const repositories_1 = require("../repositories");
const preloadUsers = [
    {
        name: "Rick",
        email: "rick@mail.com",
        birthdate: 20201225,
        nDni: 45786544,
        username: "rickuser",
        password: "rickpass"
    },
    {
        name: "Marcos",
        email: "marcos@mail.com",
        birthdate: 20201225,
        nDni: 12345678,
        username: "marcosuser",
        password: "marcospass"
    },
    {
        name: "Florencia",
        email: "florencia@mail.com",
        birthdate: new Date(1999, 11, 15),
        nDni: 87654321,
        username: "floruser",
        password: "florpass"
    },
    {
        name: "Lucho",
        email: "lucho@mail.com",
        birthdate: new Date(1976, 2, 1),
        nDni: 98765432,
        username: "luchouser",
        password: "luchopass"
    }
];
const preloadAppointments = [
    {
        date: new Date(2024, 4, 20),
        time: "08:30",
        description: "Consulta médica",
        user: 1
    },
    {
        date: new Date(2024, 7, 15),
        time: "14:00",
        description: "Reunión de trabajo",
        user: 2
    },
    {
        date: new Date(2024, 10, 10),
        time: "10:30",
        description: "Entrega de proyecto",
        user: 3
    },
    {
        date: new Date(2025, 0, 5),
        time: "15:00",
        description: "Entrevista de trabajo",
        user: 4
    }
];
const preloadUserData = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, e_1, _b, _c;
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        yield queryRunner.startTransaction();
        const users = yield user_1.UserRepository.find();
        if (users.length) {
            console.log("No se hizo la precarga de datos porque ya hay datos");
            return;
        }
        try {
            for (var _d = true, preloadUsers_1 = __asyncValues(preloadUsers), preloadUsers_1_1; preloadUsers_1_1 = yield preloadUsers_1.next(), _a = preloadUsers_1_1.done, !_a; _d = true) {
                _c = preloadUsers_1_1.value;
                _d = false;
                const userData = _c;
                const credentialId = yield repositories_1.CredentialRepository.newCredential({
                    username: userData.username,
                    password: userData.password
                });
                if (typeof credentialId !== "number") {
                    throw new Error("Credential not created");
                }
                yield user_1.UserRepository
                    .createQueryBuilder()
                    .insert()
                    .into(User_1.User)
                    .values({
                    name: userData.name,
                    email: userData.email,
                    birthdate: userData.birthdate,
                    nDni: userData.nDni,
                    credentials: credentialId
                })
                    .execute();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = preloadUsers_1.return)) yield _b.call(preloadUsers_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        yield queryRunner.commitTransaction();
        console.log("Precarga de users realizada con éxito");
    }
    catch (error) {
        console.error("Error al intentar crear los usuarios:", error);
        yield queryRunner.rollbackTransaction();
    }
    finally {
        yield queryRunner.release();
        console.log("Ha finalizado el intento de precarga");
    }
});
exports.preloadUserData = preloadUserData;
const preloadAppointmentsData = () => __awaiter(void 0, void 0, void 0, function* () {
    const queryRunner = data_source_1.AppDataSource.createQueryRunner();
    yield queryRunner.connect();
    try {
        yield queryRunner.startTransaction();
        const appointments = yield appointment_1.AppointmentRepository.find();
        if (appointments.length) {
            console.log("No se hizo la precarga de datos porque ya hay datos");
            return;
        }
        const promises = preloadAppointments.map((appointment) => __awaiter(void 0, void 0, void 0, function* () {
            const newAppointment = yield appointment_1.AppointmentRepository.create(appointment);
            yield queryRunner.manager.save(newAppointment);
            const user = yield user_1.UserRepository.findOneBy({ id: appointment.user });
            if (!user)
                throw Error("Usuario Inexistente");
            newAppointment.user = user;
            yield queryRunner.manager.save(newAppointment);
        }));
        yield Promise.all(promises);
        yield queryRunner.commitTransaction();
        console.log("Precarga de appointments realizada con éxito");
    }
    catch (error) {
        console.error("Error al intentar crear los appointments:", error);
        yield queryRunner.rollbackTransaction();
    }
    finally {
        yield queryRunner.release();
        console.log("Ha finalizado el intento de precarga");
    }
});
exports.preloadAppointmentsData = preloadAppointmentsData;
