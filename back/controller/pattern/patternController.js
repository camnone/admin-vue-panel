
import asyncHandler from 'express-async-handler'
import Pattern from '../../models/patternModel.js'

// @desc Create Pattern
// @route POST /api/pattern/create
// @access Private

export const createPattern = asyncHandler(async (req, res) => {
  const { pattern } = req.body
  const patterns = await Pattern.create({
    pattern,
  })

  res.json(patterns)
})

// @desc get Pattern List
// @route GET /api/pattern/
// @access Private

export const getPattern = asyncHandler(async (req, res) => {
  const pattern = await Pattern.find({})
  res.json(pattern)
})

// @desc delete Pattern Item
// @route POST /api/pattern/delete
// @access Private

export const deletePattern = asyncHandler(async (req, res) => {
  const { PatternIds } = req.body

  const pattern = await Pattern.findById(PatternIds)

  await pattern.remove()
  res.json({ message: "Удалено" })
})




