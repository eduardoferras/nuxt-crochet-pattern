<template>
	<input v-model="value" v-bind="$attrs" class="field-input" />
	<span class="error">{{ errorMessage }}</span>
</template>

<script setup>
import { useField } from 'vee-validate'
const inputProps = defineProps({
	name: {
		type: String,
		required: true
	}
})
const { value, errorMessage } = useField(() => inputProps.name)
</script>

<style scoped lang="scss">
.field-input {
	font: 400 1.4rem / 2rem $font-body;
	color: #281c15;
	flex: 1;

	&::placeholder {
		color: #756157;
		font: 400 1.4rem / 2rem $font-body;
	}

	&:-webkit-autofill {
		box-shadow: 0 0 0px 1000px #ffffff inset !important;
		-webkit-text-fill-color: #281c15 !important;
		transition: background-color 5000s ease-in-out 0s;
	}
}
.error {
	color: #ef4343;
	font: 400 1.4rem / 1.6 $font-body;
}
</style>
