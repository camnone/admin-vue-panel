import express from 'express'
import { protect } from '../../middleware/auth.middleware.js'
import { createPwaLog } from './pwa-log.controller.js'


const router = express.Router()

router.route('/:id').post(protect,createPwaLog)


export default router