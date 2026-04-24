<template>
    <div class="experience-page">
        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-4 sm:p-6 mb-4 sm:mb-6">
            <div class="w-full flex flex-col gap-2">
                <h2 class="text-lg sm:text-xl text-text-primary font-semibold uppercase tracking-wide">
                    Experience Journey
                </h2>
                <p class="text-sm text-text-muted">
                    A dashboard logbook of my stations: work, internships, and training. Each entry shows
                    the time period, tasks, learnings, highlights, and personal development.
                </p>
            </div>
        </BaseCard>

        <div class="timeline-shell">
            <div v-for="(entry, index) in experienceData" :key="entry.id" class="timeline-row">
                <span class="timeline-dot" aria-hidden="true"></span>
                <ExperienceCard :entry="entry" :variant="index % 2 === 0 ? 'info-left' : 'info-right'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'
import ExperienceCard from '../components/experience/ExperienceCard.vue'
import { experienceData } from '../data/experience'
</script>

<style scoped>
.experience-page {
    width: 100%;
}

.timeline-shell {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-left: 1.25rem;
}

.timeline-shell::before {
    content: '';
    position: absolute;
    left: 0.33rem;
    top: 0.3rem;
    bottom: 0.3rem;
    width: 2px;
    background: linear-gradient(180deg,
            rgba(var(--color-accent-cool-rgb), 0.95),
            rgba(var(--color-accent-warm-rgb), 0.6),
            rgba(var(--color-accent-warm-rgb), 0.05));
}

.timeline-row {
    position: relative;
}

.timeline-dot {
    position: absolute;
    left: -1.02rem;
    top: 1rem;
    width: 10px;
    height: 10px;
    border-radius: 9999px;
    background: rgba(var(--color-accent-warm-rgb), 1);
    box-shadow: 0 0 0 2px rgba(var(--color-bg-rgb), 1), 0 0 8px rgba(var(--color-accent-warm-rgb), 0.6);
}

@media (max-width: 767px) {
    .timeline-shell {
        padding-left: 0.75rem;
    }

    .timeline-shell::before {
        left: 0.2rem;
    }

    .timeline-dot {
        left: -0.84rem;
    }
}
</style>
