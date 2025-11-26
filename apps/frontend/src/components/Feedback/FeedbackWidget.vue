<template>
	<div ref="feedbackPopover" class="feedback-widget">
		<FeedbackPopover />
		<FeedbackToggle />
	</div>
</template>

<script setup lang="ts">
import useReset from '@composables/Feedback/useReset'
import { onClickOutside } from '@vueuse/core'

const reset = useReset
const feedbackPopover = ref<HTMLElement | null>(null)

onClickOutside(feedbackPopover, () => reset())
</script>

<style lang="scss" scoped>
.feedback {
	&-widget {
		position: fixed;
		right: 1.2rem;
		bottom: 2.8rem;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 1.6rem;

		@include desktop {
			bottom: 9.6rem;
		}
	}
}
</style>
