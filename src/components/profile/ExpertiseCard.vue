<template>
    <BaseCard :variant="variant" :glow="glow" :useDarkShadow="true" class="p-4 relative">
        <!-- Optional Profilbild rechts -->
        <div v-if="imageSrc"
            class="absolute top-0 right-0 w-20 h-20 rounded-full overflow-hidden border-2 border-(--color-bg)">
            <img :src="imageSrc" alt="Profile" class="w-full h-full object-cover" />
        </div>

        <!-- Content Wrapper -->
        <div class="relative z-10 flex flex-col items-start gap-2 w-full">

            <!-- Überschrift -->
            <h3 class="text-sm uppercase text-text-primary font-acme" :class="imageSrc ? 'w-[75%]' : 'w-full'">{{ title
            }}</h3>

            <!-- Zweite Überschrift / optional -->
            <h4 v-if="subTitle" class="text-xs uppercase text-(--color-text-muted) font-arial mb-2"
                :class="imageSrc ? 'w-[75%]' : 'w-full'">
                {{ subTitle }}
            </h4>

            <p v-if="headText" class="text-sm mb-3 font-arial" style="white-space: pre-line;"
                :class="imageSrc ? 'w-[75%]' : 'w-full'">
                {{ headText }}
            </p>

            <!-- Linie -->
            <div v-if="lineColor" :style="{ borderBottom: '2px solid ' + lineColor }" class="mb-2"
                :class="imageSrc ? 'w-[75%]' : 'w-full'"></div>

            <!-- Optionale weitere Überschrift -->
            <h5 v-if="optionalTitle" class="text-sm text-text-primary font-acme mb-2 uppercase">
                {{ optionalTitle }}
            </h5>

            <!-- HighlightText -->
            <p v-if="highlightText" class="text-sm font-black mb-2 font-arial" :style="{ color: highlightColor }">
                {{ highlightText }}
            </p>

            <!-- Restlicher Text -->
            <p v-if="text" class="text-sm mb-3 font-arial" style="white-space: pre-line;">
                {{ text }}
            </p>

            <!-- Aufzählungen -->
            <div v-if="listItems?.length" class="flex flex-col gap-2 w-full">
                <div v-for="(item, idx) in listItems" :key="idx" class="flex w-full gap-2 items-start">
                    <!-- Bullet -->
                    <div class="w-2 h-2 rounded-full mt-1.5 shrink-0" :style="{ backgroundColor: bulletColor }"></div>

                    <!-- Label & Value -->
                    <div class="flex w-full gap-2">
                        <span class="w-1/2 text-xs font-bold font-arial pt-0.5" :style="{ color: bulletTextColor }">
                            {{ item.label }}
                        </span>

                        <span class="w-1/2 text-xs text-(--color-text-muted) font-arial">
                            {{ item.value }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Zusätzlicher Text -->
            <p v-if="additionalText" class="text-sm mb-3 font-arial" style="white-space: pre-line;">
                {{ additionalText }}
            </p>
        </div>
    </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '../ui/BaseCard.vue'

const props = defineProps<{
    title: string
    subTitle?: string
    optionalTitle?: string
    highlightText?: string
    text?: string
    headText?: string
    additionalText?: string
    lineColor?: string
    bulletColor?: string
    bulletTextColor?: string
    imageSrc?: string
    highlightColor?: string
    variant?: 'default' | 'credit' | 'info-left' | 'info-right'
    glow?: boolean
    useDarkShadow?: boolean
    listItems?: { label: string; value?: string }[]
}>()
</script>

<style scoped>
.font-acme {
    font-family: 'Acme', sans-serif;
}

.font-arial {
    font-family: 'Arial', sans-serif;
}

.relative.z-10.flex.flex-col.items-start {
    width: 100%;
}

p {
    line-height: 1.5;
    margin: 0;
}

.flex.w-full>.flex.w-full {
    justify-content: flex-start;
}
</style>