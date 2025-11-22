import { storeToRefs } from 'pinia'

const useIsOpen = () => {
	const store = useFeedbackStore()
	const { isOpen } = storeToRefs(store)
	return isOpen
}

export default useIsOpen
