<template>
    <div class="mockup-window border bg-base-300">
        <!-- <div class="flex justify-center px-4 py-16 bg-base-200">COMPLETED TASKS!</div> -->
        <div class="bg-base-200 py-5" :class="estilo">
            <div v-if="isLoading" class="place-self-center">
                <Loader2 />
            </div>
            <div v-else-if="tasks.length === 0">
                <h2 class="font-extrabold lg:text-4xl text-center opacity-60 md:text-2xl sm:text-xl">There are no completed
                    tasks</h2>
            </div>

            <div v-for="task in tasks" :key="task.id" class="mx-auto w-5/6 ">

                <TaskCard v-if="tasks.length !== 0" :title="task.title" :description="task.description" />

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import auth from '../utils/auth';
import { useToast } from 'vue-toastification'

import TaskCard from '../components/tasks/TaskCard.vue'
import Loader2 from '../components/loaders/Loader2.vue'

const toast = useToast()

const tasks = ref([])
const isLoading = ref(false)

const estilo = computed(() => {
    return tasks.value.length !== 0 ? 'grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-5' : 'flex justify-center items-center'
})

onMounted(() => {
    const token = $cookies.get('auth')
    isLoading.value = true
    auth.fetchCompletedTasks(token).then(res => {
        // console.log(res.data);
        tasks.value = res.data
    }).catch(err => {
        // console.log(err);
        toast.error("Error loading the tasks")
    }).finally(() => {
        isLoading.value = false
    })
})
</script>
