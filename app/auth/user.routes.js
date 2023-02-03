import express from 'express'
import {authUser} from './auth.controller.js'
import {registerUser} from './registration.controller.js'

const router = express.Router()

router.route('/').post(authUser)
router.route('/register').post(registerUser)


export default router