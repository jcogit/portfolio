<template>
    <img :src="iconSrc" :alt="name" class="base-icon" :style="{
        width: size + 'px',
        height: size + 'px'
    }" />
</template>

<script setup lang="ts">
import { computed } from "vue"

// bestehende Icons
import language from "../../assets/icons/language.svg"
import lightmode from "../../assets/icons/lightmode.svg"
import darkmode from "../../assets/icons/darkmode.svg"

import framework from "../../assets/icons/framework.svg"
import performance from "../../assets/icons/performance.svg"
import responsive from "../../assets/icons/responsive.svg"
import learning from "../../assets/icons/learning.svg"

// neue Dashboard / Sidebar Icons
import dashboard from "../../assets/icons/dashboard.svg"
import profile from "../../assets/icons/profile.svg"
import experience from "../../assets/icons/experience.svg"
import programming from "../../assets/icons/programming.svg"
import design from "../../assets/icons/design.svg"
import menu from "../../assets/icons/menu.svg"

export type IconName =
    | "language"
    | "lightmode"
    | "darkmode"
    | "framework"
    | "performance"
    | "responsive"
    | "learning"
    | "dashboard"
    | "profile"
    | "experience"
    | "programming"
    | "design"
    | "menu"

const props = defineProps<{
    name: IconName
    size?: number
}>()

const size = computed(() => props.size ?? 20)

const iconMap: Record<IconName, string> = {
    language,
    lightmode,
    darkmode,
    framework,
    performance,
    responsive,
    learning,
    dashboard,
    profile,
    experience,
    programming,
    design,
    menu
}

const iconSrc = computed(() => iconMap[props.name])
</script>

<style scoped>
.base-icon {
    display: block;
    pointer-events: none;
}
</style>