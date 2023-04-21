import { Router } from "express"
import history from "../controllers/chat/history.js"
import restart from "../controllers/chat/restart.js"
import send from "../controllers/chat/send.js"

const chat = Router()

chat.get("/restart", async (req, res) => {
  restart(req, res)
})
chat.get("/send", async (req, res) => {
  send(req, res)
})
chat.get("/history", async (req, res) => {
  history(req, res)
})

export default chat
