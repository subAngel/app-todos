<template>
    <!-- <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <form method="dialog" class="modal-box">
            <slot name="title"></slot>
            <slot name="body"></slot>

        </form>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog> -->
    <!-- modal -->
    <!-- <div class="fixed z-10 pt-28 left-0 top-0 w-full h-full overflow-auto bg-transparent bg-slate-800 opacity-80 blur-md">
        <div class="bg-primary md:w-1/4 md:h-2/6 lg:w-1/3 lg:h-2/5 mx-auto opacity-100">
            <slot name="title"></slot>
            <slot name="body"></slot>
        </div>
    </div> -->
    <div class="fixed inset-0 flex items-center justify-center bg-slate-800 z-50 background">
        <div class="bg-white w-80 p-4 rounded-lg shadow-lg sm:w-5/12 lg:w-4/12 md:6/12">
            <slot name="closeModal"></slot>

            <slot name="title"></slot>
            <slot name="body"></slot>

        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';

onMounted(() => {
    const click = addEventListener('click', () => {
        document.getElementById()
    })
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
