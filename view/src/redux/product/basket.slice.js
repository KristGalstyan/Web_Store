import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  error: null
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    pushCardToBasket: (state, action) => {
      const isExist = state.data.some((elm) => elm.id === action.payload.id)

      if (isExist) {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        )
        state.data[index].quantity++
      } else {
        state.data.push(action.payload)
      }
    },

    deleteFromBasket: (state, action) => {
      const isExist = state.data.some((elm) => elm.id === action.payload.id)

      if (isExist) {
        const index = state.data.findIndex(
          (item) => item.id === action.payload.id
        )
        state.data.splice(index, 1)
      } else {
        return state
      }
    }
  }
})

export const { reducer, actions } = basketSlice
