<template>
    <div class="mockup-window border bg-base-300">
        <div class="bg-base-200  py-5" :class="estilo">
            <div v-if="isLoading" class="place-self-center">
                <Loader2 />
            </div>

            <div v-else-if="tasks.length === 0">
                <h2 class="font-extrabold text-5xl text-center align-middle opacity-70">There are no tasks</h2>
            </div>

            <div v-for="task in tasks" :key="task.id" class="mx-auto w-5/6 ">

                <TaskCard :title="task.title" :description="task.description" @complete="completeTask(task.id)"
                    @update="onUpdateTask(task.id)" />

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
const isLoadingComplete = ref(false)
const isLoadingEdit = ref(false)

const estilo = computed(() => ({
    'grid grid-cols-1 lg:grid-cols-2  gap-5': tasks.value.length !== 0,
    'flex justify-center items-center': tasks.value.length === 0
}))

const completeTask = async (id) => {
    try {
        const token = $cookies.get('auth')
        const res = await auth.completeTask(token, id)
        console.log(res.data);
    } catch (error) {
        console.log(error);
        toast.error('Error udpating task')
    }
}
const onUpdateTask = (id) => {
    console.log(`Task ${id} updated`);
}

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
