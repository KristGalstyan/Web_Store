import { v4 } from 'uuid'
import ApiError from '../ErrorValidation/ApiError.js'
import UserModel from '../models/user.model.js'
import bcrypt from 'bcrypt'
import { UserDto } from '../dto/userDto.js'
import { generateTokens, saveToken } from './tokens.js'
import MailService from './mail.service.js'

export async function registrationService(email, password) {
  const candidate = await UserModel.findOne({ email })
  if (candidate) {
    throw ApiError.BadRequest(
      `Пользватель с почтовым адресом ${email} уже существует`
    )
  }
  const hashPassword = await bcrypt.hash(password, 6)
  const activationLink = v4()

  const user = await UserModel.create({
    email,
    password: hashPassword,
    activationLink
  })

  await MailService.sendActivationMail(
    email,
    `${process.env.API_URL}/api/activate/${activationLink}`
  )

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}

export async function loginService(email, password) {
  const user = await UserModel.findOne({ email })

  if (!user) {
    throw ApiError.BadRequest('Не Верный логин или пароль')
  }

  const isPassEquals = await bcrypt.compare(password, user.password)

  if (!isPassEquals) {
    throw ApiError.BadRequest('Не Верный логин или пароль')
  }

  const userDto = new UserDto(user)
  const tokens = generateTokens({ ...userDto })
  await saveToken(userDto.id, tokens.refreshToken)

  return {
    ...tokens,
    user: userDto
  }
}
