import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as LoginReducer } from './login/login.slice'

const rootReducer = combineReducers({
  login: LoginReducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
