<template>
    <Navbar :fullname="user.fullname" />
</template>

<script setup>
import { onBeforeMount, onMounted, reactive, ref } from 'vue'
import Navbar from '../components/navbars/Navbar.vue';
import { router } from '../routes'
import auth from '../utils/auth';
import { useToast } from 'vue-toastification'

const user = ref({});
const toast = useToast()

onBeforeMount(() => {
    if (!$cookies.isKey('auth')) {
        router.push('/login')
    }
})

function getUser() {
    const token = $cookies.get('auth')
    // console.log(token);
    auth.fetchUser(token).then(res => {
        // console.log("getUser", res.data)
        user.value = res.data
    }).catch(err => {
        console.log(err);
        const errorMessage = err.response.data.message || 'An error ocurred'
        toast.error(errorMessage)
        // console.log(err);
    });
    // console.log('hola');
}

onMounted(() => {
    getUser()
})


</script>
