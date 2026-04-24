<template>
    <div :style="badgeStyle" class="px-2 py-1 rounded text-xs">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    variant?: 'warm' | 'cool' | 'backend' | 'frontend' | 'design' | 'hospitality'
}>()

const badgeStyle = computed(() => {
    if (props.variant === 'cool') {
        return { background: 'rgba(var(--color-accent-cool-rgb), 0.3)', color: 'white' }
    }
    if (props.variant === 'warm') {
        return { background: 'rgba(var(--color-accent-warm-rgb), 0.3)', color: 'white' }
    }
    if (props.variant === 'design') {
        return { background: 'rgba(var(--color-accent-design-rgb), 0.3)', color: 'white' }
    }
    if (props.variant === 'backend') {
        return { background: 'rgba(var(--color-accent-backend-rgb), 0.3)', color: 'white' }
    }
    if (props.variant === 'frontend') {
        return { background: 'rgba(var(--color-accent-frontend-rgb), 0.3)', color: 'white' }
    }
    if (props.variant === 'hospitality') {
        return { background: 'rgba(var(--color-accent-hospitality-rgb), 0.3)', color: 'white' }
    }
    return { background: 'rgba(var(--color-accent-warm-rgb), 0.5)', color: 'white' }
})
</script>

<style scoped></style>