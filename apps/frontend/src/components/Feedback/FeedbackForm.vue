<template>
	<form class="feedback-form" @submit.prevent="onSubmit">
		<textarea
			v-model="feedback"
			name="feedback"
			v-bind="feedbackAttrs"
			class="feedback-textarea"
			:placeholder="steps[currentStep]?.placeholder || ''"
			rows="5"
			:class="{ 'field-error': errors.feedback }"
			autofocus
		></textarea>
		<span class="error">{{ errors.feedback }}</span>
		<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
			<template v-if="!isSubmitting">Enviar</template>
			<template v-else>
				<AppLoading />
			</template>
		</button>
	</form>
</template>

<script setup lang="ts">
import type { FeedbackForm } from '@/types/FeedbackForm'
import useCurrentStep from '@composables/Feedback/useCurrentStep'
import useSetStep from '@composables/Feedback/useSetStep'
import useSteps from '@composables/Feedback/useSteps'
import { feedbackZodSchema } from '@validations/feedback.validation'

const currentStep = useCurrentStep()
const steps = useSteps()
const setStep = useSetStep
const { errors, setFieldError, meta, handleSubmit, isSubmitting, defineField } = useForm({
	validationSchema: feedbackZodSchema
})
const [feedback, feedbackAttrs] = defineField('feedback')
const config = useRuntimeConfig()

const onSubmit = handleSubmit(async ({ feedback }: FeedbackForm) => {
	try {
		await $fetch(`${config.public.apiUrl}/feedback`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: { feedback }
		})

		setStep(steps.value.length)
	} catch (error) {
		console.error('Erro ao enviar feedback:', error)
		setFieldError('feedback', 'Ocorreu um erro ao enviar o feedback.')
	}
})
</script>

<style lang="scss" scoped>
.feedback {
	&-form {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		.field-error,
		.field-error:focus {
			border: 2px solid #d32f2f;
		}

		.error {
			color: #d32f2f;
			font: 700 1.2rem / 1.6 $font-body;
			margin-top: -1rem;
			padding-left: 0.4rem;
		}
	}

	&-textarea {
		background-color: #ffd9b3;
		min-width: 30.4rem;
		width: 100%;
		resize: none;
		border-radius: 0.8rem;
		padding: 1.2rem 0.8rem;
		color: #683000;
		font: 400 1.4rem / 1.6 $font-body;
		border: none;
		outline: none;
		scrollbar-width: thin;
		scrollbar-color: #ff7f00 transparent;
		border: 2px solid transparent;

		&:focus {
			border-color: #ff7f00;
		}
	}
}
</style>
