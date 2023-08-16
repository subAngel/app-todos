<template>
	<form
		@submit.prevent="onSubmit"
		class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-3/5"
	>
		<h2 class="text-4xl font-medium text-slate-800 text-center mb-5">Log In</h2>
		<CustomInput
			modelValue="email"
			type="email"
			label="Email"
			placeholder="Your email"
			v-model="email"
			ref="emailf"
		/>
		<!-- <pre>{{ email }}</pre> -->
		<CustomInput
			modelValue="password"
			type="password"
			label="Password"
			placeholder="Your password"
			v-model="password"
		/>
		<!-- <pre>{{ password }}</pre> -->

		<div class="form-control mt-6">
			<button class="btn btn-primary" :disabled="isDisabled">Login</button>
		</div>
	</form>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useForm } from "vee-validate";
import CustomInput from "../inputs/InputValidated.vue";
import * as yup from "yup";
import axios from 'axios'

import auth from "../../auth";

const email = ref("");
const password = ref("");

const { errors, handleSubmit, defineInputBinds } = useForm({
	validationSchema: yup.object({
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
	}),
	initialValues: {
		email: "",
		password: "",
	},
});

const onSubmit = handleSubmit((values) => {

	axios.post('https://api-todos-enwu.onrender.com/api/auth/login', values).then(res => {
		console.log(res.data)
	}).catch(err => {
		console.log(err.response.data.message);
	})
	// alert(JSON.stringify(values, null, 2));
});

const isDisabled = computed(() => {
	return email.value === "" || password.value === "" || password.value.length < 6;
});
</script>
