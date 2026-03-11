<template>
    <BaseCard variant="info-left" :useDarkShadow="true" class="p-4">
        <h3 class="text-sm text-text-primary mb-4 text-left w-full uppercase">
            Languages
        </h3>

        <div class="grid grid-cols-2 gap-4 w-full">
            <div v-for="item in langs" :key="item.language" class="flex flex-col">
                <label class="text-xs font-semibold text-text-primary mb-1">{{ item.language }}</label>
                <div class="relative">
                    <select class="w-full border-b-2 border-accent-badge text-sm py-1 bg-transparent cursor-not-allowed"
                        disabled>
                        <option :selected="true">{{ item.level }}</option>
                    </select>
                    <div class="absolute bottom-0 left-0 w-full h-0.5 bg-accent-badge"></div>
                </div>
            </div>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import { languages } from '../../data/languages'

const langs = languages
</script>

<style scoped>
/* Farbcode für den Balken unten */
.bg-accent-badge {
    background-color: rgba(var(--color-accent-warm-rgb), 0.5);
}

.border-accent-badge {
    border-color: rgba(var(--color-accent-warm-rgb), 0.5);
}
</style>