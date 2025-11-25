<template>
	<div class="feedback-header">
		<div></div>
		<h2 class="feedback-title">
			<Icon name="lets-icons:check-fill" size="24" :style="{ color: '#25D366' }" />
			Obrigado
		</h2>
		<Icon name="material-symbols:close" size="24" style="cursor: pointer" @click="reset" />
	</div>
	<h2 class="feedback-message">Agradecemos o feedback!</h2>
	<button class="btn btn--submit" @click="setStep(-1)">Quero enviar outro</button>
</template>

<script setup lang="ts">
import useReset from '@composables/Feedback/useReset'
import useSetStep from '@composables/Feedback/useSetStep'

const reset = useReset
const setStep = useSetStep
</script>

<style lang="scss" scoped>
.feedback {
	&-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&-title {
		font: 700 2rem / 1.6 $font-heading;
		color: #ffd9b3;
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}

	&-message {
		font: 400 1.6rem / 1.6 $font-heading;
		color: #ffd9b3;
		text-align: center;
	}
}
</style>
