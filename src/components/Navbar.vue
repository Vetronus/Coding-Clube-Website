<script setup>
function visit(elStr) {
    (document.querySelector(elStr)).scrollIntoView({ behavior: 'smooth' });
}
</script>

<template>
    <nav>
        <div class="h-16 bg-white">
            <div class="nav-container flex mx-auto max-w-6xl px-4 justify-between">
                <div class="nav-logo">
                    <img class="h-16 w-28 p-1" src="../assets/logo.svg" alt="Trinity Coding Club">
                </div>
                <div class="nav-item-container flex items-center">
                    <div class="nav-item"> <a @click="visit('#events')">Events</a></div>
                    <div class="nav-item"><a href="">Projects</a></div>
                    <div class="nav-item"><a href="">Members</a></div>
                    <div class="nav-item"><a href="">About</a></div>
                </div>
                <div class="nav-button flex items-center w-28">
                    <!-- <img class="h-16 w-24 p-1" src="../assets/TRICC.svg" alt="Trinity Coding Club"> -->
                    <button>Join</button>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang="postcss" scoped>
a {
    @apply cursor-pointer;
}
nav {
    @apply w-full sticky uppercase top-0 z-20;
    height: 68px;
    background-image: linear-gradient(to right, #3f5efb, #fc466b, #3f5efb, #fc466b);
}

.nav-item {
    @apply text-base mx-4 last:mr-0 first:ml-0 font-semibold
}

button {
    @apply bg-indigo-500 py-2 px-4 rounded-md uppercase font-semibold text-white;
}
</style>