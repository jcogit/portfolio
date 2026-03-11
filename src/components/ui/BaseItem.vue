<template>
    <router-link :to="to" class="nav-item flex flex-col items-center justify-center" :class="{ active: isActive }">
        <BaseIcon :name="icon" :size="size" />
        <span class="text-xs font-semibold uppercase">{{ label }}</span>
    </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseIcon, { type IconName } from './BaseIcon.vue'

const props = defineProps<{
    icon: IconName   // ← hier wichtig
    label: string
    to: string
    size?: number
}>()

const size = computed(() => props.size ?? 24)
const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<style scoped>
.nav-item {
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    text-align: center;
    border-radius: 4px;
    color: var(--color-text-primary);
    transition: background 0.2s, color 0.2s;
}

.nav-item:hover {
    color: white;
}

.nav-item.active {
    background: linear-gradient(to right,
            rgba(var(--color-accent-warm-rgb), 1),
            rgba(var(--color-accent-warm-rgb), 0));
    color: white;
}
</style>