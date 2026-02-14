<template>
	<form class="feedback-form" @submit.prevent="onSubmit">
		<textarea
			v-model="feedback"
			v-bind="feedbackAttrs"
			class="feedback-textarea"
			:placeholder="steps[currentStep].placeholder"
			rows="5"
			:class="{ 'field-error': errors.feedback }"
			autofocus
		></textarea>
		<span v-if="errors.feedback" class="error">{{ errors.feedback }}</span>
		<span v-if="errors.screenshot" class="error">{{ errors.screenshot }}</span>
		<div class="feedback-footer">
			<ScreenshotButton @screenshot="screenshot = $event" />
			<button class="btn btn--submit" type="submit" :disabled="!meta.valid">
				<template v-if="!isSubmitting">Enviar</template>
				<template v-else>
					<AppLoading />
				</template>
			</button>
		</div>
	</form>
</template>

<script setup lang="ts">
import type { FeedbackForm } from '@/types/FeedbackForm'
import ScreenshotButton from '@components/Feedback/screenshot-button.vue'
import useCurrentStep from '@composables/Feedback/useCurrentStep'
import useSetStep from '@composables/Feedback/useSetStep'
import useSteps from '@composables/Feedback/useSteps'
import feedbackService from '@services/feedback.service'
import { feedbackZodSchema } from '@validations/feedback.validation'
import { toast } from 'vue-sonner'

type FormFields = keyof (typeof feedbackZodSchema)['shape']

type FetchError<T> = {
	data: { message: string; errors?: Array<{ path: T; message: string; code: string }> }
}

const currentStep = useCurrentStep()
const steps = useSteps()
const setStep = useSetStep
const { errors, setFieldError, meta, handleSubmit, isSubmitting, defineField } = useForm({
	validationSchema: feedbackZodSchema,
	initialValues: {
		type: steps.value[currentStep.value].title
	}
})
const [feedback, feedbackAttrs] = defineField('feedback')
const screenshot = ref<string | null>(null)

const onSubmit = handleSubmit(async (values) => {
	const payload: FeedbackForm = { ...values }

	if (screenshot.value) payload.screenshot = screenshot.value

	try {
		await feedbackService(payload)

		setStep(steps.value.length)
	} catch (err) {
		console.error('Erro ao enviar feedback:', err)
		const error = err as FetchError<FormFields>

		const data = error.data

		if (!data) {
			toast.error('Ocorreu um erro ao enviar o feedback. Tente novamente mais tarde.')
			return
		}

		console.log(error.data)

		if (data.message) {
			toast.error(data.message)
		}

		if (data.errors) {
			data.errors.forEach((err) => {
				setFieldError(err.path, err.message)
			})
		}
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
			color: #ef4444;
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

	&-footer {
		display: flex;
		justify-content: flex-end;
		gap: 0.8rem;
	}
}

.btn {
	&--submit {
		flex: 1;
	}
}
</style>
