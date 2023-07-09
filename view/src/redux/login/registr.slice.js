import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import $api from '../../axios'

export const fetchLogin = createAsyncThunk(
  'fetch/authlogin',
  async (params) => {
    return $api.post('/login', params)
  }
)
export const fetchRegistr = createAsyncThunk(
  'fetch/authRegistr',
  async (params) => {
    return $api.post('/registration', params)
  }
)

export const fetchLogout = createAsyncThunk(
  'fetch/authLogout',
  async (params) => {
    return $api.post('/logout', params)
  }
)

export const checkAuth = createAsyncThunk('fetch/checkAuth', async () => {
  return $api.get('/refresh', { withCredentials: true })
})
const initialState = {
  data: null,
  loading: null,
  error: null
}

const authSlice = createSlice({
  name: 'Registr',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegistr.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRegistr.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data.user
      })
      .addCase(fetchRegistr.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchLogout.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLogout.fulfilled, (state, action) => {
        state.loading = false
        localStorage.removeItem('token')
        state.data = false
      })
      .addCase(fetchLogout.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(checkAuth.pending, (state) => {
        state.loading = true
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.loading = false
        localStorage.setItem('token', action.payload.data.accessToken)
        state.data = action.payload.data.user
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.data.user
        localStorage.setItem('token', action.payload.data.accessToken)
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  }
})

export const { reducer } = authSlice
