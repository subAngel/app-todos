<template>
    <div class="lg:tooltip" :data-tip="tooltip">
        <button :class="[bgColor, shape]" class="btn hover:text-slate-800">

            <i :class="icon" class="text-xl text-slate-100 "></i>
        </button>
    </div>
</template>
<script setup>
import { computed, reactive } from 'vue'

const props = defineProps({
    tipo: {
        type: String,
        required: true,
        default: 'complete',
        validator(value) {
            return ['complete', 'delete', 'update'].includes(value)
        }
    }, tooltip: {
        type: String
    },
    circle: {
        default: false,
        type: Boolean
    }
})
const bgColor = computed(() => {
    const options = {
        complete: 'bg-emerald-400 hover:bg-emerald-600 ',
        delete: 'bg-rose-400 hover:bg-rose-600 ',
        update: 'bg-blue-400 hover:bg-blue-600 '
    }
    return options[props.tipo]
})


const shape = computed(() => {
    return props.circle ? 'btn-circle' : 'btn-square'
})


const icon = computed(() => {
    const options = {
        complete: 'fa-solid fa-circle-check',
        delete: 'fa-solid fa-trash',
        update: 'fa-solid fa-pen'
    }
    return options[props.tipo]
})
</script>

<style scoped>
</style>
