import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as LoginReducer } from './login/login.slice'
import { reducer as RegistReducer } from './login/registr.slice'

const rootReducer = combineReducers({
  login: LoginReducer,
  registr: RegistReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
