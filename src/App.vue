<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
    <Navbar />
    <RouterView/>
</template>

<style lang="postcss">
a {
    @apply cursor-pointer;
}

</style>