import { config } from 'dotenv'
import { Request } from 'express'
import fs from 'fs'
import path from 'path'
import sharp from 'sharp'
import { MediaType } from '~/constants/enum'
import { Media } from '~/models/Other'
import { isProduction } from '~/utils/config'
import { UPLOAD_IMAGE_DIR } from '~/utils/dir'
import { getNameFromFullname, handleUploadImage, handleUploadVideo } from '~/utils/file'
config()

class MediaService {
  async uploadImage(req: Request) {
    const files = await handleUploadImage(req)
    const result: Media[] = await Promise.all(
      files.map(async (file) => {
        const newName = getNameFromFullname(file.newFilename)
        const newPath = path.resolve(UPLOAD_IMAGE_DIR, `${newName}.jpg`)
        sharp.cache(false)
        await sharp(file.filepath).jpeg().toFile(newPath)
        fs.unlinkSync(file.filepath)
        return {
          url: isProduction
            ? `${process.env.HOST}/static/image/${newName}.jpg`
            : `http://localhost:${process.env.PORT}/static/image/${newName}.jpg`,
          type: MediaType.Image
        }
      })
    )
    return result
  }

  async uploadVideo(req: Request) {
    const files = await handleUploadVideo(req)
    const result: Media[] = files.map((file) => {
      return {
        url: isProduction
          ? `${process.env.HOST}/static/video/${file.newFilename}`
          : `http://localhost:${process.env.PORT}/static/video/${file.newFilename}`,
        type: MediaType.Video
      }
    })
    return result
  }
}

const mediaService = new MediaService()

export default mediaService
