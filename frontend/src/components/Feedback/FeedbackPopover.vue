<template>
	<div v-if="isOpen" class="feedback-popover">
		<template v-if="currentStep === steps.length">
			<FeedbackSucess />
		</template>
		<template v-else>
			<div class="feedback-header">
				<div class="feedback-icon-wrapper" :class="{ 'visibility-hidden': currentStep < 0 }">
					<Icon name="ep:back" size="24" @click="resetStep" />
				</div>
				<h2 class="feedback-title">
					{{ steps[currentStep]?.title || 'Deixe seu feedback' }}
				</h2>
				<button class="feedback-icon-wrapper" type="button">
					<Icon name="material-symbols:close" size="24" @click="reset" />
				</button>
			</div>
			<template v-if="currentStep < 0">
				<FeedbackOption />
			</template>

			<template v-else>
				<FeedbackForm />
			</template>
		</template>
	</div>
</template>

<script setup lang="ts">
import useReset from '@composables/Feedback/useReset'
import useCurrentStep from '@composables/Feedback/useCurrentStep'
import useIsOpen from '@composables/Feedback/useIsOpen'
import useResetStep from '@composables/Feedback/useResetStep'
import useSteps from '@composables/Feedback/useSteps'
import FeedbackSucess from './FeedbackSucess.vue'

const isOpen = useIsOpen()

const currentStep = useCurrentStep()

const steps = useSteps()
const resetStep = useResetStep()
const reset = useReset
</script>

<style lang="scss" scoped>
.feedback {
	&-popover {
		background-color: #683000;
		color: #ffd9b3;
		border-radius: 1.6rem;
		padding: 1.6rem;
		min-width: 33.6rem;
		max-width: min-content;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;
	}

	&-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&-title {
		font: 700 2rem / 1.6 $font-heading;
		color: #ffd9b3;
	}

	&-icon {
		transition: all 0.3s ease-out;

		&-wrapper {
			height: 100%;
			cursor: pointer;
		}
	}
}
</style>
