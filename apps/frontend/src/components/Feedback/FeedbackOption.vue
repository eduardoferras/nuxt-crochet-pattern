<template>
	<ul class="feedback-options">
		<li
			v-for="(opt, index) in feedbackOptions"
			:key="opt.title"
			class="feedback-item"
			@click="setStep(index)"
		>
			<div class="feedback-icon">
				<Icon :name="opt.icon" size="24" :style="{ color: opt.color }" />
			</div>
			<h3 class="feedback-title">{{ opt.title }}</h3>
		</li>
	</ul>
</template>

<script setup lang="ts">
import feedbackOptions from '@components/Feedback/lib/feedbackOptions'
import useSetStep from '@composables/Feedback/useSetStep'
const setStep = useSetStep
</script>

<style lang="scss" scoped>
.feedback {
	&-options {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		align-items: center;
		justify-content: space-between;
		gap: 1.6rem;
	}

	&-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		background-color: #ffd9b3;
		gap: 0.8rem;
		border-radius: 1.6rem;
		padding: 1.6rem;
		transition: border-color 0.3s ease;
		border: 2px solid transparent;

		&:hover {
			border-color: #ff7f00;
		}
	}

	&-icon {
		height: 100%;
		cursor: pointer;
	}

	&-title {
		font: 600 1.6rem / 1.6 $font-heading;
		color: #683000;
	}
}
</style>
