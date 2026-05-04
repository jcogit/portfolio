<template>
    <div class="wow-housing-page flex flex-col gap-4 sm:gap-6 pb-8">

        <!-- ── Hero ──────────────────────────────────────────── -->
        <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-7">
            <div class="hero-grid">
                <div class="hero-copy">
                    <p class="eyebrow">Project Overview</p>
                    <h1>WoW Housing Bot</h1>
                    <p class="subtitle">
                        A Discord bot for managing housing in a World of Warcraft community —
                        reservations, moves, character renames, admin approval flows, and a
                        built-in simulation engine for end-to-end testing.
                    </p>
                    <p>
                        Built for a live WoW private-server Discord ("Azeroths Homes"), the bot
                        replaces all manual housing coordination. Players interact via slash commands
                        and guided DM wizards. Admins manage requests through a Town Hall channel.
                        A standalone simulation tool validates all business logic without a real
                        Discord connection.
                    </p>
                    <div class="badges">
                        <span v-for="tech in techs" :key="tech" class="badge">{{ tech }}</span>
                    </div>
                    <div class="cta-row">
                        <a class="primary-link" href="https://github.com/jcogit/wowhousing" target="_blank"
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
                        @click="openPreview('/wow-housing-preview/layer_overview.png', 'Layer Overview', 'Housing Layer Overview')">
                        <img src="/wow-housing-preview/layer_overview.png" alt="Housing Layer Overview"
                            loading="lazy" />
                    </button>
                </figure>
            </div>
        </BaseCard>

        <!-- ── Core Commands / Pillars ───────────────────────── -->
        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Core Commands</h2>
                <p>Three slash commands cover the complete player journey — each triggers a guided DM wizard that steps
                    the player through the process and creates an application in the database for admin review.</p>
                <div class="pillars">
                    <div class="pillar">
                        <div class="pillar-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                <polyline points="9 22 9 12 15 12 15 22" />
                            </svg>
                        </div>
                        <strong>/reserve</strong>
                        <p>Claim a free plot in a faction + layer. Validates eligibility, capacity, and existing
                            sessions before opening a DM wizard.</p>
                    </div>
                    <div class="pillar">
                        <div class="pillar-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 .49-3.91" />
                            </svg>
                        </div>
                        <strong>/move</strong>
                        <p>Apply for a plot move within the same faction. Enforces cooldowns, layer capacity thresholds,
                            and open-application guards.</p>
                    </div>
                    <div class="pillar">
                        <div class="pillar-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"
                                stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="8" r="5" />
                                <path d="M20 21a8 8 0 00-16 0" />
                            </svg>
                        </div>
                        <strong>/changechar</strong>
                        <p>Request a character name update for an existing registered plot. Checks for existing open
                            applications before starting a new session.</p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Reservation Flow ──────────────────────────────── -->
        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Reservation Flow</h2>
                <p>
                    Each step of the reservation wizard is handled as a separate Discord interaction.
                    The bot creates and updates an in-memory session to track the player's progress
                    through faction selection, layer selection, plot selection, character name input,
                    and final confirmation.
                </p>
                <div class="flow-grid">
                    <figure v-for="step in reservationSteps" :key="step.img">
                        <button type="button" class="preview-trigger"
                            @click="openPreview(step.img, step.caption, step.caption)">
                            <img :src="step.img" :alt="step.caption" loading="lazy" />
                        </button>
                        <figcaption>{{ step.caption }}</figcaption>
                    </figure>
                </div>
            </section>
        </BaseCard>

        <!-- ── Admin Town Hall + App Channel ────────────────── -->
        <div class="grid-two">
            <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Admin Town Hall</h2>
                    <p>
                        Admins manage all open applications from a dedicated Town Hall channel.
                        Each application category (reservation, move, rename) is displayed as
                        an interactive Discord embed with approve/reject buttons. The Town Hall
                        engine batches updates and keeps the channel in sync with the database.
                    </p>
                    <ul class="list">
                        <li>Live overview of pending reservations, moves, and renames</li>
                        <li>One-click approve / reject with optional reason input</li>
                        <li>Automatic status propagation to the player via DM</li>
                        <li>Audit log entry created for every admin action</li>
                    </ul>
                </section>
            </BaseCard>

            <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Application Channels</h2>
                    <figure class="single-preview">
                        <button type="button" class="preview-trigger"
                            @click="openPreview('/wow-housing-preview/application_channel.png', 'Application channel overview', 'Application Channel')">
                            <img src="/wow-housing-preview/application_channel.png" alt="Application channel"
                                loading="lazy" />
                        </button>
                        <figcaption>Discord housing map channels — each faction + layer pair gets its own thread for
                            player commands.</figcaption>
                    </figure>
                    <figure class="single-preview" style="margin-top: 0.75rem;">
                        <button type="button" class="preview-trigger"
                            @click="openPreview('/wow-housing-preview/application_channel_details.png', 'Channel details view', 'Channel Details')">
                            <img src="/wow-housing-preview/application_channel_details.png" alt="Channel details"
                                loading="lazy" />
                        </button>
                        <figcaption>Detailed channel view with embed status messages and action buttons.</figcaption>
                    </figure>
                </section>
            </BaseCard>
        </div>

        <!-- ── Statistics + Auto-Channels ───────────────────── -->
        <div class="grid-two">
            <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Statistics Overview</h2>
                    <figure class="single-preview">
                        <button type="button" class="preview-trigger"
                            @click="openPreview('/wow-housing-preview/statistics.png', 'Statistics overview', 'Statistics')">
                            <img src="/wow-housing-preview/statistics.png" alt="Statistics overview" loading="lazy" />
                        </button>
                        <figcaption>Per-faction housing statistics: total plots, occupied, reserved, free, and pending
                            applications.</figcaption>
                    </figure>
                </section>
            </BaseCard>

            <BaseCard variant="credit" :useDarkShadow="true" class="w-full p-5 sm:p-6">
                <section class="content-block">
                    <h2>Automatic Channels</h2>
                    <figure class="single-preview">
                        <button type="button" class="preview-trigger"
                            @click="openPreview('/wow-housing-preview/automatic_channels.png', 'Automatic channel setup', 'Auto Channels')">
                            <img src="/wow-housing-preview/automatic_channels.png" alt="Automatic channels"
                                loading="lazy" />
                        </button>
                        <figcaption>Forum channels and threads are auto-generated and kept in sync via the
                            <code>/structure/sync</code> HTTP endpoint and the forum rebuild pipeline.</figcaption>
                    </figure>
                </section>
            </BaseCard>
        </div>

        <!-- ── Architecture ──────────────────────────────────── -->
        <BaseCard variant="info-left" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Architecture</h2>
                <div class="arch-grid">
                    <div class="arch-item">
                        <strong>Monorepo (Node.js / TypeScript)</strong>
                        <p>Two apps (<code>bot</code>, <code>web</code>) and a <code>packages/shared</code> library
                            share Prisma schema, business logic, queries, and type definitions.</p>
                    </div>
                    <div class="arch-item">
                        <strong>Discord.js Bot + Express Server</strong>
                        <p>The bot exposes an internal HTTP API (<code>POST /global/start</code>,
                            <code>/forum/rebuild</code>, <code>/structure/sync</code>) for lifecycle management and
                            Discord sync operations.</p>
                    </div>
                    <div class="arch-item">
                        <strong>Dual Instance Setup (Live / Test)</strong>
                        <p>Independent live and test bot instances run in parallel on different ports (4001 / 4002) with
                            separate config files, feature flags, and DM-redirect for development.</p>
                    </div>
                    <div class="arch-item">
                        <strong>PostgreSQL + Prisma ORM</strong>
                        <p>Full relational schema: <code>DiscordUser</code>, <code>Plot</code>,
                            <code>Neighborhood</code>, <code>Application</code>, <code>AuditLog</code>,
                            <code>BotServer</code>, <code>BotChannel</code> with enum-driven status tracking.</p>
                    </div>
                    <div class="arch-item">
                        <strong>Session-Based Interaction Flow</strong>
                        <p><code>HousingSessionService</code> stores step-by-step wizard state for each player so
                            multi-message DM flows survive bot restarts and concurrent users.</p>
                    </div>
                    <div class="arch-item">
                        <strong>Layer + Capacity Rules</strong>
                        <p>New neighborhood layers are created automatically at 90 % capacity. Moves are gated behind an
                            85 % threshold and a 4-week cooldown. Rules are centralized in <code>HOUSING_RULES</code>.
                        </p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Simulation Engine ─────────────────────────────── -->
        <BaseCard variant="info-right" :useDarkShadow="true" class="w-full p-5 sm:p-6">
            <section class="content-block">
                <h2>Simulation Engine</h2>
                <p>
                    A self-contained simulation tool in <code>packages/shared/src/simulation</code> replays
                    a sequence of housing events (joins, reservations, approvals, moves, renames, move-outs)
                    against a clean database to validate all business logic end-to-end — no real Discord
                    connection needed.
                </p>
                <div class="sim-grid">
                    <div class="sim-item">
                        <strong>Event-Driven Replay</strong>
                        <p>Events are defined as typed objects (<code>HousingEvent</code> union), sorted by date, and
                            fed into <code>HousingLogic</code> one by one. Paused events (e.g. waiting for admin
                            approval) are buffered and retried.</p>
                    </div>
                    <div class="sim-item">
                        <strong>Live & Test Mode</strong>
                        <p>Two independent event datasets — one for the live server, one for the test server — can be
                            run independently via <code>SIMULATION_MODE=live|test</code>. After replay, the bot's forum
                            is rebuilt automatically via HTTP.</p>
                    </div>
                    <div class="sim-item">
                        <strong>Database Reset</strong>
                        <p>Before each simulation run the database is fully cleared (<code>clearHousingDatabase</code>)
                            so results are deterministic and reproducible regardless of prior state.</p>
                    </div>
                    <div class="sim-item">
                        <strong>Action Logging</strong>
                        <p>Every event outcome is written to a structured log. A queue file
                            (<code>simulation.queue.json</code>) records what was processed and what remains, providing
                            a full audit trail after each run.</p>
                    </div>
                </div>
            </section>
        </BaseCard>

        <!-- ── Lightbox ──────────────────────────────────────── -->
        <div v-if="activePreview" class="lightbox" @click.self="closePreview">
            <button type="button" class="lightbox-close" @click="closePreview">Close (Esc)</button>
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

