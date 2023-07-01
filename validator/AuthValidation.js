import { body } from 'express-validator'

export const registerValidator = [
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 15 })
]
