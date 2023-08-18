<template>
    <div class="mockup-window border bg-base-300">
        <div class="bg-base-200 grid grid-cols-1 grid-rows-2 gap-5  mx-auto">
            <div v-for="task in tasks" :key="task.id" class="">
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

const toast = useToast()

const tasks = ref([])

onMounted(() => {
    const token = $cookies.get('auth')
    auth.fetchTasks(token).then(res => {
        // console.log(res.data);
        tasks.value = res.data
    }).catch(err => {
        // console.log(err);
        toast.error("Error loading the tasks")
    })
})
</script>
