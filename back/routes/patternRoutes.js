import express from 'express'
import { createPattern, deletePattern, getPattern } from '../controller/pattern/patternController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/')
  .post(protect, createPattern)
  .get(protect, getPattern)

router.route('/delete')
  .post(protect, deletePattern)

export default router