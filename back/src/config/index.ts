import dotenv from "dotenv"; 
dotenv.config ({path: "./src/config/.env"})

const PORT = Number(process.env.PORT) 
const PROTO = process.env.PROTO 
const HOST = process.env.HOST 
const DB_TYPE = process.env.DB_TYPE 
const DB_HOST= process.env.DB_HOST 
const DB_PORT = Number(process.env.DB_PORT) 
const DB_USERNAME = process.env.DB_USERNAME 
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_NAME = process.env.DB_NAME 


export { PORT, PROTO, HOST, DB_TYPE, DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME };

