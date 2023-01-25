
import asyncHandler from 'express-async-handler'
import PWA from '../../models/pwaModel.js'

// @desc Create PWA
// @route POST /api/pwa/create
// @access Private

export const CreatePWA = asyncHandler(async (req, res) => {
  const { status, pattern, domain, language, platform, user } = req.body
  
  let id = Math.random() * (300 - 1) + 1;

  const pwa = await PWA.create({
    status,
    pattern,
    domain,
    language,
    platform,
    user,
  })
  res.json({pwa,id})
})


// @desc get PWA List
// @route GET /api/pwa/create
// @access Private

export const getPWA = asyncHandler(async (req, res) => {
  const pwa = await PWA.find({})
  res.json(pwa)
})


// @desc delete PWA Item
// @route POST /api/pwa/delete
// @access Private

export const deletePwa = asyncHandler(async (req, res) => {
  const {PwaIds} = req.body

  const pwa = await PWA.findById(PwaIds)

  await pwa.remove()
  res.json({message:"Удалено"})
})




