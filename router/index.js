import { Router } from 'express'
import { registerValidator } from '../validator/AuthValidation.js'
import {
  register,
  login,
  logout,
  activate,
  refresh
} from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registerValidator, register)
router.post('/login', registerValidator, login)
router.post('/logout', logout)

router.get('/activate/:link', activate)
router.get('/refresh', refresh)

export default router
