<template>
    <div class="portfolio-project-page flex flex-col gap-4 sm:gap-6 pb-8">
        <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-7">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Project Overview</p>
                    <h1>Portfolio Dashboard</h1>
                    <p class="subtitle">
                        A structured portfolio platform built to present professional profile, project evidence,
                        and role-fit narratives in one cohesive experience.
                    </p>
                    <p>
                        This project is the central communication layer for my work. It combines reusable UI patterns,
                        route-based storytelling, responsive layouts, and focused presentation pages for hiring and
                        project deep-dives.
                    </p>
                    <div class="cta-row">
                        <a class="primary-link" href="https://github.com/jcogit/portfolio" target="_blank"
                            rel="noopener noreferrer">
                            Open GitHub Repository
                        </a>
                        <router-link class="secondary-link" to="/projects">
                            Back to Projects
                        </router-link>
                    </div>
                </div>

                <figure class="hero-visual">
                    <button type="button" class="preview-trigger"
                        @click="openImagePreview(dashboardImage, 'Portfolio dashboard overview', 'Dashboard Overview')">
                        <img :src="dashboardImage" alt="Portfolio dashboard overview" loading="lazy" />
                    </button>
                </figure>
            </div>
        </BaseCard>

        <div class="grid-two">
            <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Project Purpose</h2>
                    <ul class="list">
                        <li>Create a single, maintainable place to present all relevant work and capabilities.</li>
                        <li>Communicate not just what was built, but why it was built and what problem it solves.</li>
                        <li>Support both quick scanning and deep-dive reading through clear route structure.</li>
                        <li>Provide application-ready pages for specific roles and use cases.</li>
                    </ul>
                </section>
            </BaseCard>

            <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Implementation Highlights</h2>
                    <ul class="list">
                        <li>Vue 3 + TypeScript with reusable card and badge components.</li>
                        <li>Route-based project architecture for overview pages and detailed project storytelling.</li>
                        <li>Consistent visual system with responsive behavior across mobile and desktop.</li>
                        <li>Designed for iterative expansion with additional projects and case-study formats.</li>
                    </ul>
                </section>
            </BaseCard>
        </div>

        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Visual Evidence</h2>
                <p>
                    The screens below show the actual portfolio interface used for profile communication,
                    project filtering, and presentation flow.
                </p>
                <div class="preview-grid">
                    <figure>
                        <button type="button" class="preview-trigger"
                            @click="openImagePreview(dashboardImage, 'Portfolio dashboard screen', 'Dashboard Screen')">
                            <img :src="dashboardImage" alt="Portfolio dashboard screen" loading="lazy" />
                        </button>
                        <figcaption>Dashboard Screen</figcaption>
                    </figure>
                    <figure>
                        <button type="button" class="preview-trigger"
                            @click="openImagePreview(profileImage, 'Portfolio profile screen', 'Profile Screen')">
                            <img :src="profileImage" alt="Portfolio profile screen" loading="lazy" />
                        </button>
                        <figcaption>Profile Screen</figcaption>
                    </figure>
                </div>
            </section>
        </BaseCard>

        <div v-if="activePreview" class="lightbox" @click.self="closeImagePreview">
            <button type="button" class="lightbox-close" @click="closeImagePreview">Close (Esc)</button>
            <figure class="lightbox-frame">
                <img :src="activePreview.src" :alt="activePreview.alt" />
                <figcaption>{{ activePreview.title }}</figcaption>
            </figure>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import BaseCard from '../components/ui/BaseCard.vue'

import dashboardImage from '../assets/img/portfolio/dashboard.png'
import profileImage from '../assets/img/portfolio/profile.png'

type ImagePreview = {
    src: string
    alt: string
    title: string
}

const activePreview = ref<ImagePreview | null>(null)

function openImagePreview(src: string, alt: string, title: string) {
    activePreview.value = { src, alt, title }
}

function closeImagePreview() {
    activePreview.value = null
}

function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeImagePreview()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.portfolio-project-page {
    width: 100%;
}

.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: 1rem;
}

.hero-copy {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.eyebrow {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(var(--color-accent-cool-rgb), 1);
}

h1 {
    margin: 0;
    font-size: clamp(1.45rem, 4vw, 2.2rem);
    line-height: 1.15;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.subtitle {
    margin: 0;
    color: rgba(var(--color-text-muted-rgb), 1);
    font-size: 0.92rem;
}

.hero-copy p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
}

.hero-visual {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.2);
}

.cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.15rem;
}

.primary-link,
.secondary-link {
    border-radius: 10px;
    padding: 0.5rem 0.85rem;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border: 1px solid var(--color-stroke);
    transition: transform 0.2s ease;
}

.primary-link {
    color: white;
    border-color: rgba(var(--color-accent-cool-rgb), 0.75);
    background: linear-gradient(90deg,
            rgba(var(--color-accent-cool-rgb), 0.82),
            rgba(var(--color-accent-warm-rgb), 0.72));
}

.secondary-link {
    color: rgba(var(--color-text-primary-rgb), 1);
    background: rgba(var(--color-surface-primary-rgb), 0.32);
}

.primary-link:hover,
.secondary-link:hover {
    transform: translateY(-1px);
}

h2 {
    margin: 0;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.content-block {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.content-block p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
}

.grid-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

.list {
    margin: 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.list li {
    font-size: 0.85rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.92);
}

.preview-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.8rem;
}

.preview-grid figure {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.25);
}

.preview-trigger {
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: zoom-in;
    background: transparent;
}

.preview-grid img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    display: block;
}

.preview-grid figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.76rem;
    color: rgba(var(--color-text-primary-rgb), 0.84);
    line-height: 1.35;
}

.lightbox {
    position: fixed;
    inset: 0;
    z-index: 70;
    background: rgba(8, 12, 20, 0.9);
    overflow: auto;
    padding: 70px 1rem 1rem;
}

.lightbox-close {
    position: fixed;
    top: 18px;
    right: 18px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 999px;
    background: rgba(10, 14, 24, 0.85);
    color: white;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.42rem 0.8rem;
    cursor: pointer;
}

.lightbox-frame {
    margin: 0 auto;
    width: max-content;
    max-width: none;
    display: grid;
    gap: 0.55rem;
}

.lightbox-frame img {
    width: auto;
    max-width: none;
    max-height: none;
    object-fit: none;
    background: #0f1727;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.lightbox-frame figcaption {
    margin: 0;
    color: rgba(232, 240, 255, 0.85);
    font-size: 0.82rem;
    text-align: center;
}

@media (max-width: 1100px) {

    .hero-grid,
    .grid-two {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 700px) {

    .preview-grid {
        grid-template-columns: 1fr;
    }

    .preview-grid img {
        height: 180px;
    }
}
</style>
