import expressAsyncHandler from "express-async-handler";
import { prisma } from "../../prisma.js"
// @desc Create new Exercise Log
// @route POST /api/exercises/log/:id 
// @access Private

export const createPwaLog = expressAsyncHandler(async (req, res) => {
  const ids = +req.params.id
  const pwa = await prisma.pwa.findUnique({
    where: {
      id: ids,
    }
  })

  console.log(pwa)
  if (!pwa) {
    res.status(404)
    throw new Error('Pwa not found')
  }


  const pwaLog = await prisma.pwaLog.create({
    data: {
      user: {
        connect: {
          id: +req.user.id
        }
      },
      pwa: {
        connect: {
          id: ids
        }
      },
    },
    include: {
      pwa
    }
  })
  res.json(pwaLog)


});