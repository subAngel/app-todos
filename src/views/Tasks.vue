<template>
    <div class="mockup-window border bg-base-300 z-auto">
        <ul class="bg-base-200  py-5" :class="estilo">
            <div v-if="isLoading" class="place-self-center">
                <Loader2 />
            </div>

            <div v-else-if="tasks.length === 0">
                <h2 class="font-extrabold text-5xl text-center align-middle opacity-70">There are no tasks</h2>
            </div>

            <li v-for="task in tasks" :key="task.id" class="mx-auto w-5/6 ">

                <TaskCard :title="task.title" :description="task.description">
                    <BtnCard tooltip="Complete" tipo="complete" circle @click="completeAnyTask(task.id)"
                        :is-loading="isLoadingComplete" />
                    <BtnCard tooltip="Update" tipo="update" circle @click="onUpdateTask(task.id)" />
                </TaskCard>

            </li>
        </ul>
    </div>
    <ModalTailwind :show="showEditTaskModal" @close="toggleModal()">
        <template v-slot:title>
            <h3 class="font-bold text-2xl text-center">Edit Task</h3>
        </template>
        <template #closeModal>
            <div class="float-right">
                <button class="btn btn-ghost btn-circle" @click="toggleModal()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </template>
        <template v-slot:body>
            <EditTask @close-modal="toggleModal()" :task="task.value">

            </EditTask>
        </template>

    </ModalTailwind>
</template>


<script setup>
import { ref, onMounted, computed, reactive } from 'vue'
import auth from '../utils/auth';
import api from '@/utils/api'
import { useToast } from 'vue-toastification'
import { useToggle } from '@vueuse/core'

import TaskCard from '../components/tasks/TaskCard.vue'
import Loader2 from '../components/loaders/Loader2.vue'
import BtnCard from '../components/buttons/BtnCard.vue';
import ModalTailwind from '../components/ModalTailwind.vue';
import EditTask from '../components/forms/EditTask.vue';

const toast = useToast()
const token = $cookies.get('auth')

const [showEditTaskModal, toggleModal] = useToggle()

const tasks = ref([])
const task = reactive({})
const isLoading = ref(false)
const isLoadingComplete = ref(false)
const isLoadingEdit = ref(false)


const estilo = computed(() => ({
    'grid grid-cols-1 lg:grid-cols-2  gap-5': tasks.value.length !== 0,
    'flex justify-center items-center': tasks.value.length === 0
}))

const completeAnyTask = async (id) => {
    isLoadingComplete.value = true
    try {
        const rawRes = await fetch(`${api}/profile/my-tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        const response = await rawRes.json()
        toast.success("Task completed")
    } catch (error) {
        console.log(error);
        // isLoadingComplete.value = false;
        toast.error(error.response.status === 401 ? 'Unhauthorized' : "Failed to complete the task")
    } finally {
        isLoadingComplete.value = false
    }
}
const onUpdateTask = (id) => {
    task.value = {
        ...tasks.value.find(task => task.id === id)
    }

    // console.log(task.value);
    toggleModal()
    // return task.value
    // return
}

onMounted(() => {
    isLoading.value = true
    auth.fetchTasks(token).then(res => {
        tasks.value = res.data
    }).catch(err => {
        toast.error("Error loading the tasks")
    }).finally(() => {
        isLoading.value = false
    })
})
</script>
