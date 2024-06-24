import { NextFunction, Request, Response } from "express"
import { CredentialRepository, UserRepository} from "../../repositories";
import { comparePassword } from "../../utils";

export const authRegister = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, birthdate, nDni, username, password } = req.body;

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({ message: "Error. 'name' debe ser una cadena no vacía." });
    }
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: "Error. 'email' debe ser una cadena válida de correo electrónico." });
    }
    if (!birthdate) {
        return res.status(400).json({ message: "Error. 'birthdate' debe ser una fecha válida." });
    }
    if (!nDni || typeof nDni !== 'number') {
        return res.status(400).json({ message: "Error. 'nDni' debe ser un número válido." });
    }
    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ message: "Error. 'username' debe ser una cadena no vacía." });
    }
    if (!password || typeof password !== 'string' || password.trim() === '') {
        return res.status(400).json({ message: "Error. 'password' debe ser una cadena no vacía." });
    }
    const credential = await CredentialRepository.findByUsername(username);
        
    if (credential) {
        return res.status(400).json({ message: "Username ya registrado" });
    }

    const allUsers = await UserRepository.getAll ()
    for (let i = 0; i < allUsers.length; i++ ) {
        if (nDni === allUsers[i].nDni){
            return res.status(400).json ({message: "Dni ya registrado"})
        }
        if (email === allUsers[i].email){
            return res.status(400).json ({message: "Email ya registrado"})
        }
    }

    next();
};

export const authLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    if (!username || typeof username !== 'string' || username.trim() === '') {
        return res.status(400).json({ message: "Error. 'username' debe ser una cadena no vacía." });
    }

    if (!password || typeof password !== 'string' || password.trim() === '') {
        return res.status(400).json({ message: "Error. 'password' debe ser una cadena no vacía." });
    }

    const credential = await CredentialRepository.findByUsername(username);
        
    if (!credential) {
        return res.status(400).json({ message: "Datos incorrectos" });
    }

    if (!comparePassword(password, credential.password)) {
        return res.status(400).json({ message: "Datos incorrectos" });
    }

        next();
     }


