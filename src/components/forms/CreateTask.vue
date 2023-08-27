<template>
    <form class="flex flex-col justify-center ">
        <div class="form-control max-w-xs mx-auto w-4/5">
            <label class="text-gray-500 font-bold text-left pr-4 ">
                Title
            </label>
            <input type="text" placeholder="Title" v-bind="title" class="input input-bordered w-full" />
            <label class="label h-6 ">
                <span class="label-text-alt text-rose-600">{{ errors.title }}</span>
            </label>
        </div>

        <div class="form-control max-w-xs mx-auto w-4/5">
            <label class="text-gray-500 font-bold text-left pr-4 ">
                Task description
            </label>
            <textarea rows="2" v-bind="description" class="textarea textarea-bordered w-full  "></textarea>
            <label class="label h-6 ">
                <span class="label-text-alt text-rose-600">{{ errors.description }}</span>
            </label>
            <div class="modal-action">
                <button class="btn btn-primary" @click.prevent="onSubmit()" :disabled="isSubmitting">{{ isSubmitting ?
                    'Creating...' : 'Create' }}</button>
                <button class="btn" @click.prevent="clear">Clear</button>
            </div>
        </div>

    </form>
</template>

<script setup>
import CustomInput from '../inputs/InputValidated.vue'
import { ref } from 'vue'
import { useForm } from "vee-validate";
import * as yup from "yup";
import auth from '../../utils/auth'

// const title = ref("")
// const description = ref("")
const completed = ref(false)
const dueDate = ref(Date.now())

const { errors, handleSubmit, defineInputBinds, isSubmitting, resetForm } = useForm({
    validationSchema: yup.object({
        title: yup.string().required('Title is required'),
        description: yup.string().required('Task description is required'),
    }),
    initialValues: {
        title: "",
        description: ""
    }

});

const onSubmit = handleSubmit((values) => {
    const token = $cookies.get('auth')
    values = {
        ...values,
        completed: completed.value,
        dueDate: dueDate.value
    }
    auth.createTask(token, values).then(res => {
        console.log("Task created");
        clear()
    }).catch(err => {
        console.log(err);
        console.error('Error creating task')
    })
})



const title = defineInputBinds('title')
const description = defineInputBinds('description')

const clear = () => {
    resetForm({
        touched: {
            title: false,
            description: false
        },
        errors: {
            title: 'Title is required',
            description: "Task description is required"
        },
        values: {
            title: '',
            description: '',
        },
    })
    completed.value = false
    dueDate.value = Date.now()
}
</script>
