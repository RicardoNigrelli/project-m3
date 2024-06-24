import bcrypt from "bcrypt"

function encryptPassword( password: string ): string {
    return bcrypt.hashSync(password, 10)
}

function comparePassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash)
}

export { encryptPassword, comparePassword}