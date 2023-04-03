<script setup>

const props = defineProps({member: Object});

</script>

<template>
    <div class=" items-center justify-center px-2 py-8 bg-gradient-to-br from-slate-600 to-stone-900 rounded-xl shadow flex-grow flex flex-col w-72 gap-6 text-white">
        <div>
            <img class=" w-28 rounded-full " src="../assets/profile.jpg">
        </div>
        <div class="px-3">
            <h1 class="text-2xl font-semibold capitalize">{{props.member.name}}</h1>
            <div class="flex items-center justify-center">
                <span class="text-sm capitalize">{{props.member.role}} - {{props.member.date.getFullYear()}}</span>
            </div>
        </div>
        <div class="flex gap-6 text-indigo-300">
            <a :href="props.member.github"><span class="fa-brands fa-github text-2xl "></span></a>
            <a :href="props.member.linkedin"><span class="fa-brands fa-linkedin-in text-2xl "></span></a>
            <a :href="props.member.link"><span class="fa fa-arrow-up-right-from-square text-2xl "></span></a>
        </div>
    </div>
</template>