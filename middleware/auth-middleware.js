import ApiError from '../ErrorValidation/ApiError.js'
import { validateAccessToken } from '../services/tokens.js'

export const AuthMiddleware = (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      return next(ApiError.UnauthorizedError())
    }

    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return next(ApiError.UnauthorizedError())
    }
    const user = validateAccessToken(accessToken)
    if (!user) {
      return next(ApiError.UnauthorizedError())
    }
    next()
  } catch (e) {
    console.log(e)
    return next(ApiError.UnauthorizedError())
  }
}
