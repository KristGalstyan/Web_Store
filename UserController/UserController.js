import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError.js'
import { registrationService } from '../services/registration.sevice.js'

export async function register(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
    }
    const { email, password } = req.body

    const userData = await registrationService(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })

    res.json(userData)
  } catch (e) {
    next(e)
  }
}
