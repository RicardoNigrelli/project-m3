import { AppDataSource } from "../../config/data-source";
import { CredentialDto } from "../../dto/CredentialDto";
import { Credential } from "../../entities/Credential";
import { encryptPassword } from "../../utils";


export const CredentialRepository = AppDataSource.getRepository(Credential).extend({
    async findByUsername(username: string) {
        return this.findOne({
            where: {username},
            select: ["id", "password"]
        })
    },
    async newCredential (credential: CredentialDto) {
        const hash: string = await encryptPassword(credential.password)
        const newCredentials = CredentialRepository.create({
            username: credential.username,
            password: hash,
        })
        await CredentialRepository.save(newCredentials)
        const creds = await this.findByUsername(credential.username)
        if (!creds) throw new Error ("Error creating credential")
            return creds.id
    }

})

;