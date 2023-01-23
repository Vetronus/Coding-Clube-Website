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
    <div class=" items-center justify-center px-2 py-8 bg-gradient-to-br from-slate-800 to-stone-800 rounded shadow flex flex-col w-72 gap-6 text-white">
        <!-- <div class="flex items-center justify-center bg-black rounded-full bg-gradient-to-br from-violet-500 to-pink-500" style="width: 115px; height: 115px;"> -->
        <div>
            <img class=" w-28 rounded-full " src="../assets/profile.jpg">
        </div>
        <div class="px-3">
            <h1 class="text-2xl font-semibold capitalize">Parth sarthee</h1>
            <div class="flex items-center justify-center">
                <!-- <span class="fa fa-calendar-days text-sm text-gray-500"></span> -->
                <span class="text-sm capitalize">Core Member - 2023</span>
            </div>
            <!-- <hr class="border"> -->
        </div>
        <div class="flex gap-6 text-indigo-300">
            <!-- <div class="w-10 h-10 flex justify-center items-center bg-neutral-200 p-6 rounded-full"> -->
                <a href=""><span class="fa-brands fa-github text-2xl "></span></a>
                <a href=""><span class="fa-brands fa-linkedin-in text-2xl "></span></a>
                <a href=""><span class="fa fa-arrow-up-right-from-square text-2xl "></span></a>
            <!-- </div> -->
        </div>
    </div>
</template>