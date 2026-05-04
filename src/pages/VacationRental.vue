<template>
    <div class="prototype-page flex flex-col gap-4 sm:gap-6 pb-8">
        <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-7">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Project Showcase</p>
                    <h1>NordStay Vacation Rental Platform</h1>
                    <p class="subtitle">
                        Product vision and implementation direction for a full vacation-rental platform.
                    </p>

                    <p>
                        NordStay is designed as an end-to-end product: guest booking journeys, owner-facing workflows,
                        admin operations, secure authentication, and a scalable foundation for future marketplace
                        growth.
                    </p>

                    <div class="cta-row">
                        <a class="primary-link" href="https://github.com/jcogit/nordstay" target="_blank"
                            rel="noopener noreferrer">
                            Open GitHub Repository
                        </a>
                        <router-link class="secondary-link" to="/projects">
                            Back to Projects
                        </router-link>
                    </div>
                </div>

                <div class="meta-box">
                    <div class="meta-item">
                        <span>Stack</span>
                        <strong>.NET · C# · Vue 3 · TypeScript</strong>
                    </div>
                    <div class="meta-item">
                        <span>Domain</span>
                        <strong>Vacation Rental Platform / Hospitality</strong>
                    </div>
                    <div class="meta-item">
                        <span>Core Focus</span>
                        <strong>Product Scope · Architecture · UX Journeys</strong>
                    </div>
                    <div class="meta-item">
                        <span>Status</span>
                        <strong>In Progress</strong>
                    </div>
                </div>
            </div>
        </BaseCard>

        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Platform Pillars</h2>
                <div class="pillar-grid">
                    <article class="pillar-card">
                        <div class="pillar-icon guest-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M12 12.6a4.3 4.3 0 1 0 0-8.6 4.3 4.3 0 0 0 0 8.6Z" stroke="currentColor"
                                    stroke-width="1.8" />
                                <path d="M4.5 20c1.2-3 4-4.6 7.5-4.6s6.3 1.6 7.5 4.6" stroke="currentColor"
                                    stroke-width="1.8" stroke-linecap="round" />
                            </svg>
                        </div>
                        <h3>Guest Experience</h3>
                        <p>Discovery, trust signals, and booking conversion across the full customer journey.</p>
                    </article>

                    <article class="pillar-card">
                        <div class="pillar-icon owner-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1h-4.7v-6.2h-4.6V21H5a1 1 0 0 1-1-1v-8.5Z"
                                    stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <h3>Owner Operations</h3>
                        <p>Structured onboarding, service modules, and transparent collaboration touchpoints.</p>
                    </article>

                    <article class="pillar-card">
                        <div class="pillar-icon admin-icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                                <path d="M6 5h12M6 12h12M6 19h12" stroke="currentColor" stroke-width="1.8"
                                    stroke-linecap="round" />
                                <circle cx="4" cy="5" r="1.4" fill="currentColor" />
                                <circle cx="4" cy="12" r="1.4" fill="currentColor" />
                                <circle cx="4" cy="19" r="1.4" fill="currentColor" />
                            </svg>
                        </div>
                        <h3>Admin Backbone</h3>
                        <p>Operations, reservations, finance, support, analytics, and content governance.</p>
                    </article>
                </div>
            </section>
        </BaseCard>

        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Project Goal and Vision</h2>
                <ul class="list">
                    <li>Build a reliable platform where guests can discover, compare, and book vacation homes with
                        minimal friction.</li>
                    <li>Provide owners with transparent onboarding, service options, and performance visibility.</li>
                    <li>Enable internal teams with structured admin tools for operations, reservations, finance, and
                        support.</li>
                    <li>Establish a technical baseline that supports iterative delivery and long-term maintainability.
                    </li>
                    <li>Align UX, domain model, and API contracts so frontend and backend can evolve together.</li>
                </ul>
            </section>
        </BaseCard>

        <div class="grid-two">
            <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Product Scope</h2>
                    <ul class="list">
                        <li>Guest area: landing, discovery, filtering, trust signals, and booking-oriented flows.</li>
                        <li>Owner area: role-specific login, onboarding communication, and value proposition modules.
                        </li>
                        <li>Admin area: operational modules for reservations, content, analytics, support, and finance.
                        </li>
                        <li>Localization direction for English, German, and Danish market communication.</li>
                        <li>Clear separation between product features and visual prototype artifacts.</li>
                    </ul>
                </section>
            </BaseCard>

            <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Architecture Direction</h2>
                    <ul class="list">
                        <li>Backend foundation in .NET with authentication/security layers and test coverage setup.</li>
                        <li>Frontend structure in Vue/TypeScript with reusable UI and route-level composition.</li>
                        <li>Domain-first modeling to keep business rules explicit across API and UI layers.</li>
                        <li>Incremental delivery model: contracts first, modules second, optimization and experiments
                            next.</li>
                    </ul>
                </section>
            </BaseCard>
        </div>

        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2 id="preview">Landing Visualization</h2>
                <p>
                    The following screens are visual references used to shape the landing experience.
                    They support communication and validation, while the full project extends beyond these views.
                </p>
                <div class="preview-grid">
                    <figure v-for="item in sectionPreviewItems" :key="item.title">
                        <button type="button" class="preview-trigger"
                            @click="openImagePreview(item.image, item.alt, item.title)">
                            <img :src="item.image" :alt="item.alt" loading="lazy" />
                        </button>
                        <figcaption>{{ item.title }}</figcaption>
                    </figure>
                </div>

                <figure class="full-capture-frame">
                    <button type="button" class="preview-trigger preview-full"
                        @click="openImagePreview(landingpageFullImage, 'Complete landingpage preview', 'Full Landing Composition')">
                        <img :src="landingpageFullImage" alt="Complete landingpage preview" loading="lazy" />
                    </button>
                    <figcaption>
                        Complete landingpage preview (full capture).
                    </figcaption>
                </figure>
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

