<template>
	<div class="default">
		<AppHeader />
		<main class="default-content">
			<slot />
		</main>
		<FeedbackWidget />
		<AppFooter />
	</div>
</template>

<style lang="scss">
.default {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	&-content {
		flex: 1;
		padding: 2.8rem 0;
	}
}
</style>
