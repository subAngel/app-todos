<template>
	<form
		@submit.prevent="onSubmit"
		class="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm w-3/5"
	>
		<h2 class="text-4xl font-medium text-slate-800 text-center mb-5">
			Create an account
		</h2>
		<CustomInput
			modelValue="fullname"
			type="text"
			label="Full name"
			placeholder="Your full name"
			v-model="fullname"
		/>
		<CustomInput
			modelValue="username"
			type="text"
			label="Username"
			placeholder="Username"
			v-model="username"
		/>
		<CustomInput
			modelValue="email"
			type="email"
			label="Email"
			placeholder="Your email"
			v-model="email"
		/>
		<CustomInput
			modelValue="password"
			type="password"
			label="Password"
			placeholder="Your password"
			v-model="password"
		/>
		<CustomInput
			modelValue="passwordConfirm"
			type="password"
			label="Confirm the password"
			placeholder="Confirm your password"
			v-model="passwordConfirm"
		/>

		<label v-if="passwordsMatch" class="text-xs font-medium">
			<i class="fa-solid fa-circle-check" style="color: #44bf88"></i>
			<span class="text-success"> Both passwords matched</span>
		</label>

		<div class="form-control mt-6">
			<button class="btn btn-primary" :disabled="isDisabled">Regiter</button>
		</div>
	</form>

</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import axios from 'axios'
import { useForm } from "vee-validate";
import CustomInput from "../inputs/InputValidated.vue";
import * as yup from "yup";

import auth from "../../auth";


const username = ref("");
const fullname = ref("");
const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const { errors, handleSubmit } = useForm({
	validationSchema: yup.object({
		username: yup
			.string()
			.required("Username is required")
			.min(3, "Username must be at least 3 characters")
			.max(20, "Username can't exceed 20 characters")
			.matches(
				/^\w+$/,
				"Username can only contain letters, numbers, and underscores"
			),
		fullname: yup.string().min(3).max(255).required(),
		email: yup.string().email().required(),
		password: yup.string().min(6).required(),
		passwordConfirm: yup
			.string()
			.min(6)
			.oneOf([yup.ref("password"), null], "Passwords must match")
			.required("Password confirmation is required"),
	}),
});

const onSubmit = handleSubmit(onSuccess, onInvalidSubmit);
function onSuccess(values) {
	delete values.passwordConfirm;
	// alert(JSON.stringify(values, null, 2));

	auth.register(values).then(response => {
		console.log(response);
	}).catch(error => {
		alert(error)
	})
}

function onInvalidSubmit({ values, errors, results }) {
	console.log(values); // current form values
	console.log(errors); // a map of field names and their first error message
	console.log(results); // a detailed map of field names and their validation results
}
const isDisabled = computed(() => {
	return email.value === "" || password.value === "" || password.value.length < 6;
});

const passwordsMatch = computed(() => {
	return password.value === passwordConfirm.value && password.value !== "";
});
</script>
