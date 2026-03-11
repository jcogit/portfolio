<template>
    <div class="relative overflow-hidden transition-all duration-300 rounded-base border border-stroke"
        :class="cardClasses" :style="cardStyle">
        <!-- Overlay Gradient -->
        <div v-if="variant !== 'default'" class="absolute inset-0 pointer-events-none" :style="overlayStyle"></div>

        <!-- Content Wrapper -->
        <div class="relative z-10 flex flex-col items-center justify-center h-full">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'default' | 'credit' | 'info-left' | 'info-right'

const props = defineProps<{
    variant?: Variant
    glow?: boolean
    useDarkShadow?: boolean
}>()

const variant = computed(() => props.variant ?? 'default')
const glow = computed(() => props.glow ?? false)

const cardClasses = computed(() => [
    glow.value ? 'shadow-glow' : '',
    props.useDarkShadow ? 'shadow-dark' : ''
])

const cardStyle = computed(() => {
    return {
        borderRadius: 'var(--radius-base)',
        border: '1px solid var(--color-stroke)',

        // 🔥 GLOBAL DEFAULT BACKGROUND
        background:
            variant.value === 'credit'
                ? 'var(--gradient-credit)'
                : 'rgba(var(--color-bg-rgb), 0.75)'
    }
})

const overlayStyle = computed(() => {
    if (variant.value === 'info-left')
        return { background: 'var(--gradient-info-left)' }

    if (variant.value === 'info-right')
        return { background: 'var(--gradient-info-right)' }

    if (variant.value === 'credit')
        return {
            background:
                'radial-gradient(circle at top center, rgba(217,217,217,0.08), transparent 60%)'
        }

    return {}
})
</script>

<style scoped>
.shadow-glow {
    box-shadow: var(--shadow-glow);
}

.shadow-dark {
    box-shadow: var(--shadow-dark);
}

.border-stroke {
    border-color: var(--color-stroke);
}

.rounded-base {
    border-radius: var(--radius-base);
}
</style>
