<template>
    <div class="bg-accent-content w-10/12">
        <label>{{ title }}</label>
        <label>{{ description }}</label>
    </div>
</template>

<script setup>

const props = defineProps(['title', 'description'])
</script>
