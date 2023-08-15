<template>
	<InputForm placeholder="Email" type="email" :modelValue="email" />
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
</script>
