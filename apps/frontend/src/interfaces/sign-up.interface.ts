import type { signUpSchema } from '@validations/sign-up.validation'
import type { z } from 'zod'

export type SignUp = Omit<z.infer<typeof signUpSchema>, 'confirmPassword'>
