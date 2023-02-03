
import { prisma } from "../prisma.js"
import expressAsyncHandler from "express-async-handler"

// @desc Auth user
// @route POST /api/pwa
// @access Public

export const createPwa = expressAsyncHandler(async (req, res) => {
  const { status, pattern, domain, language, platform } = req.body

  const pwa = await prisma.pwa.create({
    data: {
      user: req.user._id,
      status,
      pattern,
      domain,
      language,
      platform,
      user: {
        connect: {
          id: +req.user.id
        }
      },
    },
  })
  res.json(pwa)
})


// @desc get pwa
// @route POST /api/pwa
// @access Public

export const getPwa = expressAsyncHandler(async (req, res) => {

  const pwa = await prisma.pwa.findMany({
    where: {
      userId: req.user.id,
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  res.json(pwa)
})


// @desc Remove pwa
// @route POST /api/pwa/:id
// @access Public

export const removePwa = expressAsyncHandler(async (req, res) => {
  const pwa = await prisma.pwa.delete({
    where: {
      id: +req.params.id
    }
  })
  res.json({ message: "pwa deleted", pwa: pwa.pattern })
})

// @desc update pwa
// @route PUT /api/pwa
// @access Private

export const updatePwa = expressAsyncHandler(async (req, res) => {
  const { status, pattern, domain, language, platform } = req.body
  try {
    const pwa = await prisma.pwa.update({
      where: {
        id: +req.params.id
      },
      data: {
        status,
        pattern,
        domain,
        language,
        platform
      }
    })
    res.json(pwa)
  } catch (e) {
    res.status(404)
    throw new Error("Pwa not found")
  }



})



