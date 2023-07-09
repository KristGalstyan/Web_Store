import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as RegistReducer } from './login/registr.slice'
import { reducer as ProductReducer } from './product/products.slice'

const rootReducer = combineReducers({
  registr: RegistReducer,
  product: ProductReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
