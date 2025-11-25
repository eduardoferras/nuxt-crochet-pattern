import type { feedbackZodSchema } from '@schemas/feedback'
import type { z } from 'zod'

export type FeedbackForm = z.infer<typeof feedbackZodSchema>
