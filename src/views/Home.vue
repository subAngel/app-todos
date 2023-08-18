<template>
    <Navbar :fullname="user.fullname" :username="user.username" />

    <main class="mx-auto w-9/12 pt-5">
        <div class="w-3/6 mx-auto flex items-center content-center justify-center mb-5">
            <router-link class=" w-1/2 text-center text-xl" :to="`/${$route.params.username}/tasks`">
                <span>Tasks</span>
            </router-link>
            <router-link class=" w-1/2 text-center text-xl" :to="`/${$route.params.username}/completed-tasks`">
                <span>Completed Tasks</span>
            </router-link>
        </div>
        <router-view></router-view>
    </main>
    <Modal />

    <Footer />
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue'
import Navbar from '../components/navbars/Navbar.vue';
import { router } from '../routes'
import auth from '../utils/auth';
import { useToast } from 'vue-toastification'
import Footer from '../components/Footer.vue';
import Modal from '../components/modals/Modal.vue';

const user = ref({});
const toast = useToast()

onBeforeMount(() => {
    if (!$cookies.isKey('auth')) {
        router.push('/login')
    }
})

function getUser() {
    const token = $cookies.get('auth')

    auth.fetchUser(token).then(res => {
        user.value = res.data
    }).catch(err => {
        console.log(err);
        const errorMessage = err.response.data.message || 'An error ocurred'
        toast.error(errorMessage)
    });
}

onMounted(() => {
    getUser()
})


</script>

<style scoped>
.router-link-active {
    position: relative;
    height: 40px;
    padding: 0 26px;
    border: 2px solid #000;
    background: #e8e8e8;
    user-select: none;
    white-space: nowrap;
    transition: all .05s linear;
    font-family: inherit;
}

.router-link-active:before,
.router-link-active:after {
    content: "";
    position: absolute;
    background: #e8e8e8;
    transition: all .2s linear;
}

.router-link-active:before {
    width: calc(100% + 6px);
    height: calc(100% - 16px);
    top: 8px;
    left: -3px;
}

.router-link-active:after {
    width: calc(100% - 16px);
    height: calc(100% + 6px);
    top: -3px;
    left: 8px;
}

.router-link-active:hover {
    cursor: crosshair;
}

.router-link-active:active {
    transform: scale(0.95);
}

.router-link-active:hover:before {
    height: calc(100% - 32px);
    top: 16px;
}

.router-link-active:hover:after {
    width: calc(100% - 32px);
    left: 16px;
}

.router-link-active span {
    font-size: 16px;
    z-index: 3;
    position: relative;
    font-weight: 600;
}

span {
    font-size: 16px;
    z-index: 3;
    position: relative;
    font-weight: 600;
}
</style>
