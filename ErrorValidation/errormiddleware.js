import ApiError from './ApiError.js'

export function errorMiddleware(err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message, errors: err.errors })
  }
  return res.status(500).json({ message: 'Непредвиденная ошибка' })
}
