import express from 'express'
import { AuthUser } from '../controller/user/authController.js'
import { getUserProfile } from '../controller/user/profileController.js'
import { registerUser } from '../controller/user/reqController.js'
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(registerUser)
router.route('/profile').get(protect,getUserProfile)
router.route('/login').post(AuthUser)

export default router