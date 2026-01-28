<script setup>
defineProps({
	label: {
		type: String,
		required: true
	}
})
</script>

<template>
	<label class="field-label" v-bind="$attrs">{{ label }}</label>
</template>

<style scoped lang="scss">
.field-label {
	font: 500 1.4rem / 1.2 $font-body;
	color: #281c15;
}
</style>
