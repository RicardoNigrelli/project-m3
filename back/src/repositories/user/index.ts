import { AppDataSource } from "../../config/data-source";
import { UserDto } from "../../dto/UserDto";
import { User } from "../../entities/User";
import { CredentialRepository } from "../credential";

const UserRepository = AppDataSource.getRepository(User).extend({
    findById: async function(id: number): Promise<User | null> {
        const user = await this.createQueryBuilder("user")
            .leftJoinAndSelect("user.appointments", "appointment")
            .where("user.id = :id", { id })
            .getOne();

            return user;
    },

    getAll: async function () {
        return await this.createQueryBuilder("user")
        .select([
        "user.id",
        "user.name",
        "user.birthdate",
        "user.email",
        "user.nDni",
        "credentials.username",
        "credentials.password",
        ])
        .leftJoin("user.credentials", "credentials")
        .getMany();
    },

    createNewUser: async function (userData: UserDto) {
        const credentialId = await CredentialRepository.newCredential ({ username: userData.username, password: userData.password });
        if (typeof credentialId !== "number") {
            throw new Error ("Credential not created")
        }
        
        const newUser = await UserRepository
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
            name: userData.name,
            email: userData.email,
            birthdate: userData.birthdate,
            nDni: userData.nDni,
            credentials: credentialId,
            appointments: []
        })
        .execute()

        return newUser
    }
});

export { UserRepository };