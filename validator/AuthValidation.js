import { body } from 'express-validator'

export const registerValidator = [
  body('name').isString().isLength({ min: 2, max: 10 }),
  body('email').isEmail(),
  body('password').isLength({ min: 4, max: 15 })
]
