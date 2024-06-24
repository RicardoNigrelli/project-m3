import {Router, Request, Response} from "express"

import {getAllAppointmentsControllers,
    getAppointmentByIdController,
    postAppointmentController,
    putAppointmentController,} from "../../controllers/appointment"
import { authAppointment, authCancelAppointment } from "../../middlewares/appointment"
    
const routerAppointment : Router = Router ()



// /appointments/
routerAppointment.get("/", getAllAppointmentsControllers)
// /appointments/2 (/:ID)
routerAppointment.get("/:id", getAppointmentByIdController)
// /appointments/schedule
routerAppointment.post("/schedule", authAppointment, postAppointmentController)
// /appointments/cancel
routerAppointment.put("/cancel/:id", authCancelAppointment, putAppointmentController)

export default routerAppointment

