<template>
    <header class="topbar w-full h-14 px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20">

        <!-- Left -->
        <div class="flex items-center gap-3">

            <!-- Mobile Menu: sichtbar <1440px -->
            <button class="icon-btn 2xl:hidden" @click="$emit('toggleSidebar')">
                <BaseIcon name="menu" />
            </button>

            <!-- Page Title -->
            <div class="text-sm font-semibold tracking-wide text-text-primary uppercase">
                {{ pageTitle }}
            </div>

        </div>

        <!-- Right Controls: immer sichtbar -->
        <div class="flex items-center gap-3">

            <!-- Language -->
            <button class="icon-btn">
                <BaseIcon name="language" />
            </button>

            <!-- Theme Toggle -->
            <button class="icon-btn" @click="toggleTheme">
                <BaseIcon v-if="isLight" name="lightmode" />
                <BaseIcon v-else name="darkmode" />
            </button>

            <!-- Profile -->
            <div class="profile-avatar">
                JO
            </div>

        </div>

    </header>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import BaseIcon from "../ui/BaseIcon.vue"

defineEmits(["toggleSidebar"])

const route = useRoute()
const pageTitle = computed(() => route.name ? String(route.name) : "Dashboard")
const isLight = ref(false)

function toggleTheme() {
    isLight.value = !isLight.value
    document.documentElement.classList.toggle("light-theme", isLight.value)
}
</script>

<style scoped>
.topbar {
    backdrop-filter: blur(10px);
    background: rgba(var(--color-bg-rgb), 0.6);
    border-bottom: 1px solid var(--color-stroke);
}

.icon-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 6px;
    transition: transform .15s ease, opacity .2s;
}

.icon-btn:hover {
    transform: scale(1.08);
    opacity: .9;
}

.profile-avatar {
    width: 32px;
    height: 32px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    color: white;
    background: var(--gradient-credit);
    border: 1px solid var(--color-stroke);
    box-shadow: var(--shadow-dark);
}
</style>