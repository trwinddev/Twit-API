import express, { NextFunction, Request, Response } from 'express'
import databaseService from '~/services/database.services'
import usersRouter from '~/routes/users.routes'
import mediasRouter from '~/routes/medias.routes'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import { initFolder } from '~/utils/file'
import { config } from 'dotenv'
import { UPLOAD_VIDEO_DIR } from './utils/dir'
import staticRouter from './routes/static.routes'
config()

databaseService.connect()
const app = express()
const port = process.env.PORT || 4000
initFolder()
app.use(express.json())

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/static', staticRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))
// app.use('/static', express.static(UPLOAD_IMAGE_DIR))

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