const techs = ['TypeScript', 'Node.js', 'Discord.js', 'Express', 'Prisma', 'PostgreSQL', 'Monorepo']

const reservationSteps = [
    { img: '/wow-housing-preview/reservation_step1.png', caption: 'Step 1 — Welcome & Faction' },
    { img: '/wow-housing-preview/reservation_step2.png', caption: 'Step 2 — Layer Selection' },
    { img: '/wow-housing-preview/reservation_step3.png', caption: 'Step 3 — Plot Selection' },
    { img: '/wow-housing-preview/reservation_step4.png', caption: 'Step 4 — Character Name' },
    { img: '/wow-housing-preview/reservation_step5.png', caption: 'Step 5 — Confirmation' },
]

type ImagePreview = { src: string; alt: string; title: string }
const activePreview = ref<ImagePreview | null>(null)

function openPreview(src: string, alt: string, title: string) {
    activePreview.value = { src, alt, title }
}
function closePreview() {
    activePreview.value = null
}
function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') closePreview()
}
onMounted(() => window.addEventListener('keydown', handleEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', handleEscape))
</script>

<style scoped>
.wow-housing-page {
    width: 100%;
}

/* ── Hero ─────────────────────────────────────────────── */
.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
    gap: 1.25rem;
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

.hero-visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
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

/* ── Pillars ─────────────────────────────────────────── */
.pillars {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
}

.pillar {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
}

.pillar-icon {
    width: 32px;
    height: 32px;
    color: rgba(var(--color-accent-cool-rgb), 0.9);
}

.pillar-icon svg {
    width: 100%;
    height: 100%;
}

.pillar strong {
    font-size: 0.88rem;
    color: rgba(var(--color-text-primary-rgb), 1);
    font-family: 'Courier New', monospace;
}

.pillar p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.8);
}

