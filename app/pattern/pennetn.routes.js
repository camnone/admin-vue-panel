import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { uploadFiles } from './pattern.controller.js'

const router = express.Router()

router.route('/').post(uploadFiles)
/* router.route('/:id').delete(deleteFile) */

export default router
