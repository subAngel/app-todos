<template>
    <div class="bg-accent-content py-5 rounded-xl border px-2">
        <h3 class="font-bold text-sm">{{ title }}</h3>
        <p class="text-xs italic">{{ description }}</p>

    </div>


    <!-- <div class="indicator ">
        <div class="indicator-item indicator-bottom">
            <button class="btn btn-primary">Apply</button>
            <button class="btn btn-primary">Apply</button>
            <button class="btn btn-primary">Apply</button>
        </div>
        <div class="card border">
            <div class="card-body">
                <h2 class="card-title font-bold">{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </div>
    </div> -->
</template>

<script setup>

const props = defineProps(['title', 'description'])
</script>
