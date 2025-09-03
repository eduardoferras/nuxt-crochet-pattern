<template>
	<div class="container">
		<slot />
	</div>
</template>

<style scoped lang="scss">
.container {
	padding: 0 $columnPadding;
	width: 100%;
	max-width: calc($layoutWidth + (2 * $columnPadding));
	margin: 0 auto;
}
</style>
