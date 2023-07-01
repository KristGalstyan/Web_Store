import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError.js'

export function register(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
    }
    const { password, email } = req.body
    const userData = await
    res.send('dasd')
  } catch (e) {
    console.log(e)
  }
}
