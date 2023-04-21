import { Router } from "express"
import { askBot, getHistory, restart } from "../lib/chatBot.js"

const chat = Router()

chat.get("/restart", async (req, res) => {
  restart()
  res.json({
    message:
      "Welcome to the developer expert chatbot!, ask me anything about code",
  })
})
chat.post("/send", async (req, res) => {
  const { user_message } = req.body
  const bot_message = await askBot(user_message)
  res.json(bot_message)
})
chat.get("/history", async (req, res) => {
  const history = await getHistory()
  res.json(history)
})

export default chat
