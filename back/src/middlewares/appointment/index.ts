import { NextFunction, Request, Response } from "express"
import { UserRepository } from "../../repositories";
import { AppointmentRepository } from "../../repositories/appointment";

export const authAppointment = async (req: Request, res: Response, next: NextFunction) => {
    
    const { date, time, description, user } = req.body;
    if (!date) {
        return res.status(400).json({ message: "Error. Debe ingresar una fecha" });
    }

    if (date < new Date ()) {
        return res.status(400).json({ message: "Error. No puede ingresar una fecha anterior a hoy" })
    }

    if (!/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)) {
        return res.status(400).json({ message: "Error. 'time' debe ser una cadena en formato de hora válida." });
    }

    if (time < "10:00" || time > "20:00") {
        return res.status(400).json({ message: "Error. El turno debe agendarse dentro del horario de atención." })
    }

    if (typeof description !== 'string' || description.trim() === '') {
        return res.status(400).json({ message: "Error. 'description' debe ser una cadena NO vacía." });
    }

    if (typeof user !== 'number') {
        return res.status(400).json({ message: "Error, user debe ser un número." });
    }
    
    const userWithProperties = await UserRepository.findById(user)

    if (!userWithProperties) {
        return res.status(400).json({message: "Usuario inexistente. No se pudo crear el appointment"})
    }

    for (let i = 0; i < userWithProperties.appointments.length; i++) {
        
        if (userWithProperties.appointments[i].date === date) {
            return res.status(400).json({message: "Ya tiene un turno asignado en este día"})
        }
        if (userWithProperties.appointments[i].time === time) {
            return res.status(400).json({message: "Ya tiene un turno asignado en este horario"})
        } 
    }

    next();

};


export const authCancelAppointment = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const allApointments = await AppointmentRepository.getAll ()
    
    const idExists = allApointments.some(appointment => appointment.id === Number(id))
    if (!idExists) {
        return res.status(404).json({message: "No se encontró el turno"})
    }
    next();
}