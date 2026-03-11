<template>
    <BaseCard class="w-full max-w-147 min-w-0 sm:min-w-95 h-80 flex flex-col overflow-hidden" :useDarkShadow="true">

        <!-- HEADER (Fixe Höhe) -->
        <div class="w-full h-16 px-4 sm:px-8 flex items-center justify-between text-sm font-semibold tracking-wide">
            <span class="text-text-primary">
                SKILLS
            </span>

            <span class="text-text-muted uppercase">
                {{ activeKnowledge }}
            </span>
        </div>

        <!-- SKILLS CONTAINER (nimmt Resthöhe) -->
        <div class="flex-1 w-full px-4 sm:px-8 pb-6 overflow-y-auto">

            <div class="space-y-1 w-full">

                <div v-for="skill in skills" :key="skill.name" class="w-full flex items-center h-5 gap-2 sm:gap-2.5">

                    <!-- Color Box -->
                    <div class="w-5 h-5 rounded-sm shrink-0" :style="getColorStyle(skill.color, 0.4)"></div>

                    <!-- Skill Name -->
                    <div class="w-22 sm:w-35 min-w-0 text-xs text-text-primary truncate">
                        {{ skill.name }}
                    </div>

                    <!-- Bar -->
                    <div class="flex-1 min-w-0 sm:min-w-24 h-2 rounded-sm overflow-hidden border"
                        :style="{ ...barBackgroundStyle, ...borderColor }">
                        <div class="h-full transition-all duration-700" :style="getBarStyle(skill)"></div>
                    </div>

                    <!-- Years -->
                    <div class="text-[10px] sm:text-xs text-text-muted whitespace-nowrap">
                        {{ skill.years }} YEARS
                    </div>

                </div>

            </div>

        </div>

    </BaseCard>
</template>


<script setup lang="ts">
import { computed } from 'vue'
import BaseCard from '../ui/BaseCard.vue'
import { skillsData } from '../../data/skills'
import type { KnowledgeKey } from '../../data/knowledge'
import type { SkillItem, SkillColor } from '../../data/skills'

const props = defineProps<{
    activeKnowledge: KnowledgeKey
}>()

const skills = computed<SkillItem[]>(() => {
    return skillsData[props.activeKnowledge] ?? []
})

const barBackgroundStyle = {
    background: 'rgba(var(--color-bg-rgb), 1)'
}

const borderColor = {
    borderColor: 'rgba(var(--color-black-rgb), 0.5)'
}

/*
  Farb-Resolver
*/
const getColorStyle = (color: SkillColor, opacity: number) => {
    switch (color) {
        case 'accent-warm':
            return {
                background: `rgba(var(--color-accent-warm-rgb), ${opacity})`
            }

        case 'accent-cool':
            return {
                background: `rgba(var(--color-accent-cool-rgb), ${opacity})`
            }

        case 'surface':
        default:
            return {
                background: `rgba(var(--color-surface-primary-rgb), ${opacity})`
            }
    }
}

/*
  Balken Style (korrekt typisiert)
*/
const getBarStyle = (skill: SkillItem) => {
    return {
        width: `${skill.value}%`,
        ...getColorStyle(skill.color, 0.4)
    }
}
</script>
