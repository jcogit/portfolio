<template>
    <BaseCard :variant="cardVariant" :useDarkShadow="true" class="project-card p-4 sm:p-5">
        <div class="w-full flex flex-col items-start gap-4">
            <div v-if="project.cover" class="project-cover-wrap">
                <img :src="project.cover" :alt="project.title" class="project-cover" loading="lazy" />
            </div>

            <div class="w-full flex flex-wrap items-center gap-2">
                <BaseBadge :variant="categoryVariant">
                    {{ categoryLabel }}
                </BaseBadge>

                <span class="status-pill" :class="`status-${project.status}`">
                    {{ statusLabel }}
                </span>
            </div>

            <div class="w-full flex flex-col gap-1">
                <h3 class="text-base sm:text-lg text-text-primary font-semibold uppercase tracking-wide">
                    {{ project.title }}
                </h3>
                <p class="text-xs sm:text-sm text-text-muted">{{ project.role }}</p>
            </div>

            <p class="text-sm text-text-primary/90 leading-relaxed">{{ project.summary }}</p>

            <ul class="highlights-list">
                <li v-for="(item, idx) in project.highlights" :key="idx" class="text-sm text-text-muted">
                    {{ item }}
                </li>
            </ul>

            <div class="w-full flex flex-wrap gap-2">
                <BaseBadge v-for="tag in project.tech" :key="tag" :variant="categoryVariant">
                    {{ tag }}
                </BaseBadge>
            </div>

            <div class="w-full flex flex-wrap gap-2 pt-1">
                <template v-for="link in project.links" :key="link.href + link.label">
                    <router-link v-if="isInternalLink(link.href)" :to="link.href" class="project-link-btn">
                        {{ link.label }}
                    </router-link>

                    <a v-else :href="link.href" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                        {{ link.label }}
                    </a>
                </template>

                <span v-if="project.links.length === 0" class="asset-pending">Assets pending upload</span>
            </div>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '../ui/BaseCard.vue'
import BaseBadge from '../ui/BaseBadge.vue'
import type { ProjectItem } from '../../data/projects'

const props = defineProps<{
    project: ProjectItem
}>()

const categoryLabel = computed(() => (props.project.category === 'programming' ? 'Programming' : 'Design'))

const categoryVariant = computed(() => (props.project.category === 'programming' ? 'frontend' : 'design'))

const cardVariant = computed(() => (props.project.category === 'programming' ? 'info-left' : 'info-right'))

const statusLabelMap: Record<ProjectItem['status'], string> = {
    live: 'Live',
    'in-progress': 'In Progress',
    'case-study': 'Case Study',
    concept: 'Concept'
}

const statusLabel = computed(() => statusLabelMap[props.project.status])

function isInternalLink(href: string): boolean {
    return href.startsWith('/') && !href.startsWith('/house-rental-prototype')
}
</script>

<style scoped>
.project-card {
    width: 100%;
}

.project-cover-wrap {
    width: 100%;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.3);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.25);
}

.project-cover {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
}

.highlights-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0;
    padding-left: 1rem;
}

.status-pill {
    border-radius: 9999px;
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    border: 1px solid transparent;
}

.status-live {
    color: rgba(var(--color-accent-cool-rgb), 1);
    background: rgba(var(--color-accent-cool-rgb), 0.12);
    border-color: rgba(var(--color-accent-cool-rgb), 0.4);
}

.status-in-progress {
    color: rgba(var(--color-accent-warm-rgb), 1);
    background: rgba(var(--color-accent-warm-rgb), 0.12);
    border-color: rgba(var(--color-accent-warm-rgb), 0.45);
}

.status-case-study,
.status-concept {
    color: rgba(var(--color-text-primary-rgb), 1);
    background: rgba(var(--color-surface-primary-rgb), 0.45);
    border-color: rgba(var(--color-text-muted-rgb), 0.4);
}

.project-link-btn {
    border: 1px solid var(--color-stroke);
    border-radius: 8px;
    padding: 0.35rem 0.7rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-text-primary);
    background: rgba(var(--color-surface-primary-rgb), 0.35);
    transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.project-link-btn:hover {
    color: white;
    border-color: rgba(var(--color-accent-cool-rgb), 0.8);
    transform: translateY(-1px);
}

.asset-pending {
    font-size: 0.75rem;
    color: var(--color-text-muted);
    border: 1px dashed rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 8px;
    padding: 0.3rem 0.6rem;
}
</style>