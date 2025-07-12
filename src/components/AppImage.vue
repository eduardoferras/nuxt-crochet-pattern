<template>
	<NuxtImg v-bind="{ ...$props, ...$attrs }" />
</template>

<script setup lang="ts">
defineProps<{
	src: string
	alt: string
}>()
</script>
