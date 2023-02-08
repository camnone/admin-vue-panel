import AdmZip from 'adm-zip'
import expressAsyncHandler from 'express-async-handler'
import fs from 'fs'
import got from 'got'
import path from 'path'

import { prisma } from '../prisma.js'

export const uploadFiles = expressAsyncHandler(async (req, res) => {
	try {
		const dirname = path.resolve()
		const pattern = dirname + `/uploads` // Путь для папки

		const folderName = req.files.pattern.name.split('.')[0] // Название папки
		const FolderPathName = pattern + '/' + folderName // Путь для папки с названием

		const archivePath = dirname + `/uploads/${folderName}` // Путь для архива
		const pathArchiveName = archivePath + '/' + req.files.pattern.name // Название архива

		fs.access(FolderPathName, async err => {
			if (err && err.code === 'ENOENT') {
				res.json({ message: 'Папка создана' })
				res.status(200)
			} else {
				res.status(409)
				res.json({ message: 'Папка уже существует' })
			}
		})

		/* 		await fs.mkdirSync(FolderPathName)

		await req.files.pattern.mv(pathArchiveName)

		const zip = new AdmZip(pathArchiveName)
		await zip.extractAllTo(archivePath, true)

		await fs.unlinkSync(pathArchiveName) */
	} catch (e) {
		console.log(e)
		res.status(404)
		throw new Error('Ошибка при загрузке файла')
	}
})

/* xport const deleteFile = expressAsyncHandler(async (req, res) => {
	try {
		const folderNames = req.params.id
		const patterns = await prisma.Pattern.delete({
			where: {
				name: +req.params.id
			}
		})
		if (patterns) {
			const dirname = path.resolve()
			let pattern = dirname + `/uploads/` + '/' + `${folderNames}`
			fs.rmSync(pattern, { recursive: true, force: true })
			res.status(200)
			res.send(`Файл ${folderNames} успешно удален`)
		} else {
			res.status(401)
			res.send(`Файл ${folderNames} не найден`)
		}
	} catch (e) {
		throw new Error('Ошибка при удалении файла')
		res.status(404)
	}
})
 */
