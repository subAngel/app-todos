<template>
	<form
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
			<BtnAuth text="Login" :isDisabled="isDisabled" :isLoading="isLoading" @click.prevent="onSubmit"/>
		</div>

		<div class="mt-6 text-center text-sm font-semibold" >
				<span class="text-center">Don't have an account?
					<router-link
					class="link link-hover link-primary"
					to="/register">Sign up</router-link>
				</span>
		</div>

	</form>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from "vue";
import { useForm } from "vee-validate";
import CustomInput from "../inputs/InputValidated.vue";
import Cookie from 'js-cookie';
import * as yup from "yup";
import axios from 'axios'
import { useToast } from "vue-toastification";
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

import auth from "../../auth";
import BtnAuth from "../buttons/BtnAuth.vue";

const email = ref("");
const password = ref("");

const toast = useToast()
const isLoading = ref(false)

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
	login(values)
});

const login = async (user) => {
	isLoading.value = true
	axios.post('https://api-todos-enwu.onrender.com/api/auth/login',
		user).then(res => {
			// console.log(res.data.token);
			const token = res.data.token
			// const { token } = res.data
			Cookies.set('authToken', token);
		}).catch(err => {
			// 19161445@itoaxaca.edu.mx
			const errorMessage = err.response.data.message
			// console.log(errorMessage);
			toast.error(errorMessage)
		}).finally(() => {
			isLoading.value = false
		})
}

const isDisabled = computed(() => {
	return email.value === "" || password.value === "" || password.value.length < 6 || isLoading.value==true;
});
</script>

<style scoped>
.isDisabled{
	opacity: 60%;
}
</style>
