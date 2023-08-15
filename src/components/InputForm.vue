<template>
	<div class="form-control w-full max-w-xs">
		<input
			autocomplete="off"
			:type="type"
			:placeholder="placeholder"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			class="input input-bordered w-full max-w-xs"
		/>
		<label class="label">
			<span class="label-text-alt text-error font-semibold">
				{{ errorMessage }}
			</span>
		</label>
	</div>
</template>

<script setup>
import { useField } from "vee-validate";
import { defineEmits, defineProps, computed, toRef, toRefs } from "vue";
import * as yup from "yup";

const props = defineProps(["modelValue", "placeholder", "type"]);
const emit = defineEmits(["update:modelValue"]);

const { modelValue } = toRef(props);

const { value, errorMessage } = useField(modelValue.value, yup.string().required());
</script>
