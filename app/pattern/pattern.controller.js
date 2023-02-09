import AdmZip from 'adm-zip'
import expressAsyncHandler from 'express-async-handler'
import fs from 'fs'
import got from 'got'
import path from 'path'

import { prisma } from '../prisma.js'

export const uploadFiles = expressAsyncHandler(async (req, res) => {
	const dirname = path.resolve()
	const template = dirname + `/uploads` // Путь для папки

	const folderName = req.body.patternName // Название папки
	const FolderPathName = template + '/' + folderName // Путь для папки с названием

	const archivePath = dirname + `/uploads/${folderName}` // Путь для архива
	const pathArchiveName = archivePath + '/' + req.files.pattern.name // Название архива

	/* Запись в БД */

	const isHaveTemplate = await prisma.pattern.findUnique({
		where: {
			name: folderName
		}
	})

	if (isHaveTemplate) {
		res.status(404)
		throw new Error('Файл уже существует')
	}

	const patterns = await prisma.Pattern.create({
		data: {
			name: folderName,
			path: FolderPathName
		}
	})

	await fs.mkdirSync(FolderPathName)

	await req.files.pattern.mv(pathArchiveName)

	const zip = new AdmZip(pathArchiveName)
	await zip.extractAllTo(archivePath, true)

	await fs.unlinkSync(pathArchiveName)

	res.status(200)
	res.json(patterns)
})

export const deleteFile = expressAsyncHandler(async (req, res) => {
	const name = req.params.id

	const isHaveTemplate = await prisma.pattern.findUnique({
		where: {
			name: name
		}
	})

	fs.rmSync(isHaveTemplate.path, { recursive: true, force: true })

	if (isHaveTemplate) {
		await prisma.pattern.delete({
			where: {
				name: name
			}
		})

		res.status(200)
		res.json({ message: 'Файл успешно удален' })
	} else {
		res.status(404)
		throw new Error('Файл не найден')
	}
})

export const getFiles = expressAsyncHandler(async (req, res) => {
	const patterns = await prisma.pattern.findMany({})
	if (patterns) {
		res.status(200)
		res.json(patterns)
	} else {
		res.status(404)
		throw new Error('Файлы не найдены')
	}
})
