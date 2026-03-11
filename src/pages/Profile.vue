<template>
    <div class="profile-page flex flex-col gap-6 p-6">

        <!-- Tabs (nur unter 1250px sichtbar) -->
        <div class="flex gap-2 xl:hidden">
            <button class="tab-btn" :class="{ active: activeTab === 'left' }" @click="activeTab = 'left'">
                Profile
            </button>

            <button class="tab-btn" :class="{ active: activeTab === 'right' }" @click="activeTab = 'right'">
                Expertise
            </button>
        </div>

        <!-- Layout -->
        <div class="flex flex-col xl:flex-row gap-6">

            <!-- Left Column -->
            <div class="flex-1 flex flex-col gap-4" v-show="activeTab === 'left' || isWide">
                <GeneralInfoCard />
                <LanguageCard />
                <EducationCard />

                <!-- Interests & Characteristics nebeneinander -->
                <div class="flex gap-4 w-full">
                    <div class="flex-1">
                        <InterestsCard />
                    </div>

                    <div class="flex-1">
                        <CharacteristicsCard />
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="flex-1 flex flex-col gap-4" v-show="activeTab === 'right' || isWide">
                <ExpertiseCard v-for="(card, idx) in expertiseData" :key="idx" v-bind="card" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

import GeneralInfoCard from '../components/profile/GeneralInfoCard.vue'
import LanguageCard from '../components/profile/LanguageCard.vue'
import EducationCard from '../components/profile/EducationCard.vue'
import InterestsCard from '../components/profile/InterestsCard.vue'
import CharacteristicsCard from '../components/profile/CharacteristicsCard.vue'
import ExpertiseCard from '../components/profile/ExpertiseCard.vue'

import { expertiseData } from '../data/expertise'

const activeTab = ref<'left' | 'right'>('left')
const isWide = ref(false)

const checkWidth = () => {
    isWide.value = window.innerWidth >= 1250
}

onMounted(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)
})

onUnmounted(() => {
    window.removeEventListener('resize', checkWidth)
})
</script>

<style scoped>
.profile-page {
    width: 100%;
}

/* Tabs */
.tab-btn {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 6px;
    border: 1px solid var(--color-stroke);
    background: rgba(var(--color-surface-primary-rgb), 0.2);
    color: var(--color-text-primary);
    cursor: pointer;
    transition: all 0.2s ease;
}

.tab-btn:hover {
    background: rgba(var(--color-surface-primary-rgb), 0.35);
}

.tab-btn.active {
    border-color: var(--color-accent);
    box-shadow: 0 0 6px rgba(200, 51, 94, 0.35);
}
</style>