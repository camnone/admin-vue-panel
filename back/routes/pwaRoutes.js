import express from 'express'
import { CreatePWA, deletePwa, getPWA } from '../controller/pwaList/pwaController.js'

import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/')
.post(protect,CreatePWA)
.get(protect,getPWA)
router.route('/delete').post(protect,deletePwa)

export default router