<template>
    <Navbar/>
</template>

<script setup>
import {onBeforeMount} from 'vue'
import Navbar from '../components/navbars/Navbar.vue';
import {router} from '../routes'

onBeforeMount(() => {
    const cookieAuth = $cookies.get('auth')
    if (!$cookies.isKey('auth')) {
        router.push('/login')
    }
})
</script>
