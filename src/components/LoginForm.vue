<template>
	<form class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-3/5">
		<h2 class="text-4xl font-medium text-slate-800 text-center mb-5">Log In</h2>
		<CustomInput
			modelValue="email"
			type="email"
			label="Email"
			placeholder="Your email"
		/>
		<CustomInput
			modelValue="password"
			type="password"
			label="Password"
			placeholder="Your password"
		/>
		<div class="form-control mt-6">
			<button class="btn btn-primary">Login</button>
		</div>
	</form>
</template>

<script setup>
import { useForm } from "vee-validate";
import CustomInput from "./inputs/InputValidated.vue";
import * as yup from "yup";

useForm({
	validationSchema: yup.object({
		email: yup.string().required().email(),
		password: yup.string().required().min(6),
	}),
});
</script>
