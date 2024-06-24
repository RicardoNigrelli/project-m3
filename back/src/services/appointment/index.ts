import { AppDataSource} from "../../config/data-source"
import {AppointmentDto} from "../../dto/AppointmentDto"
import {UserRepository} from "../../repositories/user"
import {AppointmentRepository} from "../../repositories/appointment"
import { Appointment, Status } from "../../entities/Appointment"
import { InsertResult } from "typeorm"


async function getAllAppointmentsServices (): Promise <Appointment[]> {
    try {const appointments = await AppointmentRepository.getAll ()
        return appointments
    }
    catch (error: any) {
        throw new Error(error)
    }
    
}

async function getAppointmentByIdService (id: number): Promise<Appointment | null> {
    try {
    const appointment = await AppointmentRepository.findById(id)
    return appointment
} catch (error: any) {
    throw new Error(error)
}
}

async function postAppointmentService(appointmentData: AppointmentDto): Promise<Appointment | null> {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    try {
        await queryRunner.startTransaction();
        const user = await UserRepository.findById(appointmentData.user);
        
        if (!user) {
            throw new Error("Usuario inexistente. No se pudo crear el appointment")}

        const newAppointment = await AppointmentRepository.createNewAppointment(appointmentData);

        console.log(appointmentData)

        if (newAppointment instanceof Appointment) {
            newAppointment.user = user;
            await queryRunner.manager.save(newAppointment);
            await queryRunner.commitTransaction();
        }
        return newAppointment;
    } catch (error: any) {
        console.log("Error al crear el appointment:", error.message);
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
}

async function putAppointmentService(id: number): Promise<Appointment> {
    try {
        const appointmentToUpdate = await AppointmentRepository.findById(id);
        if (!appointmentToUpdate) {
            throw new Error(`No se encontró el appointment con el ID ${id}`);
        }
        appointmentToUpdate.status = Status.CANCELED;
        await AppointmentRepository.save(appointmentToUpdate);

            
        return appointmentToUpdate;

    } catch (error) {
        throw new Error(`Error al actualizar el appointment`);
    }
}



export {getAllAppointmentsServices, getAppointmentByIdService, postAppointmentService, putAppointmentService,}
