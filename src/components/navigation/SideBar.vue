<template>
    <!-- Overlay (Mobile) -->
    <div v-if="open" class="sidebar-overlay lg:hidden" @click="$emit('close')" />

    <aside class="sidebar flex flex-col items-center pt-6" :class="{
        'open left-0 fixed lg:hidden': open,
        'fixed -left-64 lg:fixed lg:left-0': !open
    }">
        <!-- Avatar -->
        <div class="profile-avatar mb-6">
            JO
        </div>

        <!-- Navigation -->
        <nav class="flex flex-col gap-2 w-full">
            <BaseItem icon="dashboard" label="Dashboard" to="/" />
            <BaseItem icon="profile" label="Profile" to="/profile" />
            <BaseItem icon="experience" label="Experience" to="/experience" />
            <BaseItem icon="programming" label="Programming" to="/programming" />
            <BaseItem icon="design" label="Design" to="/design" />
        </nav>
    </aside>
</template>

<script setup lang="ts">
import BaseItem from '../ui/BaseItem.vue'

defineProps<{ open: boolean }>()
defineEmits(["close"])
</script>

<style scoped>
.sidebar {
    width: 200px;
    height: 100vh;
    background-color: rgba(var(--color-bg-rgb), 0.75);
    backdrop-filter: blur(8px);
    box-shadow: var(--shadow-dark);
    border-right: 1px solid var(--color-stroke);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: left 0.25s ease;
}

/* Desktop ≥1440px */
@media (min-width: 1440px) {
    .sidebar {
        position: sticky;
        top: 0;
        left: 0;
    }
}

/* Mobile <1440px Drawer */
@media (max-width: 1439px) {
    .sidebar {
        position: fixed;
        top: 0;
        left: -256px;
        /* ausblendung */
        z-index: 30;
    }

    .sidebar.open {
        left: 0;
    }
}

/* Overlay */
.sidebar-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 20;
}

.profile-avatar {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background: var(--gradient-credit);
    border: 1px solid var(--color-stroke);
    box-shadow: var(--shadow-dark);
}
</style>