import activitySectionImage from '../assets/img/houserental/ActivitySection.png'
import filterSectionImage from '../assets/img/houserental/FilterSection.png'
import footerSectionImage from '../assets/img/houserental/FooterSection.png'
import headerSectionImage from '../assets/img/houserental/HeaderSection.png'
import houseOwnerSectionImage from '../assets/img/houserental/HouseOwnerSection.png'
import landingpageFullImage from '../assets/img/houserental/Landingpage 1440.png'
import locationsSectionImage from '../assets/img/houserental/LocationsSection.png'
import newsletterSectionImage from '../assets/img/houserental/NewsletterSection.png'
import reviewsSectionImage from '../assets/img/houserental/ReviewsContent.png'
import salesSectionImage from '../assets/img/houserental/SalesSection.png'
import seasonalSectionImage from '../assets/img/houserental/SeasonalSection.png'
import whyInfoSectionImage from '../assets/img/houserental/WhyInfoSection.png'

const sectionPreviewItems = [
    {
        title: 'Header and Hero Section',
        alt: 'Header and hero section preview',
        image: headerSectionImage
    },
    {
        title: 'Search and Filter Section',
        alt: 'Search and filter section preview',
        image: filterSectionImage
    },
    {
        title: 'Why Denmark Section',
        alt: 'Why Denmark section preview',
        image: whyInfoSectionImage
    },
    {
        title: 'Sales and Deals Section',
        alt: 'Sales and deals section preview',
        image: salesSectionImage
    },
    {
        title: 'Seasonal Experience Section',
        alt: 'Seasonal experience section preview',
        image: seasonalSectionImage
    },
    {
        title: 'Locations Section',
        alt: 'Locations section preview',
        image: locationsSectionImage
    },
    {
        title: 'House Owner CTA Section',
        alt: 'House owner call to action section preview',
        image: houseOwnerSectionImage
    },
    {
        title: 'Reviews and Ratings Section',
        alt: 'Reviews and ratings section preview',
        image: reviewsSectionImage
    },
    {
        title: 'Newsletter Section',
        alt: 'Newsletter section preview',
        image: newsletterSectionImage
    },
    {
        title: 'Activities Section',
        alt: 'Activities section preview',
        image: activitySectionImage
    },
    {
        title: 'Footer Section',
        alt: 'Footer section preview',
        image: footerSectionImage
    }
]

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
.prototype-page {
    width: 100%;
}

.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
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
    font-size: clamp(1.4rem, 4vw, 2rem);
    line-height: 1.15;
    color: rgba(var(--color-text-primary-rgb), 1);
    margin: 0;
}

.subtitle {
    margin: 0;
    color: rgba(var(--color-text-muted-rgb), 1);
    font-size: 0.9rem;
}

.hero-copy p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
}

.meta-box {
    display: grid;
    gap: 0.5rem;
    align-content: start;
}

.meta-item {
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 9px;
    padding: 0.55rem 0.7rem;
    background: rgba(var(--color-surface-primary-rgb), 0.28);
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
}

.meta-item span {
    font-size: 0.67rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: rgba(var(--color-text-muted-rgb), 1);
}

.meta-item strong {
    font-size: 0.82rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 0.2rem;
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

.pillar-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
}

.pillar-card {
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.28);
    border-radius: 12px;
    padding: 0.9rem;
    background:
        radial-gradient(circle at 85% 6%, rgba(var(--color-accent-warm-rgb), 0.18), transparent 35%),
        rgba(var(--color-surface-primary-rgb), 0.32);
}

.pillar-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    margin-bottom: 0.65rem;
}

.pillar-icon svg {
    width: 32px;
    height: 32px;
}

.guest-icon {
    color: rgba(var(--color-accent-cool-rgb), 1);
    background: rgba(var(--color-accent-cool-rgb), 0.18);
}

.owner-icon {
    color: rgba(var(--color-accent-warm-rgb), 1);
    background: rgba(var(--color-accent-warm-rgb), 0.2);
}

.admin-icon {
    color: rgba(var(--color-text-primary-rgb), 0.95);
    background: rgba(var(--color-text-muted-rgb), 0.2);
}

.pillar-card h3 {
    margin: 0;
    font-size: 0.95rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.pillar-card p {
    margin: 0.45rem 0 0;
    font-size: 0.82rem;
    color: rgba(var(--color-text-primary-rgb), 0.82);
    line-height: 1.5;
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
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
    height: 165px;
    object-fit: cover;
    display: block;
}

.preview-grid figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.76rem;
    color: rgba(var(--color-text-primary-rgb), 0.84);
    line-height: 1.35;
}

.full-capture-frame {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.25);
}

.preview-full {
    display: block;
}

.full-capture-frame img {
    width: 100%;
    max-height: 760px;
    object-fit: contain;
    object-position: top center;
    display: block;
    background: rgba(var(--color-surface-primary-rgb), 0.15);
}

.full-capture-frame figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.76rem;
    color: rgba(var(--color-text-primary-rgb), 0.84);
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
    position: absolute;
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
    .pillar-grid,
    .grid-two,
    .preview-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 700px) {

    .pillar-grid,
    .grid-two,
    .hero-grid {
        grid-template-columns: 1fr;
    }

    .preview-grid {
        grid-template-columns: 1fr;
    }
}
</style>
