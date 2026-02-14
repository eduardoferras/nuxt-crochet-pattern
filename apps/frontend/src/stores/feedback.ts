import feedbackOptions from '@components/Feedback/lib/feedbackOptions'
import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('feedback', {
	state: () => ({
		isOpen: false,
		isTakingScreenshot: false,
		currentStep: -1,
		steps: feedbackOptions
	}),
	actions: {
		toggleFeedback() {
			this.currentStep = -1
			this.isOpen = !this.isOpen
		},
		setStep(step: number) {
			this.currentStep = step
		},
		resetStep() {
			this.currentStep = -1
		},
		setIsTakingScreenshot(val: boolean) {
			this.isTakingScreenshot = val
		}
	}
})
