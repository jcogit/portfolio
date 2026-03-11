<template>
    <BaseCard class="w-147 h-80 relative" :useDarkShadow="true">

        <!-- Title -->
        <div class="absolute top-6 left-8 text-text-primary font-semibold text-sm tracking-wide">
            KNOWLEDGE
        </div>

        <!-- Chart Wrapper -->
        <div class="relative flex-1 flex items-center justify-center mt-6">

            <!-- Y Axis -->
            <div class="relative w-10 h-48 mr-6 flex flex-col justify-between text-xs text-text-muted">
                <div v-for="tick in scaleTicks" :key="tick" class="relative h-0">
                    <span class="absolute -top-2 right-2">
                        {{ tick }}
                    </span>
                </div>
            </div>

            <!-- Chart Area -->
            <div class="relative flex-1 h-48">

                <!-- Grid Lines -->
                <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div v-for="tick in scaleTicks" :key="'line-' + tick" class="w-full border-t"
                        :style="gridLineStyle"></div>
                </div>

                <!-- Bars -->
                <div class="relative h-full flex items-end justify-between gap-6 mt-7 pr-3">
                    <div v-for="item in knowledge" :key="item.key"
                        class="flex flex-col items-center justify-end cursor-pointer group"
                        @click="setActive(item.key)">
                        <!-- Bar Wrapper -->
                        <div class="relative w-10 h-48 flex items-end">

                            <!-- Inactive Background -->
                            <div class="absolute inset-0 rounded-sm" :style="inactiveBarStyle"></div>

                            <!-- Active Fill -->
                            <div class="relative w-full rounded-sm transition-all duration-500"
                                :class="isActive(item.key) ? 'shadow-glow' : ''"
                                :style="barStyle(item.level, isActive(item.key))"></div>
                        </div>

                        <!-- Label -->
                        <div class="mt-3 text-xs tracking-wide transition-all duration-300" :class="isActive(item.key)
                            ? 'text-text-primary'
                            : 'text-text-muted group-hover:text-text-primary'">
                            {{ item.label.toUpperCase() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import BaseCard from '../ui/BaseCard.vue'
import { knowledgeData } from '../../data/knowledge'
import type { KnowledgeKey } from '../../data/knowledge'

const props = defineProps<{
    modelValue: KnowledgeKey
    autoRotate?: boolean
    interval?: number
}>()

const emit = defineEmits<{
    (e: 'update:modelValue', key: KnowledgeKey): void
}>()

const knowledge = knowledgeData

/*
  ACTIVE ist jetzt controlled
*/
const activeKey = computed({
    get: () => props.modelValue,
    set: (key: KnowledgeKey) => emit('update:modelValue', key)
})

const scaleTicks = computed(() => [10, 8, 6, 4, 2, 0])

const isActive = (key: KnowledgeKey) => activeKey.value === key

const setActive = (key: KnowledgeKey) => {
    activeKey.value = key
}

const barStyle = (level: number, active: boolean) => {
    return {
        height: `${level}%`,
        background: active
            ? 'var(--gradient-skala-aktiv)'
            : 'var(--gradient-skala-inaktiv)'
    }
}

const inactiveBarStyle = {
    background: 'rgba(var(--color-surface-primary-rgb), 0.4)'
}

const gridLineStyle = {
    borderColor: 'rgba(var(--color-accent-warm-rgb), 0.15)'
}

/*
  AUTO ROTATION
*/
let timer: number | undefined

onMounted(() => {
    if (!props.autoRotate) return

    const duration = props.interval ?? 3000

    timer = window.setInterval(() => {
        if (!knowledge.length) return

        const currentIndex = knowledge.findIndex(k => k.key === activeKey.value)
        const safeIndex = currentIndex === -1 ? 0 : currentIndex
        const nextIndex = (safeIndex + 1) % knowledge.length
        const nextItem = knowledge[nextIndex]

        if (nextItem) {
            activeKey.value = nextItem.key
        }
    }, duration)
})

onUnmounted(() => {
    if (timer) clearInterval(timer)
})
</script>
