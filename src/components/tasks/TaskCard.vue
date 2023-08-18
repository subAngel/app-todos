<template>
    <div class="bg-accent-content py-5 rounded-xl border px-2">
        <h3 class="font-bold text-sm">{{ title }}</h3>
        <p class="text-xs italic">{{ description }}</p>

    </div>
</template>

<script setup>

const props = defineProps(['title', 'description'])
</script>
