import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import chat from "./routes/chat.js"

dotenv.config()

const app = express()
const port = 7000

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/chat", chat)

app.listen(port, () => console.log("listening on port " + port))
