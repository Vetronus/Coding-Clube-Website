<script setup>
    function scrollDownToEvents(){
        (document.querySelector('#events')).scrollIntoView({behavior: 'smooth'});
    }
</script>

<template>
    <a class="cursor-pointer" @click="scrollDownToEvents">
        <div class="arrow-container animated fadeInDown">
            <div class="arrow-2">
                <!-- <i class="fa fa-angle-down"></i> -->
                <span class="material-symbols-outlined">
                    expand_more
                </span>
            </div>
            <div class="arrow-1 animated hinge infinite zoomIn"></div>
        </div>
    </a>
</template>

<style lang="postcss" scoped>
.arrow-container {
    @apply mx-auto absolute left-0 right-0 bottom-12;
    width: 100px;
    height: 100px;
}

.arrow-1 {
    @apply opacity-50 rounded-full absolute bg-rose-400;
    /* @apply opacity-50 rounded-full absolute bg-gradient-to-r from-indigo-400 to-fuchsia-400; */
    width: 100px;
    height: 100px;
}

.arrow-2 {
    /* bg-gradient-to-r from-indigo-400 to-fuchsia-400; */
    @apply top-5 left-5 absolute rounded-full z-10 table bg-black opacity-50;
    width: 60px;
    height: 60px;
}

.arrow-2:before {
    /* @apply border-2 border-indigo-500; */
    width: 60px;
    height: 60px;
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 0px;
    left: 0px;
}

.arrow-2 span {
    @apply pt-1 table-cell align-middle text-center text-white text-5xl;
}

/* Custom Animate.css */

.animated.hinge {
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
}

@-webkit-keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.4, .4, .4);
        transform: scale3d(.4, .4, .4);
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 0;
    }
}

@keyframes zoomIn {
    0% {
        opacity: 0;
        -webkit-transform: scale3d(.4, .4, .4);
        transform: scale3d(.4, .4, .4);
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 0;
    }
}

.zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
    animation-iteration-count: infinite;
}
</style>