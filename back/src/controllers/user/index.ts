import { Request, Response} from 'express';
import {getAllUsersServices, getUserByIdService, postUserRegisterService, postUserLoginService} from "../../services/user"
import { User } from '../../entities/User';
import { UserDto } from '../../dto/UserDto';
import {CredentialDto} from '../../dto/CredentialDto';
import { InsertResult } from 'typeorm';


async function getAllUsersControllers (req: Request, res: Response) {
    try {
        const usuarios: User[] = await getAllUsersServices()
        res.status(200).json(usuarios)
    } catch (error: any) {
        res.status(404).json("Users not found")
    }
}

async function getUserByIdController (req: Request, res: Response) {
    try {
        const {id} = req.params
        const user: User | null = await getUserByIdService(Number (id));
        if (user) { 
            res.status(200).json(user)
        }
    } catch (error: any) {
        res.status(404).send("User not found")
    }
}

async function postUserRegisterController (req: Request, res: Response) {
    try {
        const user: UserDto = req.body;
        const newUser: User | InsertResult = await postUserRegisterService(user);
        res.status(201).json({ message: "¡Usuario Creado!"});
    } catch(error:any) {
        res.status(400).json("Datos Incorrectos");
    }
}

async function postUserLoginController(req: Request, res: Response) {
    try {
        const credential: CredentialDto = req.body; 
        const user = await postUserLoginService(credential);
        res.status(201).json({ login: true, user, message: "Usuario Conectado" });
    } catch (error: any) {
        res.status(500).json({ login: false, message: "Error en el inicio de sesión" }); 
    }
}

export {
    getAllUsersControllers,
    getUserByIdController,
    postUserRegisterController,
    postUserLoginController,
}