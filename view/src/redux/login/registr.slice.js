import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../axios'

const fetchLogin = createAsyncThunk('fetch/authRegistr', async (params) => {
  return $api.post('/registration', params)
})

const initialState = {
  data: null,
  loading: null,
  error: null
}

const registr = createSlice({
  name: 'Registr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { reducer } = registr
