<template>
    <BaseCard :variant="variantType" :glow="glow" :useDarkShadow="useDarkShadow" class="w-45 h-55 relative">

        <!-- Top Right Dots -->
        <div class="absolute top-3 right-3 flex flex-col gap-1.5">
            <span class="dot"></span>
            <span class="dot"></span>
        </div>

        <!-- Center Content -->
        <div class="flex flex-col items-center justify-center h-full pt-6">

            <!-- Icon -->
            <div v-if="icon" class="w-16.25 h-16.25 flex items-center justify-center mb-3">
                <BaseIcon :name="icon" :size="52" />
            </div>

            <slot name="icon" />

            <!-- Label -->
            <div class="text-center font-heading text-base text-(--color-text-primary-rgb)/75 uppercase">
                {{ label }}
            </div>

        </div>

    </BaseCard>
</template>

<script setup lang="ts">
import { computed } from "vue"
import BaseCard from "../ui/BaseCard.vue"
import BaseIcon from "../ui/BaseIcon.vue"

type Variant = "info-left" | "info-right"

type IconName =
    | "framework"
    | "performance"
    | "responsive"
    | "learning"

const props = defineProps<{
    label: string
    variant?: Variant
    icon?: IconName
    glow?: boolean
    useDarkShadow?: boolean
}>()

const variantType = computed(() => props.variant ?? "info-right")
const glow = computed(() => props.glow ?? false)
const useDarkShadow = computed(() => props.useDarkShadow ?? false)
</script>

<style scoped>
.dot {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 9999px;
    background-color: rgba(var(--color-text-primary-rgb), 0.75);
}
</style>