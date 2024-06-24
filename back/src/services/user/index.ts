
import {UserRepository} from "../../repositories/user"
import {UserDto} from "../../dto/UserDto"
import { Credential } from "../../entities/Credential"
import { User } from "../../entities/User"
import { checkCredential } from "../credential"
import { InsertResult } from "typeorm"




async function getAllUsersServices (): Promise<User[]> {
    try {
    const usuarios = await UserRepository.getAll()
    return usuarios
    }
    catch (error: any) {
        throw new Error(error)
    }
}

async function getUserByIdService(id: number): Promise<User | null> {
    try {
        const user = await UserRepository.findById(id);
        if (!user) throw new Error(`User with ${id}not found`);
        return user 
    } catch (error: any) {
        throw new Error(error);
    }
}


async function postUserRegisterService(userData: UserDto): Promise<User | InsertResult> {
    try {
        const newUser = await UserRepository.createNewUser(userData);
        if (newUser) return newUser;
        else throw "User not created"
    } catch (error: any) {
        throw new Error("Error desconocido al registrar un nuevo usuario.");
    }
}  


async function postUserLoginService(credentials: Credential) {
    try {
        const userId = await checkCredential(credentials);
        
        if (userId) {
            const user = await UserRepository.findById(userId);
            if (user) {
                return user;
            } else {
                throw new Error("Usuario no encontrado");
            }
        } else {
            throw new Error("Credenciales incorrectas");
        }
    } catch (error) {
        throw error;
    }
}
// devolveria la credencial del usuario completa
// va a devolver el usuario completo usando como el id de la credencial

export {
    getAllUsersServices,
    getUserByIdService,
    postUserRegisterService,
    postUserLoginService,
}