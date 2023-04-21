import { Router } from "express"

const test = Router()

test.get("/", async (req, res) => {
  res.status(200).json("Success")
})

export default test
