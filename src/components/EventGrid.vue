<template>
    <div id="events" class="py-16 px-4 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase font-thin mb-12">Upcoming Events</h1>
            <div class="flex flex-wrap text-white gap-5">
                <EventCard v-for="color in colors" :bg-color="color" class="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import EventCard from './EventCard.vue';
let colors = [
    "bg-gradient-to-r from-emerald-400 to-cyan-400",
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-blue-400 to-violet-400",
    "bg-gradient-to-r from-violet-400 to-fuchsia-400",
    "bg-gradient-to-r from-fuchsia-400 to-rose-400",
    "bg-gradient-to-r from-rose-400 to-orange-400"
]
</script>