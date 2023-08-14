<template>
	<div class="form-control">
		<label class="label">
			<span
				class="label-text text-gray-500 font-bold md:text-right mb-2 md:mb-0"
				>{{ titleLabel }}</span
			>
		</label>
		<input
			:type="typeInput"
			:placeholder="placeholder"
			class="input input-bordered"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
		<label class="label">
			<span class="label-text-alt text-error font-semibold text-sm">
				Bottom Left label
			</span>
		</label>
	</div>
</template>

<script setup>
import { defineProps, ref } from "vue";
const props = defineProps(["titleLabel", "typeInput", "placeholder", "modelValue"]);
const emits = defineEmits(["update:modelValue"]);
</script>
