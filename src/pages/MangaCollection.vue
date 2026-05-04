<template>
    <div class="manga-page flex flex-col gap-4 sm:gap-6 pb-8">

        <!-- ── Hero ──────────────────────────────────────────── -->
        <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-7">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Bachelor Thesis · Case Study</p>
                    <h1>Manga Collection Royale</h1>
                    <p class="subtitle">
                        A cross-platform mobile app for managing personal manga collections —
                        built as a final exam project covering a full custom-built architecture:
                        Ionic frontend, PHP REST API, and a relational database.
                    </p>
                    <p>
                        Users can track every series and volume they own, mark what they've read,
                        and scan physical book barcodes (ISBN) to look up and add manga directly
                        to their collection. A companion web admin panel allows managing the global
                        catalogue of series, volumes, authors, and publishers.
                    </p>
                    <div class="badges">
                        <span v-for="tech in techs" :key="tech" class="badge">{{ tech }}</span>
                    </div>
                    <div class="cta-row">
                        <a class="primary-link" href="https://github.com/janinchen85/mangacollectionroyaleapp"
                            target="_blank" rel="noopener noreferrer">
                            Open GitHub Repository
                        </a>
                        <router-link class="secondary-link" to="/projects">
                            Back to Projects
                        </router-link>
                    </div>
                </div>

                <figure class="hero-visual">
                    <img src="/manga-collection-preview/mangacollection.png"
                        alt="Manga Collection Royale app screenshot" />
                </figure>
            </div>
        </BaseCard>

        <!-- ── Features ──────────────────────────────────────── -->
        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>App Features</h2>
                <div class="feature-grid">
                    <div class="feature-item" v-for="f in features" :key="f.title">
                        <div class="feature-icon">
                            <component :is="f.icon" />
                        </div>
                        <strong>{{ f.title }}</strong>
                        <p>{{ f.desc }}</p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Architecture ──────────────────────────────────── -->
        <div class="grid-two">
            <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Frontend — Ionic Angular</h2>
                    <ul class="list">
                        <li>Lazy-loaded Angular modules per route: <code>login</code>, <code>home</code>,
                            <code>series-details/:id</code>, <code>scan-book</code>, <code>register</code>
                        </li>
                        <li>Ionic components for native-feel UI: headers, cards, badges, FAB buttons, loading overlays,
                            toast notifications</li>
                        <li>User credentials and server host stored in <code>@ionic/storage</code> for persistent login
                        </li>
                        <li>Barcode scanner via <code>@ionic-native/barcode-scanner</code>; ISBN lookup triggers live
                            API request</li>
                        <li>Camera preview integration for volume scanning workflow</li>
                    </ul>
                </section>
            </BaseCard>

            <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Backend — PHP REST API</h2>
                    <ul class="list">
                        <li>Custom MVC framework: <code>App.php</code> parses URL segments into controller + method +
                            params</li>
                        <li>API key authentication — every request validated against the user's stored key</li>
                        <li>Controllers: <code>UserInfo</code>, <code>Manga</code>, <code>Home</code> — each exposing
                            specific endpoint modes via URL routing</li>
                        <li>JSON responses for all endpoints; CORS headers set per controller</li>
                        <li>Admin web panel (PHP templates) for managing the global manga catalogue</li>
                    </ul>
                </section>
            </BaseCard>
        </div>

        <!-- ── Database ──────────────────────────────────────── -->
        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Data Model</h2>
                <p>The relational schema connects user accounts to their owned volumes via a many-to-many relationship,
                    with full read/owned tracking per volume per user.</p>
                <div class="db-grid">
                    <div class="db-item" v-for="t in tables" :key="t.name">
                        <strong>{{ t.name }}</strong>
                        <p>{{ t.desc }}</p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Screens Overview ────────────────────────────────── -->
        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Screen Overview</h2>
                <div class="screens-grid">
                    <div class="screen-item" v-for="s in screens" :key="s.name">
                        <div class="screen-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round">
                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                <line x1="12" y1="18" x2="12.01" y2="18" />
                            </svg>
                        </div>
                        <strong>{{ s.name }}</strong>
                        <p>{{ s.desc }}</p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Project Report PDF ────────────────────────────── -->
        <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Project Report</h2>
                <p>
                    The full bachelor thesis document covers requirements analysis, architecture decisions,
                    database design, implementation notes, and a final evaluation of the project outcome.
                </p>
                <div class="pdf-actions">
                    <a class="primary-link" href="/manga-collection-preview/MobileAppReport_MangaCollectionRoyale.pdf"
                        target="_blank" rel="noopener noreferrer">
                        Open Full Report (PDF)
                    </a>
                </div>
                <div class="pdf-wrapper">
                    <iframe src="/manga-collection-preview/MobileAppReport_MangaCollectionRoyale.pdf"
                        title="Manga Collection Royale — Project Report" loading="lazy"></iframe>
                </div>
            </section>
        </BaseCard>

    </div>
</template>

<script setup lang="ts">
import BaseCard from '../components/ui/BaseCard.vue'

const techs = ['Ionic', 'Angular', 'TypeScript', 'PHP', 'MySQL', 'Cordova', 'REST API']

