
import asyncHandler from 'express-async-handler'
import User from "../../models/userModel.js"
import { generateToken } from '../../helpers/generateToken.js'
// @desc Authorization user
// @route POST /api/users/login
// @access Public
export const AuthUser = asyncHandler(async (req, res) => {
  const { login, password } = req.body

  const user = await User.findOne({ login })

  if(login.length === 0){
    res.status(401)
    throw new Error('Введите логин')
  }else if(password.length === 0){
    res.status(401)
    throw new Error('Введите пароль')
  }

  

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id)
    res.json({ user, token })
  } else {
    res.status(401)
    throw new Error('Неправильный логин или пароль')
  }


  res.json({ user, token });

})