import { storeToRefs } from 'pinia'

const useCurrentStep = () => {
	const store = useFeedbackStore()
	const { currentStep } = storeToRefs(store)
	return currentStep
}

export default useCurrentStep
