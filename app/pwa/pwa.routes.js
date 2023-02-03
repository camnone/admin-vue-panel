import express from 'express'
import { protect } from '../middleware/auth.middleware.js'
import { createPwa, getPwa, removePwa, updatePwa } from './pwa.controller.js'

const router = express.Router()

router.route('/').post(protect, createPwa).get(protect, getPwa)
router.route('/:id').delete(protect, removePwa).put(protect, updatePwa)


export default router