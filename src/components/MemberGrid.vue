<template>
    <div id="projects" class="py-28 px-4 bg-slate-100">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase mb-12">Team</h1>
            <div class="flex items-center justify-center flex-row flex-wrap gap-10">
                <MemberCard v-for="i in props.num" :member="member" />
            </div>
        </div>
    </div>
</template>

<script setup>
import MemberCard from './MemberCard.vue';
const props = defineProps({
    num: {
        type: Number,
        default: 6
    }
})

const member = {
    name: "Parth Sarthee",
    date: new Date(),
    role: "Core Member",
    github: "https://github.com",
    linkedin: "https://github.com",
    link: "https://github.com"
}
</script>