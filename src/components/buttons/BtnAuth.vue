<template>
  <button class=" bg-primary rounded-lg py-3 h-12 text-primary-content font-bold text-lg flex justify-center items-center focus:bg-primary-focus disabled:opacity-60 " tabindex="-1" role="button" aria-disabled="true"
			:class="{'isDisabled': isLoading}"
				:disabled="isLoading || isDisabled"
				>
				<Loader v-if="isLoading"/>
				<span v-else>{{text}}</span>
			</button>
</template>

<script setup>
import { defineProps } from 'vue'
import Loader from '../loaders/Loader.vue'

const props = defineProps(['text', 'isDisabled', 'isLoading'])
// const emit = defineEmits(['submit'])

</script>

<style scoped>
button:disabled{
  opacity: 60%;
}

</style>
