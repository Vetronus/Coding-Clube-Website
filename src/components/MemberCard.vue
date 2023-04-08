<script setup>
import { useAuthStore } from '../stores/AuthStore';
import { useMemberStore } from '../stores/MemberStore';
const authStore = useAuthStore();
const memberStore = useMemberStore();
const props = defineProps({member: Object});
</script>

<template>
    <div class=" items-center justify-center px-2 py-8 bg-gradient-to-br from-slate-600 to-stone-900 rounded-xl shadow flex-grow flex flex-col w-72 gap-6 text-white">
    <div v-if="authStore.user" @click="() => memberStore.deleteEvent(props.member.id)" class="absolute -top-3 -right-2 cursor-pointer bg-rose-400 px-2 rounded-full">
        <i class="text-2xl text-gray-100 fa-solid fa-remove" ></i>
    </div>
        <div>
            <img class=" w-28 rounded-full " :src="props.member.image">
        </div>
        <div class="px-3">
            <h1 class="text-2xl font-semibold capitalize">{{props.member.name}}</h1>
            <div class="flex items-center justify-center">
                <span class="text-sm capitalize">{{props.member.role}} - {{props.member.year}}</span>
            </div>
        </div>
        <div class="flex gap-6 text-indigo-300">
            <a :href="props.member.github"><span class="fa-brands fa-github text-2xl "></span></a>
            <a :href="props.member.linkedin"><span class="fa-brands fa-linkedin-in text-2xl "></span></a>
            <a :href="props.member.link"><span class="fa fa-arrow-up-right-from-square text-2xl "></span></a>
        </div>
    </div>
</template>