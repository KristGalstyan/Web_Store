import { Router } from 'express'
import {
  loginValidator,
  registerValidator
} from '../validator/AuthValidation.js'
import {
  register,
  login,
  logout,
  activate,
  refresh,
  products
} from '../UserController/UserController.js'

const router = new Router()

router.post('/registration', registerValidator, register)
router.post('/login', loginValidator, login)
router.post('/logout', logout)

router.get('/products/:type', products)
router.get('/activate/:link', activate)
router.get('/refresh', refresh)

export default router
