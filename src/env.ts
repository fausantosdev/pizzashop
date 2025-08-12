import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string()
})

const env = envSchema.safeParse(import.meta.env)

if (!env.success) {
  console.error('Invalid environment variables:', env.error.format())
  throw new Error('Invalid environment variables')
}

export { env }
