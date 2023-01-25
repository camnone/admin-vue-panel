import { generateToken } from '../../helpers/generateToken.js'
import asyncHandler from 'express-async-handler'
import User from "../../models/userModel.js"

// @desc Register user
// @route POST /api/users
// @access Public


export const registerUser = asyncHandler(async (req, res) => {
  const { login, password, bayerId, firstName, secondName } = req.body

  if (login.length === 0 || password.length === 0 || bayerId.length === 0 || firstName.length === 0 || secondName.length === 0) {
    res.status(400)
    throw new Error('Заполните пустыне ячейки')
  }

  const isHaveUser = await User.findOne({ login })
  if (isHaveUser) {
    res.status(400)
    throw new Error('Данный пользователь зарегестрирован')
  }
  const user = await User.create({
    password,
    bayerId,
    firstName,
    secondName,
    login
  })


  const token = generateToken(user._id)

  res.json({ user, token })
})
