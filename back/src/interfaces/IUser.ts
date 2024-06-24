import IAppointment from "./IAppointment"
import {ICredential} from "./ICredential"

interface IUser {
    id:number,
    name: string,
    email: string,
    birthdate: Date,
    nDni: number,
    // appointments: IAppointment[]
    // credentialsID: ICredential ["id"]
}

export default IUser