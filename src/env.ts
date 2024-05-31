import { z } from 'zod'

const envSchema = z.object({
  PUBLIC_USER_API: z.string().url(),
  SECRET_RESEND_API_KEY: z.string(),
  SECRET_GITHUB_PERSONAL_ACCESS_TOKEN: z.string(),
})

export const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.log(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  )

  throw new Error(
    'Invalid environment variables. Have you forgotten to create your .env file?',
  )
}

export const env = parsedEnv.data
