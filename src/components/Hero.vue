<template>
    <div class="hero-div">
        <div class=""></div>
        <div>
            <p class="hidden md:block">Welcome To Trinity Institute of Professional Studies</p>
            <p class="md:hidden">Welcome To TIPS</p>
        </div>
        <div>
            <div class="heading">CODING CLUB</div>
        </div>
        <div>
            <p class="text-sm">Develop Your Skills Without Diligence</p>
        </div>
    </div>
    <Scrolldown />
</template>


<script setup>
import Scrolldown from './Scrolldown.vue';
</script>

<style lang="postcss" scoped>
.heading {
    @apply text-6xl md:text-8xl font-extrabold;
    background: linear-gradient(to right, #3f5efb, #fc466b, #3f5efb, #fc466b);
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animated_text 5s ease-in-out infinite;
    -moz-animation: animated_text 5s ease-in-out infinite;
    -webkit-animation: animated_text 5s ease-in-out infinite;
}

@keyframes animated_text {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 50% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.hero-div {
    @apply flex flex-col text-center items-center justify-center relative text-white;
    height: calc(100vh - 64px);
}

.hero-div div {
    @apply p-2;
}

p {
    @apply md:text-xl text-base px-6 md:px-0;
}
</style>