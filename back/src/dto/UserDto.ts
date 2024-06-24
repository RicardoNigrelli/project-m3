import {AppointmentDto} from "./AppointmentDto"


export class UserDto {
    name: string;
    email: string;
    birthdate: Date;
    nDni: number;
    username: string;
    password: string;
    appointments?: number[] | AppointmentDto[];
}