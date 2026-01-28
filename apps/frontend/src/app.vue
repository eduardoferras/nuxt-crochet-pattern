<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Toaster rich-colors />
	</div>
</template>
<script setup lang="ts">
useHead({
	titleTemplate: '%s | Receitas de Crochê'
})
</script>
