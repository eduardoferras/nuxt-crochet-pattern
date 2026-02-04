import type { signInSchema } from '@validations/sign-in.validation'
import type { z } from 'zod'

export type SignIn = z.infer<typeof signInSchema>
