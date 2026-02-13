import type { feedbackZodSchema } from '@validations/feedback.validation'
import type { z } from 'zod'

export type FeedbackForm = z.infer<typeof feedbackZodSchema>
