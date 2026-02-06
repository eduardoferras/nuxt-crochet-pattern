import type { forgotPasswordSchema } from '@validations/forgot-password.validation'
import type { z } from 'zod'

export type ForgotPassword = z.infer<typeof forgotPasswordSchema>
