import { PORT, HOST, PROTO } from "./config/index"

import server from "./server/index"

import "reflect-metadata"

import { AppDataSource } from "./config/data-source"
import { preloadAppointmentsData, preloadUserData } from "./helpers/preloadData"

const initializeApp = async () => {
    await AppDataSource.initialize()
    // await preloadUserData ()
    // await preloadAppointmentsData ()
        server.listen(PORT, () => {
            console.log(`Server listening on ${PROTO}://${HOST}:${PORT}`)
        })
    }

initializeApp ()
