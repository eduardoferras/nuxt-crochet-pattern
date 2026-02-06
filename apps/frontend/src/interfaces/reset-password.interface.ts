import type { resetPasswordSchema } from '@validations/reset-password.validation'
import type { z } from 'zod'

export type ResetPassword = z.infer<typeof resetPasswordSchema>
