import express, { NextFunction, Request, Response } from 'express'
import databaseService from '~/services/database.services'
import usersRouter from '~/routes/users.routes'
import mediasRouter from '~/routes/medias.routes'
import { defaultErrorHandler } from '~/middlewares/error.middlewares'
import { initFolder } from '~/utils/file'
import { config } from 'dotenv'
import { UPLOAD_VIDEO_DIR } from './utils/dir'
import staticRouter from '~/routes/static.routes'
import tweetsRouter from '~/routes/tweets.routes'
import bookmarksRouter from './routes/bookmarks.routes'
config()

databaseService.connect().then(() => {
  databaseService.indexUsers()
  databaseService.indexRefreshTokens()
  databaseService.indexFollowers()
})
const app = express()
const port = process.env.PORT || 4000
initFolder()
app.use(express.json())

app.use('/users', usersRouter)
app.use('/medias', mediasRouter)
app.use('/tweets', tweetsRouter)
app.use('/bookmarks', bookmarksRouter)
app.use('/static', staticRouter)
app.use('/static/video', express.static(UPLOAD_VIDEO_DIR))
// app.use('/static', express.static(UPLOAD_IMAGE_DIR))

app.use(defaultErrorHandler)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
