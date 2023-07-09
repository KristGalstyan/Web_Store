import axios from 'axios'

export const API_URL = 'http://localhost:4444/api'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401) {
      try {
        const response = await $api.get('/refresh', { withCredentials: true })
        localStorage.setItem('token', response.data.accessToken)
        return $api.request(originalRequest)
      } catch (e) {
        console.log(e)
        console.log('НЕ АВТОРИЗИРОВАН')
      }
    }
  }
)

export default $api
