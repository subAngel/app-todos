<template>
	<div class="form-control w-full max-w-xs">
		<input
			autocomplete="off"
			:type="type || 'text'"
			:placeholder="label"
			:value="modelValue"
			@input="$emit('update:modelValue', $event.target.value)"
			v-bind="$attrs"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
	modelValue: String,
	label: String,
});
</script>
