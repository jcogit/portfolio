<template>
    <div class="layout w-full min-h-screen flex">

        <!-- Hintergrund -->
        <div class="fixed inset-0 z-0 bg-cover bg-center opacity-15" :style="backgroundImageStyle" />

        <!-- Sidebar (responsive) -->
        <SideBar :open="sidebarOpen" @close="sidebarOpen = false" class="relative z-10" />

        <!-- Main Content -->
        <div class="flex-1 flex flex-col relative z-10">

            <!-- TopBar sticky -->
            <TopBar :showMenuButton="showMenuButton" @toggleSidebar="toggleSidebar" class="sticky top-0 z-20" />

            <!-- Scrollbarer Content -->
            <main ref="contentScrollEl" class="flex-1 flex justify-center p-2 overflow-y-auto">
                <div class="w-full max-w-300 2xl:max-w-375">
                    <slot />
                </div>
            </main>

        </div>

    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from "vue"
import { useRoute } from "vue-router"
import SideBar from "../components/navigation/SideBar.vue"
import TopBar from "../components/navigation/TopBar.vue"

const sidebarOpen = ref(false)
const isDesktop = ref(false)
const contentScrollEl = ref<HTMLElement | null>(null)
const route = useRoute()

let desktopQuery: MediaQueryList | null = null

function handleDesktopChange(event: MediaQueryListEvent) {
    isDesktop.value = event.matches
}

onMounted(() => {
    desktopQuery = window.matchMedia("(min-width: 1024px)")
    isDesktop.value = desktopQuery.matches
    desktopQuery.addEventListener("change", handleDesktopChange)
})

onBeforeUnmount(() => {
    desktopQuery?.removeEventListener("change", handleDesktopChange)
})

function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value
}

const showMenuButton = computed(() => !isDesktop.value && !sidebarOpen.value)

const backgroundImageStyle = {
    backgroundImage: 'url("/src/assets/background.jpeg")',
} as const

watch(
    () => route.fullPath,
    async () => {
        await nextTick()

        const scrollEl = contentScrollEl.value
        if (!scrollEl) {
            return
        }

        if (route.hash) {
            const target = scrollEl.querySelector(route.hash) as HTMLElement | null
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                return
            }
        }

        scrollEl.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    },
    { flush: 'post' }
)
</script>

<style scoped>
.layout {
    position: relative;
    height: 100vh;
}
</style>