<template>
    <div id="myModal" v-if="mostrar" class="card w-96 bg-primary text-primary-content shadow-xl">
        <div class="card-body">
            <h2 class="card-title">Card title!</h2>
            <div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                <button class="btn btn-primary">Close</button>

            </div>
        </div>
    </div>
    <!-- Modal content -->
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    mostrar: {
        default: false,
        type: Boolean
    }
})
</script>


<style scoped>
/* Modal Header */
.modal-header {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

/* Modal Body */
.modal-body {
    padding: 2px 16px;
}

/* Modal Footer */
.modal-footer {
    padding: 2px 16px;
    background-color: #5cb85c;
    color: white;
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    border: 1px solid #888;
    width: 80%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    animation-name: animatetop;
    animation-duration: 0.4s
}

/* Add Animation */
@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}
</style>
