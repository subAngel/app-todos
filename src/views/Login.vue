<template>
	<div class="flex items-center justify-center h-screen">
		<LoginForm />
	</div>
</template>

<script setup>
// import InputForm from "../components/InputForm.vue";
import { onBeforeMount } from 'vue'
import { router } from '../routes'
import LoginForm from "../components/forms/LoginForm.vue";

onBeforeMount(() => {
	$cookies.remove('auth')
	// if ($cookies.isKey('auth')) {
	// 	router.push('/')
	// }
})
</script>
