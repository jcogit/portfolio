<template>
    <BaseCard class="w-full max-w-147 min-w-0 sm:min-w-95 h-80 flex flex-col overflow-hidden" :useDarkShadow="true">

        <!-- Header -->
        <div class="w-full h-16 px-4 sm:px-8 flex items-center text-sm font-semibold tracking-wide text-text-primary">
            KNOWLEDGE
        </div>

        <!-- Chart Wrapper -->
        <div class="relative flex-1 w-full px-4 sm:px-8 pb-8 -mt-4">
            <div class="h-full flex items-end">

                <!-- Y Axis -->
                <div
                    class="relative w-4 sm:w-2 h-42 sm:h-48 mr-2 sm:mr-1 md:mr-6 flex flex-col justify-between text-xs text-text-muted">
                    <div v-for="tick in scaleTicks" :key="tick" class="relative h-0">
                        <span class="absolute -top-2 right-2">
                            {{ tick }}
                        </span>
                    </div>
                </div>

                <!-- Chart Area -->
                <div class="relative flex-1 h-42 sm:h-48">

                    <!-- Grid Lines -->
                    <div class="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        <div v-for="tick in scaleTicks" :key="'line-' + tick" class="w-full border-t"
                            :style="gridLineStyle"></div>
                    </div>

                    <!-- Bars -->
                    <div class="absolute inset-0 grid items-end gap-1 sm:gap-2 md:gap-4" :style="barsGridStyle">
                        <div v-for="item in knowledge" :key="item.key"
                            class="h-full w-full flex flex-col items-center cursor-pointer group"
                            @click="setActive(item.key)">
                            <!-- Bar Wrapper -->
                            <div class="relative w-5 sm:w-7 md:w-9 flex-1 min-h-0 flex items-end">

                                <!-- Inactive Background -->
                                <div class="absolute inset-0 rounded-sm" :style="inactiveBarStyle"></div>

                                <!-- Active Fill -->
                                <div class="relative w-full rounded-sm transition-all duration-500"
                                    :class="isActive(item.key) ? 'shadow-glow' : ''"
                                    :style="barStyle(item.level, isActive(item.key))"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Labels -->
                    <div class="absolute top-full left-0 right-0 mt-2 sm:mt-3 grid gap-1 sm:gap-2 md:gap-4"
                        :style="barsGridStyle">
                        <div v-for="item in knowledge" :key="`label-${item.key}`"
                            class="w-full text-center text-[10px] sm:text-[8px] leading-none tracking-wide transition-all duration-300"
                            :class="isActive(item.key)
                                ? 'text-text-primary'
                                : 'text-text-muted'">
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

const barsGridStyle = computed(() => ({
    gridTemplateColumns: `repeat(${knowledge.length}, minmax(0, 1fr))`
}))

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
