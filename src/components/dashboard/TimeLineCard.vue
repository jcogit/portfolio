<template>
    <BaseCard class="w-147 h-auto flex flex-col overflow-hidden" :useDarkShadow="true">

        <!-- Header -->
        <div class="w-full h-16 px-8 flex items-center text-sm font-semibold tracking-wide text-text-primary">
            LATEST PROJECT TIMELINE
        </div>

        <!-- Content -->
        <div class="flex-1 flex px-8 pb-6">

            <!-- Gradient Timeline Bar -->
            <div class="relative w-1.25 ml-5 mr-5 shrink-0">
                <div class="absolute inset-0 rounded-full" style="background: linear-gradient(to bottom,
                    rgba(var(--color-accent-warm-rgb),1),
                    rgba(var(--color-accent-warm-rgb),0));">
                </div>
            </div>

            <!-- Timeline Items -->
            <div class="flex flex-col gap-4 flex-1">

                <div v-for="item in timelineData" :key="item.date" class="p-4 border rounded-sm" style="
                        background: rgba(var(--color-surface-primary-rgb),0.5);
                        border:1px solid black;
                    ">

                    <div class="text-xs text-text-muted mb-1">
                        {{ item.date }}
                    </div>

                    <div class="text-sm font-semibold mb-2" style="color: rgb(var(--color-accent-warm-rgb));">
                        {{ item.title }}
                    </div>

                    <div class="text-xs text-text-primary leading-relaxed">
                        {{ item.description }}
                    </div>

                </div>

            </div>

        </div>

    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'
import { timelineData } from '../../data/timeLine'
</script>