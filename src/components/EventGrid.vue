<template>
    <div id="events" class="py-16 px-4 bg-slate-50">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase font-thin mb-12">Upcoming Events</h1>
            <div class="flex flex-wrap text-white gap-5">
                <EventCard :bg-color="color" class=""/>
                <EventCard :bg-color="color2" class=""/>
                <EventCard :bg-color="color3" class=""/>
                <EventCard :bg-color="color4" class=""/>
                <EventCard :bg-color="color5" class=""/>
                <EventCard :bg-color="color6" class=""/>
                <!-- <EventCard :bg-color="color2" class=""/> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import EventCard from './EventCard.vue';
let color = "bg-gradient-to-r from-emerald-400 to-cyan-400";
let color2 = "bg-gradient-to-r from-cyan-400 to-blue-400";
let color3 = "bg-gradient-to-r from-blue-400 to-violet-400";
let color4 = "bg-gradient-to-r from-violet-400 to-fuchsia-400";
let color5 = "bg-gradient-to-r from-fuchsia-400 to-rose-400";
let color6 = "bg-gradient-to-r from-rose-400 to-orange-400";
let colors = ["bg-indigo-400", "bg-violet-400", "bg-purple-400", "bg-fuchsia-400", "bg-pink-400"]
</script>