import express from "express"
import morgan from "morgan"
import router from "../routes"
import cors from "cors"

const server = express ()

//? middlewares

server.use(morgan("dev"))
server.use(express.json())
server.use(cors())
server.use(router)

export default server