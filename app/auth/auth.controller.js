import expressAsyncHandler from "express-async-handler"
import {verify } from "argon2"
import { prisma } from "../prisma.js"
import { generateToken } from "./generateToken.js"

// @desc Auth user
// @route POST /api/auth
// @access Public

export const authUser = expressAsyncHandler(async (req, res) => {
  const { login, password } = req.body
  if(login === '' || password === '') {
    res.status(400)
    throw new Error('Please provide an email and password')
  }
  const user = await prisma.user.findUnique({
    where: {
      login
    }
  })

  const isValidPassword = await verify(user.password, password)

  if (user && isValidPassword) {
    const token = generateToken(user.id)
    res.json({ user, token })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})
