<template>
	<button class="feedback-toggle" @click="toggleFeedback">
		<div class="feedback-icon">
			<Icon name="mdi:comment-text-outline" size="24" />
		</div>
		<span class="feedback-title">Feedback</span>
	</button>
</template>

<script setup lang="ts">
import useToggle from '@composables/Feedback/useToggle'

const toggleFeedback = useToggle()
</script>

<style lang="scss" scoped>
.feedback {
	&-toggle {
		background-color: #683000;
		color: #ffd9b3;
		border-radius: 3.2rem;
		padding: 0.8rem;
		width: 4rem;
		height: 4rem;
		transition: all 0.3s ease-out;
		cursor: pointer;
		overflow: hidden;
		display: flex;
		align-items: center;
		gap: 0.8rem;

		&:hover {
			width: 11.2rem;
		}
	}

	&-icon {
		height: 100%;
	}

	&-title {
		font: 700 1.4rem / 1.6 $font-ui;
		transition: all 0.3s ease-out;
		line-height: 2.4rem;
	}
}
</style>
