import { axiosInstance } from '@/lib/axios'

type GetProfileResponse = {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile(): Promise<GetProfileResponse> {
  const response = await axiosInstance.get('/me')

  return response.data
}
