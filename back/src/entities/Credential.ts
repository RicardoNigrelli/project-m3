import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({
        name: "credentials" 
    })
export class Credential {
    
    @PrimaryGeneratedColumn({ type: "int" }) //id autoincremental
    id?:number

    @Column({ type: "varchar", length: 255, unique: true, nullable: true})
    username: string;
  
    @Column({ type: "varchar", length: 255, select: false, nullable: true })
    password: string;

}