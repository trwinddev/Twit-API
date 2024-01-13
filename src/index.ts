import express from 'express'
import databaseService from '~/services/database.services'

const app = express()
const port = process.env.PORT
databaseService.connect()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
