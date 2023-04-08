<template>
<div class=" relative card flex flex-col justify-between w-64 h-64 p-4 flex-grow rounded shadow last:flex" :class="event.color">
    <div v-if="authStore.user" @click="() => eventStore.deleteEvent(props.event.id)" class="absolute -top-3 -right-2 cursor-pointer bg-rose-400 px-2 rounded-full">
        <i class="text-2xl text-gray-100 fa-solid fa-remove" ></i>
    </div>
    <div>
        <p class="">{{ event.date.toLocaleString('default', { month: 'long' }) }}</p>
        <h1 class="text-5xl font-semibold">{{ event.date.getDate() }}</h1>
    </div>
    <div>
        <p class="text-xl">{{ event.name }}</p>
    </div>
    <div class="flex justify-between items-center text-sm">
        <div>
            <p>{{ event.time }}</p>
            <p>{{ event.location }}</p>
        </div>
        <div class="cursor-pointer" >
            <i class="text-xl mr-2 fa-solid fa-arrow-right"></i>
        </div>
    </div>
</div>
</template>

<script setup >
import { useAuthStore } from '../stores/AuthStore';
import { useEventStore } from '../stores/EventStore';
const authStore = useAuthStore();
const eventStore = useEventStore();
const props = defineProps({event: {type: Object, required: true}});


</script>