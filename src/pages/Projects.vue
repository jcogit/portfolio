<template>
    <div class="projects-page flex flex-col gap-4 sm:gap-6 pb-6">
        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-4 sm:p-6">
            <div class="w-full flex flex-col gap-3">
                <h2 class="text-lg sm:text-xl text-text-primary font-semibold uppercase tracking-wide">
                    Projects
                </h2>
                <p class="text-sm text-text-muted">
                    An overview of all projects — from fullstack platforms and mobile apps to bots and case studies.
                    Each entry shows context, contribution, current status, and links to repositories and detail pages.
                </p>
            </div>
        </BaseCard>

        <div class="projects-grid">
            <ProjectCard v-for="project in projectsData" :key="project.id" :project="project" />
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'
import ProjectCard from '../components/projects/ProjectCard.vue'
import { projectsData } from '../data/projects'
</script>

<style scoped>
.projects-page {
    width: 100%;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
}

@media (min-width: 1024px) {
    .projects-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
