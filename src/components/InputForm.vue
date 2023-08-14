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
			v-model="value"
		/>
		<!-- @input="$emit('update:modelValue', $event.target.value)" -->

		<label class="label">
			<span class="label-text-alt">{{ errorMessage }}</span>
		</label>
	</div>
</template>

<script setup>
import { useField } from "vee-validate";
import { defineProps, ref, watch, onMounted } from "vue";
const props = defineProps(["titleLabel", "typeInput", "placeholder", "name"]);
const emits = defineEmits(["update:modelValue"]);

const { value, errorMessage } = useField(() => {
	props.name;
});
</script>
