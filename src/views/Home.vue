<template>
    <Navbar :fullname="user.fullname" :username="user.username" />

    <main class="mx-auto w-9/12 pt-28">
        <router-link :to="`/${$route.params.username}/tasks`">
            Taks
        </router-link>
        <router-link :to="`/${$route.params.username}/completed-tasks`">Completed Tasks</router-link>
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
