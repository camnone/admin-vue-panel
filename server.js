import 'colors'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import fileUpload from 'express-fileupload'
import morgan from 'morgan'
import path from 'path'

import { errorHandler, notFound } from './app/middleware/error.middleware.js'

import userRouter from './app/auth/user.routes.js'
import patternRoutes from './app/pattern/pattern.routes.js'
import { prisma } from './app/prisma.js'
import profileRoutes from './app/profile/profile.routes.js'
import pwaRoutes from './app/pwa/pwa.routes.js'

const app = express()

dotenv.config()

const main = async () => {
	if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))

	const __dirname = path.resolve()
	app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

	app.use(express.json())
	app.use(cors())

	app.use(fileUpload({}))
	/*Routes*/
	app.use('/api/auth', userRouter)
	app.use('/api/users', profileRoutes)
	app.use('/api/pwa', pwaRoutes)
	app.use('/api/pattern', patternRoutes)

	/* ---- */
	app.use(notFound)
	app.use(errorHandler)
	const PORT = process.env.PORT || 5000
	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
				.bold
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
