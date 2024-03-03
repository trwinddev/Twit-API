import { USERS_MESSAGES } from '~/constants/messages'
import { Request, Response, NextFunction } from 'express'
import mediaService from '~/services/media.services'

export const uploadSingleImageController = async (req: Request, res: Response, next: NextFunction) => {
  const url = await mediaService.handleUploadSingleImage(req)
  return res.json({
    message: USERS_MESSAGES.UPLOAD_SUCCESS,
    result: url
  })
}
