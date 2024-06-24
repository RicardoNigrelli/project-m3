"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const appointment_1 = __importDefault(require("./appointment"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.status(200).send("Hello world!!");
});
router.use("/users", user_1.default);
router.use("/appointments", appointment_1.default);
exports.default = router;
