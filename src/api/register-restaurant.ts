import { axiosInstance } from '@/lib/axios'

type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone }: RegisterRestaurantBody) {
  await axiosInstance.post('/restaurants', {
    restaurantName,
    managerName,
    email,
    phone
  })
}
