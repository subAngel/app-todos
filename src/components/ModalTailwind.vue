<template>
    <div id="myModal" v-if="show" class="card w-96 bg-primary text-primary-content shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                <button class="btn btn-primary" @click="show = false">Close</button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    show: {
        default: false,
        type: Boolean
    }
})
</script>
