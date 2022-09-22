import {Router} from 'express'
import middleware from './middleware'
import controller from './controller'

export const authRouter : Router = Router()

authRouter.post('/login', middleware.loginUser, controller.login)
authRouter.post('/register', middleware.createUser, controller.register)