import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../axios'

export const fetchFullMenu = createAsyncThunk(
  'fetch/fetchFulMenu',
  async () => {
    return $api.get(`/products/fullMenu`)
  }
)

const initialState = {
  data: null,
  loading: null,
  error: null
}

const fullMenuSlice = createSlice({
  name: 'Registr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFullMenu.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchFullMenu.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchFullMenu.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { reducer } = fullMenuSlice
