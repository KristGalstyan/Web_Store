import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchLogin } from '../redux/login/registr.slice'

const initialValue = {
  email: 'kdfas@mail.ru',
  password: '111'
}

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    defaultValues: initialValue,
    mode: 'all'
  })

  function signUpHandle(values) {
    dispatch(fetchLogin(values))
      .then(() => {
        navigate('/')
      })
      .catch(() => {
        return alert('Не удалось авторизоваться!')
      })
    reset()
  }

  return (
    <form
      className="w-25 mx-auto text-center"
      onSubmit={handleSubmit(signUpHandle)}
    >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          {...register('email', { required: 'Укажите E-Mail' })}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          style={
            !!errors.email?.message
              ? { border: '2px solid red' }
              : { border: 'none' }
          }
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          {...register('password', { required: 'Укажите пароль' })}
          className="form-control"
          id="exampleInputPassword1"
          style={
            !!errors.password?.message
              ? { border: '2px solid red' }
              : { border: 'none' }
          }
        />
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Sign In
      </button>
    </form>
  )
}

export default SignIn
