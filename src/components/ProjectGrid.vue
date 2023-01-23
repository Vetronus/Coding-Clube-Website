<template>
    <div id="projects" class="py-16 px-4 bg-white">
        <div class="max-w-5xl mx-auto">
            <h1 class="text-6xl uppercase mb-12">Projects</h1>
            <div class="flex flex-row flex-wrap gap-12">
                <ProjectCard v-for="i in 3" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
let colors = [
    "bg-gradient-to-r from-emerald-400 to-cyan-400",
    "bg-gradient-to-r from-cyan-400 to-blue-400",
    "bg-gradient-to-r from-blue-400 to-violet-400",
    "bg-gradient-to-r from-violet-400 to-fuchsia-400",
    "bg-gradient-to-r from-fuchsia-400 to-rose-400",
    "bg-gradient-to-r from-rose-400 to-orange-400"
]
</script>