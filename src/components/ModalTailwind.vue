<template>
    <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-slate-800 z-50 background">
        <div class="bg-white w-80 p-4 rounded-lg shadow-lg sm:w-5/12 lg:w-4/12 md:6/12">
            <slot name="closeModal"></slot>

            <slot name="title"></slot>
            <slot name="body"></slot>

        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})



</script>

<style scoped>
.background {
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}
</style>
