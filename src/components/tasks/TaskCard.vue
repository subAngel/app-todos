<template>
    <div class="bg-accent-content py-5 rounded-xl border px-2 flex justify-between">
        <div>
            <h3 class="font-bold lg:text-lg sm:text-sm 2xl:text-2xl">{{ title }}</h3>
            <p class="text-xs italic">{{ description }}</p>
        </div>
        <div class="flex justify-between gap-2">
            <BtnCard tooltip="Complete" tipo="complete" circle />
            <BtnCard tooltip="Update" tipo="update" circle />

        </div>

    </div>
</template>

<script setup>
import BtnCard from '../buttons/BtnCard.vue';


const props = defineProps(['title', 'description'])
</script>
