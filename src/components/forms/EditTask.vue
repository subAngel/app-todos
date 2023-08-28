<template>
    <form class="flex flex-col justify-center w-full">
        <div class="form-control max-w-sm mx-auto w-11/12">
            <label class="text-gray-500 font-bold text-left pr-4 ">
                Title
            </label>
            <input type="text" placeholder="Title" v-model="editedTask.title" class="input input-bordered w-full" />
            <label class="label h-6 ">
                <span class="label-text-alt text-rose-600">{{ errors.title }}</span>
            </label>
        </div>
        <div class="form-control max-w-sm mx-auto w-11/12">
            <label class="text-gray-500 font-bold text-left pr-4 ">
                Task description
            </label>
            <textarea rows="2" v-model="editedTask.description" class="textarea textarea-bordered w-full  "></textarea>
            <label class="label h-6 ">
                <span class="label-text-alt text-rose-600">{{ errors.description }}</span>
            </label>
        </div>

        <div class="form-control max-w-sm mx-auto w-11/12">
            <div class="flex justify-end gap-3">
                <button class="btn btn-primary" @click="onSubmit()" :disabled="isSubmitting">{{ isSubmitting ?
                    'Updating...' : 'Update' }}</button>
                <button class="btn" @click.prevent="$emit('closeModal')">Cancel</button>
            </div>
        </div>

    </form>
</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'
import { useForm } from "vee-validate";
import * as yup from "yup";
import auth from '../../utils/auth'
import { useToast } from 'vue-toastification'


const { task } = defineProps(['task'])
const emits = defineEmits(['closeModal'])
const editedTask = ref({ ...task })
const toast = useToast()

const { errors, handleSubmit, defineInputBinds, isSubmitting } = useForm({
    validationSchema: yup.object({
        title: yup.string(),
        description: yup.string(),
    }),
});

const onSubmit = handleSubmit((values) => {
    const editedTaskJSON = JSON.parse(JSON.stringify(editedTask.value))
    // console.log(editedTaskJSON);
    const token = $cookies.get('auth')
    auth.editTask(token, editedTaskJSON.id, editedTaskJSON).then(res => {
        // console.log(res.data);
        toast.success('Task updated')
        emits('closeModal')
    }).catch(err => {
        toast.error("Error updating task")
        // console.log(err);
    })
})


const title = defineInputBinds('title')
const description = defineInputBinds('description')


</script>
