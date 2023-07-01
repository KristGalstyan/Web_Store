import { v4 } from 'uuid'
import ApiError from '../ErrorValidation/ApiError.js'
import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { UserDto } from '../dto/userDto.js'
import { generateTokens, saveToken } from './tokens.js'

export async function registrationService(email, password) {
  const candidate = await UserModel.findOne({ email })
  if (candidate) {
    throw ApiError.BadRequest(
      `Пользватель с почтовым адресом ${email} уже существует`
    )
  }
  const hashPassword = await bcrypt.hash(password, 6)
  const activateLink = v4()

  const user = await UserModel.create({
    email,
    password: hashPassword,
    activateLink
  })

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}
