import expressAsyncHandler from "express-async-handler"
import { hash } from "argon2"
import { prisma } from "../prisma.js"
import { UserFields } from "../utils/user.utils.js";
import { generateToken } from "./generateToken.js"

// @desc Register a new user
// @route POST /api/register
// @access Public

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { login, password, firstName, secondName, bayerId } = req.body

  const isHaveUser = await prisma.user.findUnique({
    where: {
      login
    }
  })
  if(login === '' || password === '' || firstName === '' || secondName === '' || bayerId === '') {
    res.status(400)
    throw new Error("Please fill in all fields")
  }

  if (isHaveUser) {
    res.status(400)
    throw new Error("User already exists")
  }

  const user = await prisma.user.create({
    data: {
      login, password: await hash(password), firstName, secondName, bayerId
    },
    select: UserFields
  })

  

  const token = generateToken(user.id)

  res.json({ user, token })
})
