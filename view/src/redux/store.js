import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as RegistReducer } from './login/registr.slice'

const rootReducer = combineReducers({
  registr: RegistReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
