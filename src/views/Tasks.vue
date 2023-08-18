<template>
    <div class="mockup-window border bg-base-300">
        <div class="bg-base-200 grid grid-cols-1 grid-rows-2 gap-5 py-5">
            <div v-if="isLoading" class="place-self-center">
                <Loader2 />
            </div>
            <div v-for="task in tasks" :key="task.id" class="mx-auto w-5/6 ">
                <TaskCard :title="task.title" :description="task.description" />
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import auth from '../utils/auth';
import { useToast } from 'vue-toastification'

import TaskCard from '../components/tasks/TaskCard.vue'
import Loader2 from '../components/loaders/Loader2.vue'

const toast = useToast()

const tasks = ref([])
const isLoading = ref(false)

onMounted(() => {
    const token = $cookies.get('auth')
    isLoading.value = true
    auth.fetchTasks(token).then(res => {
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
