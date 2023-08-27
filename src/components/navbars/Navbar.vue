<template>
  <div class="sticky top-0 navbar bg-base-300">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

          <button class="btn" @click="toggleModal()">open modal</button>

        </ul>
      </div>
      <img src="https://cdn-icons-png.flaticon.com/256/906/906334.png" class="h-10 mr-3 ml-3" alt="Tasks app" />
      <a class="normal-case text-xl font-bold">App Tasks</a>
    </div>

    <div class="navbar-center hidden lg:flex">

      <button class="btn" @click="toggleModal()">Create Task</button>

    </div>

    <div class="navbar-end">

      <div class="dropdown dropdown-end">
        <label tabindex="0" class="avatar hover:cursor-pointer">
          <div class="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2 mr-4">
            <img src="https://ps.w.org/simple-user-avatar/assets/icon-256x256.png?rev=2413146" />
          </div>
        </label>

        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 -z-0 p-2 shadow bg-base-100 rounded-box w-52">
          <div class="text-center">
            <div class="font-bold">{{ username }}</div>
            <div class="text-sm opacity-50">{{ fullname }}</div>
          </div>
          <li class="mt-3">
            <a class="btn btn-info btn-xs text-xs capitalize ">
              Profile
            </a>
          </li>
          <!-- <BtnLogout /> -->
          <li class="mt-3"><a class="btn btn-error btn-xs text-xs capitalize " @click="logout">Log Out</a></li>
        </ul>
      </div>
    </div>
  </div>

  <ModalTailwind :show="showCreateTaskModal">
    <template v-slot:title>
      <h3 class="font-bold text-2xl text-center">Create Task</h3>
    </template>
    <template #closeModal>
      <div class="float-right">
        <button class="btn btn-ghost btn-circle" @click="toggleModal()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </template>
    <template v-slot:body>
      <CreateTask>

      </CreateTask>
    </template>

  </ModalTailwind>
</template>

<script setup>
// <BtnLogout />
import { ref, computed, reactive } from "vue";
import { useToggle } from '@vueuse/core'

const props = defineProps(['fullname', 'username'])

import auth from '../../utils/auth'
import ModalTailwind from "../ModalTailwind.vue";
import CreateTask from "../forms/CreateTask.vue";

// const showCreateTaskModal = ref(false)
const [showCreateTaskModal, toggleModal] = useToggle()

const logout = () => {
  auth.logout()
}
</script>
