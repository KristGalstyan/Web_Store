import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../axios'

export const fetchProduct = createAsyncThunk(
  'fetch/fetchProduct',
  async (type) => {
    return $api.get(`/products/${type}`)
  }
)

const initialState = {
  products: null,
  loading: null,
  error: null
}

const productSlice = createSlice({
  name: 'Registr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { reducer } = productSlice
