<template>
    <div class="layout w-full min-h-screen flex">

        <!-- Hintergrund -->
        <div class="fixed inset-0 z-0 bg-cover bg-center opacity-15" :style="backgroundImageStyle" />

        <!-- Sidebar (responsive) -->
        <SideBar :open="sidebarOpen" @close="sidebarOpen = false" class="relative z-10" />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col relative z-10">

            <!-- TopBar sticky -->
            <TopBar @toggleSidebar="toggleSidebar" class="sticky top-0 z-20" />

            <!-- Scrollbarer Content -->
            <main class="flex-1 flex justify-center p-6 overflow-y-auto">
                <div class="w-full max-w-300 2xl:max-w-375">
                    <slot />
                </div>
            </main>

        </div>

    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import SideBar from "../components/navigation/SideBar.vue"
import TopBar from "../components/navigation/TopBar.vue"

const sidebarOpen = ref(false)
function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
}

const backgroundImageStyle = {
    backgroundImage: 'url("/src/assets/background.jpeg")',
} as const
</script>

<style scoped>
.layout {
    position: relative;
    height: 100vh;
}
</style>