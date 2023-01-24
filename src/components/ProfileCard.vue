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
    <div class=" items-center justify-center px-2 py-8 bg-gradient-to-br from-slate-600 to-stone-900 rounded-xl shadow flex-grow flex flex-col w-72 gap-6 text-white">
        <div>
            <img class=" w-28 rounded-full " src="../assets/profile.jpg">
        </div>
        <div class="px-3">
            <h1 class="text-2xl font-semibold capitalize">Parth sarthee</h1>
            <div class="flex items-center justify-center">
                <span class="text-sm capitalize">Core Member - 2023</span>
            </div>
        </div>
        <div class="flex gap-6 text-indigo-300">
            <a href=""><span class="fa-brands fa-github text-2xl "></span></a>
            <a href=""><span class="fa-brands fa-linkedin-in text-2xl "></span></a>
            <a href=""><span class="fa fa-arrow-up-right-from-square text-2xl "></span></a>
        </div>
    </div>
</template>