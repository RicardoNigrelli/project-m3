import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

export enum Status {
    ACTIVE = "ACTIVE",
    CANCELED = "CANCELED"
}

@Entity({
        name: "appointments" 
    })
export class Appointment {
    
    @PrimaryGeneratedColumn({ type: "int" }) //id autoincremental
    id?:number

    @Column({type: "date"})
    date: Date

    @Column({ type: "time" })
    time: string;
    
    @Column({type: "text"})
    description: string

    @ManyToOne (()=> User, (user) => user.appointments)
    user: User | number

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE
    })
    status: Status

}




    // userId: IUser["id"], //relacion con la tabla de los usuarios
    // status: Status, //tiene que ser un type (active o cancelled)