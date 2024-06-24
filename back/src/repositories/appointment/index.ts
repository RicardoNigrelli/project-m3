import { InsertResult } from "typeorm";
import { AppDataSource } from "../../config/data-source";
import { AppointmentDto } from "../../dto/AppointmentDto";
import { Appointment, Status } from "../../entities/Appointment";

export const AppointmentRepository = AppDataSource.getRepository(Appointment).extend({
  getAll: async function () {
    return this.createQueryBuilder("appointment")
      .select([
        "appointment.id",
        "appointment.date",
        "appointment.time",
        "appointment.description",
        "user.id",
        "appointment.status",
      ])
      .leftJoin("appointment.user", "user")
      .getMany();
  },

  findById: async function (id: number): Promise<Appointment> {
    const appointment = await this.findOneBy({ id });
    if (appointment) return appointment;
    else throw Error("Invalid Id");
  },
  createNewAppointment: async function (appointment: AppointmentDto) {
    const newAppointment = AppointmentRepository.create({
      date: appointment.date,
      time: appointment.time,
      description: appointment.description,
      status: appointment.status,
      user: appointment.user,
    });
    const savedAppointment = await AppointmentRepository.save(newAppointment);
    if (savedAppointment) {
      return savedAppointment;
    } else {
      throw new Error("No se pudo guardar la cita");
    }
  },

  cancelById: async function (id: number, appointment: AppointmentDto) {
    const app = await this.findById(id);

    if (!app) {
      throw new Error("Appointment not found");
    }

    const cancelAppointment = await AppointmentRepository.createQueryBuilder()
      .update(appointment)
      .set({
        status: Status.CANCELED,
      })
      .where("id = :id", { id })
      .execute();
    return cancelAppointment;
  },
});

