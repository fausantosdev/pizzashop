import { axiosInstance } from '@/lib/axios'

type SignInBody = {
  email: string
}

export async function signIn({ email }: SignInBody) {
  await axiosInstance.post('/authenticate', {
    email
  })
}
