import { Router } from 'express'
import { registerValidator } from '../validator/AuthValidation.js'
import { register } from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registerValidator, register)

export default router
