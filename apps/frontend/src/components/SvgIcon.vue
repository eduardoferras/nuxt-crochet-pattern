<template>
	<svg v-bind="$attrs" :aria-label="label">
		<title>{{ label }}</title>
		<use :href="`/icons/sprite.svg#${name}`" />
	</svg>
</template>

<script setup lang="ts">
import type SvgIcon from '@/types/SvgIcon'

defineProps<SvgIcon>()
</script>
