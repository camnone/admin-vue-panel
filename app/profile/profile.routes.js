import express from 'express'
import {getUserProfile} from './user.controller.js'
import {protect} from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/').get(protect,getUserProfile)


export default router