import { CredentialDto } from "../../dto/CredentialDto";
import { Credential } from "../../entities/Credential"
import {CredentialRepository} from "../../repositories/credential";
import { comparePassword} from "../../utils"


async function checkCredential({ username, password }: Credential): Promise <number | undefined> {
    try {
        const credential = await CredentialRepository.findByUsername(username);
        if (!credential) {
            throw new Error("Credencial no encontrada");
        }
        if (!comparePassword(password, credential.password)) {
            throw new Error("Credencial incorrecta");
        }
        return credential.id;
        //si se rompe usar {id: credential.id, username: credential.username}
        //cambiar y agregar en promise partial credential
    } catch (error) {
        throw error; 
    }
}

export {checkCredential}


