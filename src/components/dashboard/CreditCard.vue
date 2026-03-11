<template>
    <BaseCard variant="credit" :glow="glow" :useDarkShadow="useDarkShadow" class="w-96 h-55 relative overflow-hidden">
        <!-- Radial Gradient -->
        <div class="absolute inset-0 pointer-events-none" :style="glossStyle"></div>

        <!-- Inner Content Wrapper -->
        <div class="relative h-full flex flex-col px-6 py-5">

            <!-- Top Row -->
            <div class="grid grid-cols-[auto_1fr_auto] items-start gap-4">

                <!-- Profile -->
                <div class="w-14 h-14 rounded-full border border-stroke overflow-hidden flex items-center justify-center"
                    :style="{ backgroundColor: 'var(--color-bg)' }">
                    <img v-if="profileSrc" :src="profileSrc" alt="Profile" class="w-full h-full object-cover" />
                </div>

                <!-- Text Block -->
                <div class="flex flex-col pt-2">
                    <p class="text-white text-text-primary text-sm font-medium">
                        {{ topLine }}
                    </p>
                    <p class="text-text-primary text-base font-medium">
                        {{ secondLine }}
                    </p>
                </div>

                <!-- Dot -->
                <div class="w-3.5 h-3.5 rounded-full self-start mt-1"
                    :style="{ backgroundColor: 'var(--color-accent-cool)' }"></div>

            </div>

            <!-- Middle Big Text -->
            <div class="flex-1 flex items-center justify-center pl-10 pr-10">
                <span class="text-white font-mono text-xl tracking-widest">
                    {{ middleText }}
                </span>
            </div>

            <!-- Bottom Row -->
            <div class="grid grid-cols-2 text-sm font-medium gap-y-1">

                <!-- Left Column -->
                <div class="flex flex-col">
                    <span class="text-text-primary">
                        {{ bottomFirstLeft }}
                    </span>
                    <span class="text-text-primary opacity-70">
                        {{ bottomSecondLeft }}
                    </span>
                </div>

                <!-- Right Column -->
                <div class="flex flex-col items-end">
                    <span class="text-accent-warm">
                        {{ bottomFirstRight }}
                    </span>
                    <span class="text-accent-primary">
                        {{ bottomSecondRight }}
                    </span>
                </div>

            </div>

        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import { computed } from 'vue'

const props = defineProps<{
    profileSrc?: string
    topLine?: string
    secondLine?: string
    middleText?: string
    bottomFirstLeft?: string
    bottomFirstRight?: string
    bottomSecondLeft?: string
    bottomSecondRight?: string
    glow?: boolean
    useDarkShadow?: boolean
}>()

const glossStyle = computed(() => ({
    background: 'radial-gradient(circle at top center, rgba(217,217,217,0.08), transparent 65%)'
}))
const useDarkShadow = computed(() => props.useDarkShadow ?? false)
</script>

<style scoped>
.text-accent-warm {
    color: var(--color-accent-warm);
}

.border-stroke {
    border-color: var(--color-stroke);
}
</style>
