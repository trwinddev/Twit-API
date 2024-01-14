import { Router } from 'express'
import { registerController } from '~/controllers/users.controller'
import { registerValidator } from '~/middlewares/users.middlewares'

const usersRouter = Router()

usersRouter.post('/register', registerValidator, registerController)

export default usersRouter
