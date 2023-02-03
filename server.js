import 'colors'
import express from "express"
import dotenv from "dotenv"
import morgan from 'morgan'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import userRouter from './app/auth/user.routes.js'
import profileRoutes from './app/profile/profile.routes.js'
import pwaRoutes from './app/pwa/pwa.routes.js'
import pwaLogRoutes from './app/pwa/log/pwa-log.routes.js'
import cors from 'cors'
const app = express()

dotenv.config()

const main = async () => {
  if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
  app.use(express.json())
  app.use(cors())
  /*Routes*/
  app.use('/api/auth', userRouter)
  app.use('/api/users', profileRoutes)
  app.use('/api/pwa', pwaRoutes)
  app.use('/api/pwa/log', pwaLogRoutes)

  /* ---- */
  app.use(notFound)
  app.use(errorHandler)
  const PORT = process.env.PORT || 5000
  app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
  )
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.log(e)
    await prisma.$disconnect()
  })