import { storeToRefs } from 'pinia'

const useIsTakingScreenshot = () => {
	const store = useFeedbackStore()
	const { isTakingScreenshot } = storeToRefs(store)
	const setIsTakingScreenshot = (value: boolean) => store.setIsTakingScreenshot(value)

	return {
		isTakingScreenshot: readonly(isTakingScreenshot),
		setIsTakingScreenshot
	}
}

export default useIsTakingScreenshot
