<template>
    <div id="events" class="py-16 px-4 bg-slate-100">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase mb-12">Events</h1>
            <div class="flex flex-wrap text-white gap-5">
                <EventCard v-for="event in events" :event="event" class="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import EventCard from './EventCard.vue';

const props = defineProps({
    num: {
        type: Number,
        default: 6
    }
})

let colors = [
    "bg-gradient-to-r from-emerald-400 to-cyan-400",
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-blue-400 to-violet-400",
    "bg-gradient-to-r from-violet-400 to-fuchsia-400",
    "bg-gradient-to-r from-fuchsia-400 to-rose-400",
    "bg-gradient-to-r from-rose-400 to-orange-400"
]

let events = [];
for(let i=0; i<props.num; i++) {
    events.push({
        name: "TIPS FRESHERS OF BATCH 2023",
        date: new Date(),
        time: "11:00 - 04:30",
        location: "Hotel Radisson",
        link: "https://aroxbit.com",
        color: colors[i - (parseInt(i/6)*6)]
    })
}
</script>