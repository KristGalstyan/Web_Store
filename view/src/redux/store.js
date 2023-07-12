import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as RegistReducer } from './login/registr.slice'
import { reducer as ProductReducer } from './product/products.slice'
import { reducer as FullMenuReducer } from './product/fullMenu.slice'
import { reducer as BasketReducer } from './product/basket.slice'

const rootReducer = combineReducers({
  registr: RegistReducer,
  product: ProductReducer,
  fullMenu: FullMenuReducer,
  basket: BasketReducer
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export default store
