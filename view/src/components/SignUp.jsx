import React from 'react'
import { useForm } from 'react-hook-form'
import 'bootstrap/dist/css/bootstrap.min.css'
import { fetchRegistr } from '../redux/login/registr.slice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const initialValue = {
  userName: 'krist',
  email: 'kdfas@mail.ru',
  password: '111'
}

function SignUp() {
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
    dispatch(fetchRegistr(values))
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
          Full Name
        </label>
        <input
          type="text"
          {...register('userName', { required: 'Полное имя' })}
          placeholder={errors.name?.message}
          style={
            !!errors.name?.message
              ? { border: '2px solid red' }
              : { border: 'none' }
          }
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          {...register('email', { required: 'Полное E-Mail' })}
          placeholder={errors.email?.message}
          style={
            !!errors.email?.message
              ? { border: '2px solid red' }
              : { border: 'none' }
          }
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
          {...register('password', { required: 'Полное пароль' })}
          placeholder={errors.password?.message}
          style={
            !!errors.password?.message
              ? { border: '2px solid red' }
              : { border: 'none' }
          }
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button disabled={!isValid} type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </form>
  )
}

export default SignUp
