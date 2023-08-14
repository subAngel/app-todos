<template>
	<form class="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-base-200 min-w-sm">
		<h3 class="font-medium text-3xl text-center">Login</h3>

		<div class="form-control">
			<label class="label">
				<span
					class="label-text text-gray-500 font-bold md:text-right mb-2 md:mb-0"
				>
					Email
				</span>
			</label>
			<input
				type="text"
				placeholder="Email"
				class="input input-bordered"
				v-model="email"
			/>

			<label class="label">
				<span
					class="label-text text-gray-500 font-bold md:text-right mb-2 md:mb-0"
				>
					Password
				</span>
			</label>
			<input
				type="password"
				placeholder="Password"
				class="input input-bordered"
				v-model="password"
			/>
		</div>
	</form>
</template>

<script setup>
import { ref, computed } from "vue";

const email = ref("");
const password = ref("");
</script>
