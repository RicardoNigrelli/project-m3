import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Credential } from "./Credential"
import { Appointment } from "./Appointment"


@Entity({
        name: "users" 
    })
export class User {

    @PrimaryGeneratedColumn({ type: "int" }) //id autoincremental
    id?:number

    @Column({
        type: "text"
    })
    name: string

    @Column({type: "text", unique: true })
    email: string

    @Column({type: "date"})
    birthdate: Date

    @Column({type: "integer", unique: true })
    nDni: number

    @OneToOne(() => Credential)
    @JoinColumn ({name: "credencialsId"})
    credentials: Credential | Credential["id"];

    @OneToMany(()=> Appointment, (appointment => appointment.user))
    appointments: Appointment[]
    
}

