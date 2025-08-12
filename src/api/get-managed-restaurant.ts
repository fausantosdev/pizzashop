import { axiosInstance } from '@/lib/axios'

type GetManagedRestaurantResponse = {
  name: string
  id: string
  createdAt: Date | null
  updatedAt: Date | null
  description: string | null
  managerId: string | null
}

export async function getManagedRestaurant(): Promise<GetManagedRestaurantResponse> {
  const response = await axiosInstance.get('/managed-restaurant')

  return response.data
}