const features = [
    {
        title: 'Collection Dashboard',
        desc: 'Home screen shows user stats: total series, volumes owned, read and unread counts — plus a grid of all tracked series with cover images.',
        icon: 'svg-home',
    },
    {
        title: 'Barcode Scanner',
        desc: 'Scan physical manga using the device camera. The ISBN is sent to the API, which looks up the volume and lets the user add it to their collection.',
        icon: 'svg-scan',
    },
    {
        title: 'Series Detail View',
        desc: 'Per-series page showing title, author, publisher, owned/missing/read/unread counts, and a scrollable volume list for fine-grained collection tracking.',
        icon: 'svg-book',
    },
    {
        title: 'Read Status Tracking',
        desc: 'Each volume can be marked as owned and as read/unread. Stats are aggregated and shown on both the home dashboard and series detail screens.',
        icon: 'svg-check',
    },
    {
        title: 'User Authentication',
        desc: 'Login and register screens with API key–based authentication. Credentials stored locally via Ionic Storage so users stay logged in between sessions.',
        icon: 'svg-user',
    },
    {
        title: 'Admin Web Panel',
        desc: 'PHP-based admin interface to manage the global catalogue: add series, volumes, authors, publishers, and genres — separate from the mobile app.',
        icon: 'svg-admin',
    },
]

const tables = [
    { name: 'User', desc: 'userID, userName, userAPIkey, userIsLoggedIn — supports multi-user collections on the same server instance.' },
    { name: 'Series', desc: 'seriesID, seriesTitle, authorName, publisherName, targetGroup, genre, start/end dates, volumes count, description, isCanceled.' },
    { name: 'Volume', desc: 'volumeID, volumeISBN, volumeTitle, volumeVolume (number), chapters, pages, release date — linked to a series.' },
    { name: 'UserVolume', desc: 'Ownership and read-status per user per volume — drives all collection stats and filtering on home and series detail screens.' },
]

const screens = [
    { name: 'Login', desc: 'Server URL, username, and password — credentials saved to local storage for automatic re-login.' },
    { name: 'Register', desc: 'New account creation flow with server-side validation against the PHP API.' },
    { name: 'Home', desc: 'Dashboard with stats badges and a cover-image grid of all series in the user\'s collection.' },
    { name: 'Series Details', desc: 'Header with series cover, title, author, publisher and start date + stats row + complete volume list.' },
    { name: 'Scan Book', desc: 'Barcode scan → ISBN lookup → volume result card with select/deselect → add to collection or mark as owned.' },
]
</script>

<style scoped>
.manga-page {
    width: 100%;
}

/* ── Hero ─────────────────────────────────────────────── */
.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
    gap: 1.5rem;
    align-items: start;
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

.badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.1rem;
}

.badge {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    padding: 0.25rem 0.55rem;
    border-radius: 999px;
    border: 1px solid rgba(var(--color-accent-cool-rgb), 0.45);
    color: rgba(var(--color-accent-cool-rgb), 1);
    background: rgba(var(--color-accent-cool-rgb), 0.1);
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
    text-decoration: none;
    display: inline-block;
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

/* ── Hero visual ──────────────────────────────────────── */
.hero-visual {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.2);
}

.hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* ── Section headings ─────────────────────────────────── */
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
    gap: 0.85rem;
}

.content-block>p {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
}

/* ── Feature Grid ─────────────────────────────────────── */
.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
}

.feature-item {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.feature-icon {
    width: 28px;
    height: 28px;
    color: rgba(var(--color-accent-cool-rgb), 0.9);
}

.feature-item strong {
    font-size: 0.86rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.feature-item p {
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.8);
}

/* ── Grid Two ─────────────────────────────────────────── */
.grid-two {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}

/* ── Lists ────────────────────────────────────────────── */
.list {
    margin: 0;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.list li {
    font-size: 0.84rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.9);
}

code {
    font-size: 0.78em;
    background: rgba(var(--color-accent-cool-rgb), 0.12);
    color: rgba(var(--color-accent-cool-rgb), 1);
    border-radius: 4px;
    padding: 0.05em 0.3em;
}

/* ── DB Grid ──────────────────────────────────────────── */
.db-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.8rem;
}

.db-item {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 10px;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.db-item strong {
    font-size: 0.82rem;
    color: rgba(var(--color-accent-cool-rgb), 1);
    font-family: 'Courier New', monospace;
}

.db-item p {
    margin: 0;
    font-size: 0.76rem;
    line-height: 1.4;
    color: rgba(var(--color-text-primary-rgb), 0.8);
}

/* ── Screens Grid ─────────────────────────────────────── */
.screens-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.8rem;
}

.screen-item {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 10px;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.screen-icon {
    width: 24px;
    height: 24px;
    color: rgba(var(--color-accent-cool-rgb), 0.8);
}

.screen-item strong {
    font-size: 0.82rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.screen-item p {
    margin: 0;
    font-size: 0.75rem;
    line-height: 1.4;
    color: rgba(var(--color-text-primary-rgb), 0.78);
}

/* ── PDF ──────────────────────────────────────────────── */
.pdf-actions {
    display: flex;
}

.pdf-wrapper {
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.3);
    border-radius: 12px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.15);
}

.pdf-wrapper iframe {
    width: 100%;
    height: 820px;
    border: none;
    display: block;
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1200px) {
    .db-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .screens-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 1100px) {
    .hero-grid {
        grid-template-columns: 1fr;
    }

    .feature-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 900px) {
    .grid-two {
        grid-template-columns: 1fr;
    }

    .db-grid {
        grid-template-columns: 1fr;
    }

    .screens-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 640px) {
    .feature-grid {
        grid-template-columns: 1fr;
    }

    .screens-grid {
        grid-template-columns: 1fr;
    }

    .pdf-wrapper iframe {
        height: 500px;
    }
}
</style>
