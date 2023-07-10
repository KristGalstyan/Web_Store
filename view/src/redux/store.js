import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as RegistReducer } from './login/registr.slice'
import { reducer as ProductReducer } from './product/products.slice'
import { reducer as FullMenuReducer } from './product/fullMenu.slice'

const rootReducer = combineReducers({
  registr: RegistReducer,
  product: ProductReducer,
  fullMenu: FullMenuReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
