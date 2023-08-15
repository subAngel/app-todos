<template>
	<div class="form-control w-full max-w-xs">
		<label class="text-gray-500 font-bold mb-2 pr-4">
			{{ label }}
		</label>
		<input
			autocomplete="off"
			:type="type || 'text'"
			:placeholder="placeholder"
			@input="handleChange"
			v-on="validationListener"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<label class="label">
		<span class="text-error font-semibold">{{ errorMessage }}</span>
	</label>
</template>

<script setup>
import { defineProps } from "vue";
import { useField } from "vee-validate";

const props = defineProps({
	modelValue: String,
	placeholder: String,
	label: String,
	type: String,
});

const emit = defineEmits(["update:modelValue"]);
const { errorMessage, value, handleChange, handleBlur } = useField(
	() => props.modelValue,
	undefined,
	{
		// validateOnValueUpdate: false,
		syncVModel: true,
	}
);

const validationListener = {
	blur: (evt) => handleBlur(evt, true),
	change: handleChange,
	input: (evt) => handleChange(evt, !!errorMessage.value),
};
</script>
