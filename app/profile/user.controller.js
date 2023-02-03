import expressAsyncHandler from "express-async-handler"
import { prisma } from "../prisma.js"
import { UserFields } from "../utils/user.utils.js"

// @desc Auth user
// @route POST /api/users
// @access Public

export const getUserProfile = expressAsyncHandler(async (req, res) => {

  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id
    },
    select: UserFields
  })

  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error("User not found")
  }


})