/* ── Reservation Flow Grid ────────────────────────────── */
.flow-grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.7rem;
}

.flow-grid figure {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.25);
}

.flow-grid img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
}

.flow-grid figcaption {
    padding: 0.45rem 0.6rem;
    font-size: 0.7rem;
    color: rgba(var(--color-text-primary-rgb), 0.8);
    line-height: 1.3;
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

/* ── Single preview figure ────────────────────────────── */
.single-preview {
    margin: 0;
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.35);
    border-radius: 10px;
    overflow: hidden;
    background: rgba(var(--color-surface-primary-rgb), 0.25);
}

.single-preview img {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
    display: block;
}

.single-preview figcaption {
    padding: 0.55rem 0.65rem;
    font-size: 0.76rem;
    color: rgba(var(--color-text-primary-rgb), 0.82);
    line-height: 1.4;
}

/* ── Architecture Grid ────────────────────────────────── */
.arch-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.85rem;
}

.arch-item {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 10px;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.arch-item strong {
    font-size: 0.82rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.arch-item p {
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.8);
}

code {
    font-size: 0.78em;
    background: rgba(var(--color-accent-cool-rgb), 0.12);
    color: rgba(var(--color-accent-cool-rgb), 1);
    border-radius: 4px;
    padding: 0.05em 0.3em;
}

/* ── Simulation Grid ──────────────────────────────────── */
.sim-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.85rem;
}

.sim-item {
    background: rgba(var(--color-surface-primary-rgb), 0.3);
    border: 1px solid rgba(var(--color-text-muted-rgb), 0.2);
    border-radius: 10px;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.sim-item strong {
    font-size: 0.82rem;
    color: rgba(var(--color-text-primary-rgb), 1);
}

.sim-item p {
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.45;
    color: rgba(var(--color-text-primary-rgb), 0.8);
}

/* ── Preview trigger ──────────────────────────────────── */
.preview-trigger {
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0;
    cursor: zoom-in;
    background: transparent;
    display: block;
}

/* ── Lightbox ─────────────────────────────────────────── */
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

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 1200px) {
    .flow-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .arch-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 1100px) {
    .hero-grid {
        grid-template-columns: 1fr;
    }

    .pillars {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 900px) {
    .flow-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-two {
        grid-template-columns: 1fr;
    }

    .arch-grid,
    .sim-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 600px) {
    .flow-grid {
        grid-template-columns: 1fr;
    }

    .flow-grid img {
        height: 140px;
    }
}
</style>
