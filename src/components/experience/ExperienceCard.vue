<template>
    <BaseCard :variant="variant" :useDarkShadow="true" class="w-full p-4 sm:p-6">
        <div class="w-full flex flex-col gap-4">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div>
                    <h3 class="text-base sm:text-lg font-semibold text-text-primary uppercase tracking-wide">
                        {{ entry.role }}
                    </h3>
                    <p class="text-sm text-text-muted">
                        {{ entry.organization }} • {{ entry.location }}
                    </p>
                </div>

                <div class="flex items-center gap-2">
                    <BaseBadge :variant="entry.type === 'Education' ? 'cool' : 'warm'">
                        {{ entry.type }}
                    </BaseBadge>
                    <div class="period-chip">
                        {{ entry.from }} - {{ entry.to }}
                    </div>
                    <div class="period-chip duration-chip">
                        Duration: {{ durationLabel }}
                    </div>
                </div>
            </div>

            <p class="text-sm text-text-primary/90 leading-relaxed">
                {{ entry.summary }}
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <section class="experience-block">
                    <h4>What I did</h4>
                    <ul>
                        <li v-for="item in entry.did" :key="item">{{ item }}</li>
                    </ul>
                </section>

                <section class="experience-block">
                    <h4>What I learned</h4>
                    <ul>
                        <li v-for="item in entry.learned" :key="item">{{ item }}</li>
                    </ul>
                </section>

                <section class="experience-block">
                    <h4>What I particularly enjoyed</h4>
                    <ul>
                        <li v-for="item in entry.liked" :key="item">{{ item }}</li>
                    </ul>
                </section>

                <section class="experience-block">
                    <h4>Where I grew</h4>
                    <ul>
                        <li v-for="item in entry.growth" :key="item">{{ item }}</li>
                    </ul>
                </section>
            </div>

            <div class="flex flex-wrap gap-2">
                <BaseBadge v-for="item in tagVariants" :key="item.tag" :variant="item.variant">
                    {{ item.tag }}
                </BaseBadge>
            </div>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseBadge from '../ui/BaseBadge.vue'
import BaseCard from '../ui/BaseCard.vue'
import type { ExperienceEntry } from '../../data/experience'

const props = defineProps<{
    entry: ExperienceEntry
    variant: 'info-left' | 'info-right'
}>()

const frontendKeywords = ['Vue', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'UI', 'Responsive', 'Figma', 'UX']
const backendKeywords = ['Node', 'Python', 'Database', 'SQL', 'API', 'Backend', 'Git']
const designKeywords = ['Design', 'Prototyping', 'Presentation', 'UX/UI']
const hospitalityKeywords = ['Tourism', 'Customer Service', 'Hospitality', 'Guest', 'Booking', 'Holiday', 'Vacation', 'Coordination', 'Teamwork', 'Quality', 'Service']

function getTagVariant(tag: string): 'backend' | 'frontend' | 'design' | 'hospitality' {
    const lowerTag = tag.toLowerCase()

    if (hospitalityKeywords.some(kw => lowerTag.includes(kw.toLowerCase()))) {
        return 'hospitality'
    }

    if (designKeywords.some(kw => lowerTag.includes(kw.toLowerCase()))) {
        return 'design'
    }

    if (backendKeywords.some(kw => lowerTag.includes(kw.toLowerCase()))) {
        return 'backend'
    }

    if (frontendKeywords.some(kw => lowerTag.includes(kw.toLowerCase()))) {
        return 'frontend'
    }

    // Default zu design wenn nichts passt
    return 'design'
}

function formatDuration(totalMonths: number): string {
    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    if (years > 0 && months > 0) {
        return `${years} year${years === 1 ? '' : 's'} ${months} month${months === 1 ? '' : 's'}`
    }

    if (years > 0) {
        return `${years} year${years === 1 ? '' : 's'}`
    }

    return `${months} month${months === 1 ? '' : 's'}`
}

const durationLabel = computed(() => {
    if (typeof props.entry.durationMonths === 'number' && props.entry.durationMonths > 0) {
        return formatDuration(props.entry.durationMonths)
    }

    const fromYear = Number.parseInt(props.entry.from, 10)
    const toYear = Number.parseInt(props.entry.to, 10)

    if (Number.isNaN(fromYear) || Number.isNaN(toYear)) {
        return 'N/A'
    }

    const inclusiveYears = Math.max(1, toYear - fromYear + 1)
    return formatDuration(inclusiveYears * 12)
})


const tagVariants = computed(() => {
    return props.entry.tags.map(tag => ({
        tag,
        variant: getTagVariant(tag)
    }))
})
</script>

<style scoped>
.period-chip {
    border: 1px solid rgba(var(--color-accent-warm-rgb), 0.4);
    background: rgba(var(--color-surface-primary-rgb), 0.45);
    border-radius: 9999px;
    padding: 0.15rem 0.6rem;
    font-size: 0.75rem;
    color: var(--color-text-primary);
}

.duration-chip {
    border-color: rgba(var(--color-accent-cool-rgb), 0.4);
}

.experience-block {
    border: 1px solid rgba(var(--color-black-rgb), 0.65);
    border-radius: 10px;
    background: rgba(var(--color-bg-rgb), 0.5);
    padding: 0.65rem;
}

.experience-block h4 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--color-text-primary);
    margin-bottom: 0.35rem;
}

.experience-block ul {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin: 0;
    padding-left: 1rem;
}

.experience-block li {
    font-size: 0.78rem;
    line-height: 1.25;
    color: rgba(var(--color-text-primary-rgb), 0.9);
}
</style>
