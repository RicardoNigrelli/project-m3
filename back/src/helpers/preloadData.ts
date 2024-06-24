import { AppDataSource} from "../config/data-source";
import {UserRepository} from "../repositories/user";
import {AppointmentRepository} from "../repositories/appointment";

import { User } from "../entities/User";
import { CredentialRepository } from "../repositories";


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
]

const preloadAppointments = [
    {
        date: new Date(2024, 4, 20), // 20 de mayo de 2024
        time: "08:30", // Representa las 8:30 AM
        description: "Consulta médica",
        user: 1
    },
    {
        date: new Date(2024, 7, 15), // 15 de agosto de 2024
        time: "14:00", // Representa las 2:00 PM
        description: "Reunión de trabajo",
        user: 2
    },
    {
        date: new Date(2024, 10, 10), // 10 de noviembre de 2024
        time: "10:30", // Representa las 10:30 AM
        description: "Entrega de proyecto",
        user: 3
    },
    {
        date: new Date(2025, 0, 5), // 5 de enero de 2025
        time: "15:00", // Representa las 3:00 PM
        description: "Entrevista de trabajo",
        user: 4
    }
]



export const preloadUserData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();

        const users = await UserRepository.find();
        if (users.length) {
            console.log("No se hizo la precarga de datos porque ya hay datos");
            return;
        }

        for await (const userData of preloadUsers) {
            const credentialId = await CredentialRepository.newCredential({
                username: userData.username,
                password: userData.password
            });

            if (typeof credentialId !== "number") {
                throw new Error("Credential not created");
            }

            await UserRepository
                .createQueryBuilder()
                .insert()
                .into(User)
                .values({
                    name: userData.name,
                    email: userData.email,
                    birthdate: userData.birthdate,
                    nDni: userData.nDni,
                    credentials: credentialId
                })
                .execute();
        }

        await queryRunner.commitTransaction();
        console.log("Precarga de users realizada con éxito");
    } catch (error) {
        console.error("Error al intentar crear los usuarios:", error);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
        console.log("Ha finalizado el intento de precarga");
    }
};


export const preloadAppointmentsData = async () => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();

                const appointments = await AppointmentRepository.find();
                if (appointments.length) {
                  console.log(
                    "No se hizo la precarga de datos porque ya hay datos"
                  );
                  return;
                }

        const promises = preloadAppointments.map(async (appointment) => {
            const newAppointment = await AppointmentRepository.create(appointment);
            await queryRunner.manager.save(newAppointment);
            const user = await UserRepository.findOneBy({ id: appointment.user});
            if (!user) throw Error("Usuario Inexistente");
            newAppointment.user = user;
            await queryRunner.manager.save(newAppointment);
        });

        await Promise.all(promises);
        await queryRunner.commitTransaction();
        console.log("Precarga de appointments realizada con éxito");
    } catch (error) {
        console.error("Error al intentar crear los appointments:", error);
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
        console.log("Ha finalizado el intento de precarga");
    }
};

