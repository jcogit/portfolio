<template>
    <div :style="badgeStyle" class="px-2 py-1 rounded text-xs">
        <slot />
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    variant?: 'warm' | 'cool'
}>()

const badgeStyle = computed(() => {
    if (props.variant === 'cool') {
        return { background: 'rgba(var(--color-accent-cool-rgb), 0.5)', color: 'white' }
    }
    return { background: 'rgba(var(--color-accent-warm-rgb), 0.5)', color: 'white' }
})
</script>

<style scoped></style>