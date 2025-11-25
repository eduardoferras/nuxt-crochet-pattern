import { storeToRefs } from 'pinia'

const useSteps = () => {
	const store = useFeedbackStore()
	const { steps } = storeToRefs(store)
	return steps
}

export default useSteps
