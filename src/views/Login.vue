<template>
	<main class="w-full min-h-screen flex justify-center items-center">
		<form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-base-200 w-1/5">
			<h3 class="font-medium text-3xl text-center">Login</h3>
			<InputForm
				titleLabel="Email"
				placeholder="Email"
				typeInput="email"
				v-model="email"
			/>
			<InputForm
				titleLabel="Password"
				placeholder="Password"
				typeInput="password"
				v-model="password"
			/>

			<div class="form-control mt-6">
				<button class="btn btn-primary">Login</button>
			</div>
		</form>
	</main>
</template>

<script setup>
import { ref } from "vue";
import InputForm from "../components/InputForm.vue";

const email = ref("");
const password = ref("");
</script>
