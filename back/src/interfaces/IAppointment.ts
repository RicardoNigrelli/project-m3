import { Status } from "../entities/Appointment";
import IUser from "./IUser";


interface IAppointment {
    id:number,
    date: Date,
    time: number,
    description: string,
    userId: IUser["id"], //relacion con la tabla de los usuarios
    status: Status, //tiene que ser un type (active o cancelled)
    

}

export default IAppointment