<template>
	<div class="checkbox">
		<input v-model="value" type="checkbox" v-bind="$attrs" class="field-input" />
		<span class="checkmark">
			<Icon name="material-symbols:check-rounded" size="16" />
		</span>
	</div>
</template>

<script setup>
import { useField } from 'vee-validate'
const inputProps = defineProps({
	name: {
		type: String,
		required: true
	}
})
const { value } = useField(inputProps.name, undefined, {
	type: 'checkbox'
})
</script>

<style scoped lang="scss">
.checkbox {
	position: relative;
	height: 1.6rem;
}

.checkbox input[type='checkbox'] {
	appearance: none;
	-webkit-appearance: none;
	width: 1.6rem;
	height: 1.6rem;
	border: 2px solid #ccc;
	border-radius: 1.4rem;
	cursor: pointer;
	position: relative;
}

.checkbox .checkmark {
	border-radius: 1.4rem;
	position: absolute;
	top: 0;
	left: 0;
	width: 1.6rem;
	height: 1.6rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: transparent;
	font-size: 1.6rem;
	pointer-events: none;
}

.checkbox input[type='checkbox']:checked + .checkmark {
	background-color: #c93f1d;
	border-color: #c93f1d;
	color: #fff;
}
</style>
