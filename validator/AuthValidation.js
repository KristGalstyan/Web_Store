import { body } from 'express-validator'

export const registerValidator = [
  body('userName').isString().isLength({ min: 2, max: 10 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 15 })
]

export const loginValidator = [
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 15 })
]
