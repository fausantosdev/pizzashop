import { env } from '@/env'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: env.data?.VITE_API_URL,// Ensure this environment variable is set
  headers: {// Set default headers
    'Content-Type': 'application/json',
  },
  withCredentials: true,// Allow cookies to be sent with requests
  timeout: 10000, // Set a timeout of 10 seconds
})

if(env.data?.VITE_ENABLE_API_DELAY){
  axiosInstance.interceptors.request.use(async (config) => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    return config
  })
}

export { axiosInstance }
