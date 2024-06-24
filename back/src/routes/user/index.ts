import {Router, Request, Response} from "express"
import {getAllUsersControllers,
    getUserByIdController,
    postUserRegisterController,
    postUserLoginController,} from "../../controllers/user"
import { authLogin, authRegister } from "../../middlewares/user"
const routerUser : Router = Router ()



// /users/
routerUser.get("/", getAllUsersControllers)
// /users/2 (/:ID)
routerUser.get("/:id", getUserByIdController)
// /users/register
routerUser.post("/register", authRegister, postUserRegisterController)
// /users/login
routerUser.post("/login", authLogin, postUserLoginController)

export default routerUser

