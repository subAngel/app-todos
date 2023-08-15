<template>
	<EmailInput v-model="email" rules="required|email" label="Email" />
	<pre>Model: {{ email }}</pre>
	<ErrorMessage name="email" />

	<EmailInput v-model="password" rules="required|min:8" label="Password" />
	<pre>Model: {{ password }}</pre>
	<ErrorMessage name="password" />
</template>

<script setup>
import { ref } from "vue";
import { ErrorMessage, useField } from "vee-validate";
import EmailInput from "./inputs/EmailInput.vue";

const email = ref("");
const password = ref("");

const { value: emailValue, errorMessage: emailError } = useField(
	"email",
	email.rules
);

const { value: passwordValue, errorMessage: passwordError } = useField(
	"password",
	password.rules
);
</script>
