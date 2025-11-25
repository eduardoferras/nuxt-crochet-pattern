<template>
	<NuxtLink :to="to" v-bind="$attrs">
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
import type AppLink from '@/types/AppLink'

defineProps<AppLink>()
</script>
