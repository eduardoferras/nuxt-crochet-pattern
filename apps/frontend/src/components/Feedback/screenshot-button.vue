<script setup lang="ts">
import useIsTakingScreenshot from '@composables/Feedback/useIsTakingScreenshot'
import { toJpeg } from 'html-to-image'

const emit = defineEmits<(e: 'screenshot', dataURL: string) => void>()
const { isTakingScreenshot, setIsTakingScreenshot } = useIsTakingScreenshot()
const dataUrl = ref<string | null>(null)
const { setErrors } = useField('screenshot')

async function handleTakeScreenshot() {
	setIsTakingScreenshot(true)
	const screenshotTarget = document.documentElement

	try {
		dataUrl.value = await toJpeg(screenshotTarget, {
			cacheBust: true,
			quality: 0.7,
			pixelRatio: 2,
			width: window.innerWidth,
			height: window.innerHeight,
			style: {
				transform: `translateY(-${window.scrollY}px)`,
				width: `${window.innerWidth}px`,
				height: `${window.innerHeight}px`
			},
			filter: (node) => {
				if (node.nodeType !== 1) return true
				const isPopover = node.classList.contains('feedback-widget')

				return !isPopover
			}
		})

		const MAX_SIZE_MB = 5
		const sizeInBytes = dataUrl.value.length * (3 / 4)
		const sizeInMB = sizeInBytes / (1024 * 1024)

		if (sizeInMB > MAX_SIZE_MB) {
			dataUrl.value = null
			setErrors(`Print excedeu o limite de ${MAX_SIZE_MB}MB.`)
			return
		}

		if (dataUrl.value) emit('screenshot', dataUrl.value)
	} finally {
		setIsTakingScreenshot(false)
	}
}
</script>
<template>
	<template v-if="dataUrl">
		<button
			class="btn btn--trash"
			type="button"
			:style="{ backgroundImage: `url(${dataUrl})` }"
			@click="dataUrl = null"
		>
			<Icon name="material-symbols:delete" size="16" style="color: #000000" />
		</button>
	</template>
	<template v-else>
		<button class="btn btn--screenshot" type="button" @click="handleTakeScreenshot">
			<template v-if="isTakingScreenshot">
				<AppLoading />
			</template>
			<template v-else>
				<Icon name="material-symbols:android-camera-outline" size="24" />
			</template>
		</button>
	</template>
</template>
<style scoped lang="scss">
.btn {
	border-radius: 0.8rem;

	&--screenshot,
	&--trash {
		width: 4rem;
		height: 4rem;
	}

	&--screenshot {
		&:hover {
			background-color: #304986;
		}
	}

	&--trash {
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		display: flex;
		justify-content: end;
		align-items: end;
	}
}
</style>
