import { Status } from "../entities/Appointment";

export class AppointmentDto {
    date: Date;
    time: string;
    description: string;
    status: Status
    user: number
}

