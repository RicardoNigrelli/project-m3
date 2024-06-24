import { Request, Response} from 'express';
import {getAllAppointmentsServices, getAppointmentByIdService, postAppointmentService, putAppointmentService} from "../../services/appointment"
import { Appointment } from '../../entities/Appointment';
import {AppointmentDto} from '../../dto/AppointmentDto';
import { InsertResult } from 'typeorm';

async function getAllAppointmentsControllers (req: Request, res: Response) {
    try {
        const appointments = await getAllAppointmentsServices()
        res.status(200).json(appointments)
    } catch (error: any) {
        res.status(404).json("Appointments not found")
    }
}

async function getAppointmentByIdController (req: Request, res: Response) {
    try {
        const {id} = req.params
        const appointment = await getAppointmentByIdService (Number(id))
        if (appointment) {
            res.status(200).json(appointment)
        }
    }   catch (error: any) {
        res.status(404).json("Appointment not found")
    }
}

async function postAppointmentController (req: Request, res: Response) {
    
    try {
        const appointment:AppointmentDto = req.body
        const newAppointment: Appointment | null = await postAppointmentService(appointment)
        res
          .status(201)
          .json({
            message: "Appointment created successfully", newAppointment});
    } catch (error:any) {
        res.status(400).json("Datos Incorrectos")
    }
    
}

async function putAppointmentController (req: Request, res: Response) {
    try {
        const {id} = req.params
        const appointmentCanceled = await putAppointmentService (Number(id))
        res.status(200).json({message: "Appointment canceled",appointmentCanceled})
    } catch (error:any) {
        res.status(404).json("Appointment not found")
    }
    
}

export {
    getAllAppointmentsControllers,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,
}