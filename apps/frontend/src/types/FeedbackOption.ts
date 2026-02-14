import type { FeedbackType } from '@validations/feedback.validation'

export default interface FeedbackOption {
	title: FeedbackType
	icon: string
	color: string
	placeholder: string
}
