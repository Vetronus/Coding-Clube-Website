<script setup>
import { useAuthStore } from '../stores/AuthStore';
import { useProjectStore } from '../stores/ProjectStore';
const authStore = useAuthStore();
const projectStore = useProjectStore();
const props = defineProps({ project: Object })

</script>

<template>
    <div class="bg-white relative rounded shadow flex-grow flex flex-col w-72 gap-6">
        <div v-if="authStore.user" @click="() => projectStore.deleteProject(props.project.id)" class="absolute -top-3 -right-2 cursor-pointer bg-rose-400 px-2 rounded-full">
            <i class="text-2xl text-gray-100 fa-solid fa-remove" ></i>
        </div>
        <div>
            <!-- <img class="rounded-t" src="../assets/test.png"> -->
            <img class="rounded-t" :src="props.project.image">
        </div>
        <div class="flex flex-col gap-6">
            <div class="px-3">
                <h1 class="text-2xl font-semibold">{{props.project.name}}</h1>
                <div class="flex items-center">
                    <span class="fa fa-calendar-days text-sm text-gray-500"></span>
                    <span class="text-sm mt-0.5 ml-1 text-gray-500">{{props.project.date.toDateString()}}</span>
                </div>
                <hr>
            </div>
            <div class="flex flex-wrap gap-1 items-center px-3">
                <span class="rounded-full text-xs text-indigo-500 bg-indigo-100  capitalize px-3 py-1.5" v-for="tag in props.project.tags">{{ tag }}</span>
            </div>
            <div class="flex justify-between bg-indigo-100 p-4 items-center">
                <div class="flex gap-1">
                    <img v-for="member in project.team" class="w-6 h-6 rounded-full" :src="member.image">
                </div>
                <div class="flex gap-2">
                    <a :href="props.project.github"><span class="fa-brands fa-github text-xl"></span></a>
                    <a :href="props.project.link"><span class="fa-solid fa-arrow-right text-xl"></span></a>
                </div>
            </div>
        </div>
    </div>
</template>