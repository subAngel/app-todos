<template>
	<main class="w-full min-h-screen flex justify-center items-center">
		<!-- <LoginForm /> -->
		<form
			class="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-base-200 min-w-sm"
			@submit="submit"
		>
			<h3 class="font-medium text-3xl text-center">Login</h3>
			<InputForm
				titleLabel="Email"
				placeholder="Email"
				typeInput="email"
				name="email"
			/>
			<InputForm
				titleLabel="Password"
				placeholder="Password"
				typeInput="password"
				name="password"
			/>

			<div class="form-control mt-6">
				<button class="btn btn-primary">Login</button>
			</div>
		</form>
	</main>
</template>

<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import InputForm from "../components/InputForm.vue";

// const email = ref("");
// const password = ref("");

const { handleSubmit } = useForm({
	validationSchema: yup.object({
		email: yup.string().required().email(),
		password: yup.string().required().min(6),
	}),
});

const submit = handleSubmit((values) => {
	alert(JSON.stringify(values, null, 2));
});
</script>
