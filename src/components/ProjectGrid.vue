<template>
    <div id="projects" class="py-24 px-4 bg-white">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase mb-12">Projects</h1>
            <div class="flex flex-row flex-wrap gap-12">
                <ProjectCard v-for="i in props.num" :project="project" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
const props = defineProps({
    num: {
        type: Number,
        default: 2
    }
})

const project = {
    image: "https://picsum.photos/200/300",
    name: "TIPS Coding Club",
    date: new Date(),
    tags: ['javascript', 'vuejs', 'nodejs', 'express', 'mongodb', 'tailwind'],
    users: [],
    github: "https://github.com",
    link: "https://github.com"
}
</script>