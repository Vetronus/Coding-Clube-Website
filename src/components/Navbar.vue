<script setup>
import { walkIdentifiers } from '@vue/compiler-core';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();

const showNav = ref(false);
async function visit(elStr) {
    if(router.currentRoute != '/') {
        router.push('/');
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    (document.querySelector(elStr)).scrollIntoView({ behavior: 'smooth' });
    showNav.value = false;
}

const toggleNav = () => showNav.value = !showNav.value;


</script>

<template>
    <nav>
        <div class="h-16 bg-white">
            <div class="nav-container flex mx-auto max-w-6xl px-4 justify-between">
                <div class="md:hidden w-16 flex items-center justify-center">
                    <i class="fa-solid fa-bars text-2xl" @click="toggleNav"></i>
                </div>
                <div class="nav-logo">
                    <!-- <img class="h-16 w-24 md:w-28 p-1" src="../assets/logo.svg" alt="Trinity Coding Club"> -->
                    <router-link to="/">
                        <img class="h-16 w-24 md:w-28 p-1" src="../assets/logo.svg" alt="Trinity Coding Club">
                    </router-link>
                </div>
                <div class="nav-item-container md:flex items-center hidden">
                    <div class="nav-item"> <a @click="visit('#events')">Events</a></div>
                    <div class="nav-item"><a @click="visit('#projects')">Projects</a></div>
                    <div class="nav-item"><a @click="visit('#team')">Team</a></div>
                    <div class="nav-item"><a @click="visit('#contact')">Contact</a></div>
                </div>
                <div class="nav-button flex items-center center justify-end">
                    <!-- <img class="h-16 w-24 p-1" src="../assets/TRICC.svg" alt="Trinity Coding Club"> -->
                    <button class="md:w-28 w-16 text-sm shadow shadow-black">Join</button>
                </div>
            </div>
        </div>
    </nav>
    <dialog :open="showNav" class="fixed top-0 left-0 z-50 w-full p-0">
        <div class="relative">
            <div class="absolute top-3.5 left-10">
                <span class="fa fa-xmark text-3xl" @click="toggleNav"></span>
            </div>
        </div>
        <div class="nav-item-container flex flex-col items-center justify-center h-screen">
            <div class="mobile-nav-item"> <a @click="visit('#events')">Events</a></div>
            <div class="mobile-nav-item"><a @click="visit('#projects')">Projects</a></div>
            <div class="mobile-nav-item"><a @click="visit('#team')">Team</a></div>
            <div class="mobile-nav-item"><a @click="visit('#contact')">Contact</a></div>
        </div>
    </dialog>
</template>

<style lang="postcss" scoped>
nav {
    @apply w-full sticky uppercase top-0 z-20;
    height: 68px;
    background-image: linear-gradient(to right, #3f5efb, #fc466b, #3f5efb, #fc466b);
}

.nav-item {
    @apply text-base mx-4 last:mr-0 first:ml-0 font-semibold
}

.mobile-nav-item {
    @apply mx-4 font-semibold uppercase p-4  w-full text-center text-2xl;
}

button {
    @apply bg-indigo-500 py-2 px-4 rounded-md uppercase font-semibold text-white;
}
</style>