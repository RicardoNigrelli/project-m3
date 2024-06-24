"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchServiceController = exports.putServiceController = exports.postServiceController = exports.getServiceByIdController = exports.getAllServicesControllers = void 0;
function getAllServicesControllers(req, res) {
    res.status(200).send("this is get all services");
}
exports.getAllServicesControllers = getAllServicesControllers;
function getServiceByIdController(req, res) {
    const { id } = req.params;
    res.status(200).send(`this is get service by id, your id is: ${id}`);
}
exports.getServiceByIdController = getServiceByIdController;
function postServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "This is post service", body: service });
}
exports.postServiceController = postServiceController;
function putServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "This is post service", body: service });
}
exports.putServiceController = putServiceController;
function patchServiceController(req, res) {
    const service = req.body;
    res.send(201).json({ message: "This is post service", body: service });
}
exports.patchServiceController = patchServiceController;
