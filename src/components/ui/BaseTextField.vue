<template>
    <div class="text-field flex flex-col mb-2 relative group">
        <label class="text-xs">{{ label }}</label>
        <input type="text" :value="value" disabled class="readonly-input" :class="[inputClass, variantClass]"
            :style="inputStyle" />
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
    label: string
    value: string
    inputClass?: string
    inputStyle?: Record<string, string>
    variant?: 'warm' | 'cool' | 'dark' | 'default'
}>()

const variantClass = computed(() => {
    if (props.variant === 'warm') return 'border-warm'
    if (props.variant === 'cool') return 'border-cool'
    if (props.variant === 'dark') return 'border-dark'
    return ''
})
</script>

<style scoped>
.readonly-input {
    background: rgba(var(--color-surface-primary-rgb), 0.2);
    border: 2px solid var(--color-stroke);
    border-radius: 4px;
    padding: 4px 6px;
    font-size: 12px;
    box-sizing: border-box;
    width: 100%;
    appearance: none;
    cursor: not-allowed;
    /* zeigt direkt dass man nix machen kann */
}

/* Variants */
.border-warm {
    border-color: rgba(var(--color-accent-warm-rgb), 0.5);
}

.border-cool {
    border-color: rgba(var(--color-accent-cool-rgb), 0.5);
}

.border-dark {
    border-color: rgba(var(--color-black-rgb), 0.5);
}

/* Stop-Symbol */
.disabled-icon {
    pointer-events: none;
    font-size: 12px;
    color: rgba(var(--color-text-primary-rgb), 0.5);
}
</style>