import { OpenAI } from "langchain/llms/openai"
import { ConversationSummaryMemory } from "langchain/memory"
import { LLMChain } from "langchain/chains"
import { PromptTemplate } from "langchain/prompts"
import dotenv from "dotenv"

dotenv.config()

const memory = new ConversationSummaryMemory({
  memoryKey: "chat_history",
  llm: new OpenAI({ modelName: "gpt-3.5-turbo", temperature: 0 }),
})

const model = new OpenAI({ temperature: 0.9 })
const prompt =
  PromptTemplate.fromTemplate(`This is a conversation with an AI that only responds to development messages
  Current conversation:
  {chat_history}
  Human: {input}
  AI:`)

let chain = new LLMChain({ llm: model, prompt, memory })

export const askBot = async (userMessage) => {
  const bot_message = await chain.call({
    input: userMessage,
  })
  return {
    bot_message: bot_message.text,
  }
}

export const restart = async () => {
  new LLMChain({ llm: model, prompt, memory })
}

export const getHistory = async () => {
  const getMessages = await memory.chatHistory.getMessages()
  return getMessages
}
