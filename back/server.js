import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import colors from 'colors'
import cors from 'cors'

dotenv.config()

/* Routes */
import userRoutes from './routes/UserRoutes.js'
import pwaRoutes from './routes/pwaRoutes.js'
/* Config */
import { notFound, errorHandler } from './middleware/errorMIdleware.js'
import { connectDB } from './config/db.js'
connectDB();

const app = express()

app.use(cors());

if (process.env.NODE_ENV = 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())



/* Routes */
app.use('/api/users/', userRoutes)
app.use('/api/pwa/', pwaRoutes)

/* ----- */

/* MiddleWare */
app.use(notFound)
app.use(errorHandler)
/* ---------- */

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(`
  Server running is ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

