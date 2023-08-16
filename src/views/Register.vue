<template>
	<div class="flex items-center justify-center h-screen">
		<RegisterForm />
	</div>
	<div class="static"></div>
	<Wave1 class="absolute -z-10 bottom-0"/>
</template>

<script setup>
import RegisterForm from "../components/forms/RegisterForm.vue";
import Wave1 from "../components/svgs/Wave1.vue";
</script>

<style scoped>

</style>
