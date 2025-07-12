<template>
	<div class="AppContainer">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.AppContainer {
	padding: 0 $columnPadding;
	width: 100%;
	max-width: calc($layoutWidth + (2 * $columnPadding));
	margin: 0 auto;
}
</style>
