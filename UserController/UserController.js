import { validationResult } from 'express-validator'
import ApiError from '../ErrorValidation/ApiError.js'
import {
  loginService,
  registrationService,
  activateService,
  refreshService
} from '../services/user.service.js'
import { removeToken } from '../services/tokens.js'
import { burgers, drinks, fullMenu, sides } from '../data/products.js'

export async function register(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
    }
    const { email, password, userName } = req.body

    const userData = await registrationService(email, password, userName)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })

    res.json(userData)
  } catch (e) {
    next(e)
  }
}

export async function login(req, res, next) {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return next(
        ApiError.BadRequest('Неправильный логин или пароль', errors.array())
      )
    }
    const { email, password } = req.body

    const userData = await loginService(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })

    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
export async function products(req, res, next) {
  try {
    const { type } = req.params

    if (type === 'burgers') {
      res.json(burgers)
    } else if (type === 'sides') {
      res.json(sides)
    } else if (type === 'drinks') {
      res.json(drinks)
    } else if (type === 'fullMenu') {
      res.json(fullMenu)
    } else {
      res.status(400).json({ message: 'Не удалось получить прадукты' })
    }
  } catch (e) {
    next(e)
  }
}

export async function logout(req, res, next) {
  try {
    const { refreshToken } = req.cookies
    const token = await removeToken(refreshToken)
    res.clearCookie('refreshToken')
    res.status(200).json(token)
  } catch (e) {
    next(e)
  }
}

export async function activate(req, res, next) {
  try {
    const activateLink = req.params.link
    await activateService(activateLink)
    return res.redirect(process.env.CLIENT_URL)
  } catch (e) {
    next(ApiError.BadRequest('Не активный ссылка'))
  }
}

export async function refresh(req, res, next) {
  try {
    const { refreshToken } = req.cookies
    const userData = await refreshService(refreshToken)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return res.json(userData)
  } catch (e) {
    next(e)
  }
}
