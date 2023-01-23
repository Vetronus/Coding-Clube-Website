<script setup>

const tags = [
    'javascript',
    'vuejs',
    'nodejs',
    'express',
    'mongodb',
    'tailwind'
]

</script>

<template>
    <div class="bg-white rounded shadow flex-grow flex flex-col w-72 gap-6">
        <div>
            <img class="rounded-t" src="../assets/test.png">
        </div>
        <div class="flex flex-col gap-6">
            <div class="px-3">
                <h1 class="text-2xl font-semibold">TIPS Coding Club</h1>
                <div class="flex items-center">
                    <span class="material-symbols-outlined text-sm text-gray-500">calendar_month</span>
                    <span class="text-sm mt-0.5 ml-1 text-gray-500">15 February 2023</span>
                </div>
                <hr>
            </div>
            <div class="flex flex-wrap gap-1 items-center px-3">
                <span class="rounded-full text-xs text-indigo-500 bg-indigo-100  capitalize px-3 py-1.5" v-for="tag in tags">{{ tag }}</span>
            </div>
            <div class="flex justify-between bg-indigo-100 p-4 items-center">
                <div class="flex gap-1">
                    <img v-for="i in 3" class="w-6 h-6 rounded-full" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=64">
                </div>
                <div class="flex gap-2">
                    <!-- <img  class="w-6 rounded-full" src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=64"> -->
                    <span class="material-symbols-outlined text-xl">code</span>
                    <!-- <span class="material-symbols-outlined text-xl">language</span> -->
                    <span class="material-symbols-outlined text-xl">arrow_forward</span>
                </div>
            </div>
        </div>
    </div>
</template>