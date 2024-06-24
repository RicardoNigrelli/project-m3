"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Credential_1 = require("../entities/Credential");
const Appointment_1 = require("../entities/Appointment");
const _1 = require(".");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: _1.DB_HOST,
    port: _1.DB_PORT,
    username: _1.DB_USERNAME,
    password: _1.DB_PASSWORD,
    database: _1.DB_NAME,
    synchronize: true,
    logging: ["error"],
    entities: [User_1.User, Credential_1.Credential, Appointment_1.Appointment],
    subscribers: [],
    migrations: [],
});
