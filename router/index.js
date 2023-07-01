import { Router } from 'express'
import { registerValidator } from '../validator/AuthValidation.js'
import { register, login } from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registerValidator, register)
router.post('/login', registerValidator, login)

export default router
