<template>
	<div class="App">
		<AppHeader />
		<main class="App__main">
			<NuxtPage />
		</main>
		<FeedbackWidget />
		<AppFooter />
	</div>
</template>
<script setup lang="ts">
useHead({
	titleTemplate: '%s | Receitas de Crochê'
})
</script>

<style scoped lang="scss">
.App {
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	&__main {
		flex: 1;
		padding: 2.8rem 0;
	}
}
</style>
