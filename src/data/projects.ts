export type ProjectCategory = 'programming' | 'design'

export type ProjectStatus = 'live' | 'in-progress' | 'case-study' | 'concept'

export type ProjectLink = {
    label: string
    href: string
}

export type ProjectItem = {
    id: string
    title: string
    category: ProjectCategory
    status: ProjectStatus
    summary: string
    role: string
    highlights: string[]
    tech: string[]
    cover?: string
    links: ProjectLink[]
}

export const projectsData: ProjectItem[] = [
    {
        id: 'vacation-rental-frontend-prototype',
        title: 'NordStay Vacation Rental Platform',
        category: 'programming',
        status: 'in-progress',
        summary: 'End-to-end product project for a modern vacation-rental platform: guest booking flow, owner services, admin operations, backend API foundation, and scalable frontend architecture.',
        role: 'Fullstack Product Development + Architecture + UX/UI',
        highlights: [
            'Defines product scope across guest, owner, and admin roles with clear domain boundaries',
            'Combines backend foundation (.NET API, auth/security, testing) with frontend architecture and UX direction',
            'Uses a standalone landing-page prototype as visual validation, not as the full product implementation'
        ],
        tech: ['.NET', 'C#', 'Vue 3', 'TypeScript', 'Architecture', 'Testing'],
        cover: '/nordstay-preview/header-section.png',
        links: [
            {
                label: 'Open Project Overview',
                href: '/projects/vacation-rental'
            },
            {
                label: 'GitHub Repository',
                href: 'https://github.com/jcogit/nordstay'
            }
        ]
    },
    {
        id: 'portfolio-dashboard-prototype',
        title: 'Portfolio Dashboard',
        category: 'programming',
        status: 'in-progress',
        summary: 'Personal portfolio platform to present projects, experience, and application-ready case studies in a structured, visual dashboard format.',
        role: 'Product Design + Frontend Development',
        highlights: [
            'Designed as a central presentation layer for professional profile, project evidence, and role-fit communication',
            'Implements reusable card-based UI patterns, route-level structure, and responsive dashboard layouts',
            'Supports iterative storytelling: project overview, deep-dive pages, and application-focused landing content'
        ],
        tech: ['Vue 3', 'TypeScript', 'Vite', 'Component Architecture', 'Responsive UI'],
        cover: '/portfolio-preview/dashboard.png',
        links: [
            {
                label: 'Open Project Overview',
                href: '/projects/portfolio-dashboard'
            },
            {
                label: 'GitHub Repository',
                href: 'https://github.com/jcogit/portfolio'
            }
        ]
    },
    {
        id: 'wow-housing-bot',
        title: 'WoW Housing Bot',
        category: 'programming',
        status: 'in-progress',
        summary: 'Discord bot for managing housing in a WoW community: reservations, moves, character renames, admin approval flows, and a built-in simulation engine for end-to-end testing.',
        role: 'Fullstack Bot Development + System Design',
        highlights: [
            'Guided multi-step DM wizard for player reservation, move, and rename requests',
            'Admin Town Hall channel with live application management and one-click approve/reject',
            'Self-contained simulation engine replays event sequences against a clean database for deterministic logic validation',
            'Dual live/test instance setup with independent config, feature flags, and DM-redirect for development'
        ],
        tech: ['TypeScript', 'Node.js', 'Discord.js', 'Express', 'Prisma', 'PostgreSQL', 'Monorepo'],
        cover: '/wow-housing-preview/layer_overview.png',
        links: [
            {
                label: 'Open Project Overview',
                href: '/projects/wow-housing'
            },
            {
                label: 'GitHub Repository',
                href: 'https://github.com/jcogit/wowhousing'
            }
        ]
    },
    {
        id: 'manga-collection-royale',
        title: 'Manga Collection Royale',
        category: 'programming',
        status: 'case-study',
        summary: 'Bachelor thesis project: a cross-platform mobile app for managing personal manga collections, built with Ionic/Angular on the frontend and a custom PHP REST API backend.',
        role: 'Fullstack Development · Bachelor Thesis',
        highlights: [
            'Barcode (ISBN) scanner to look up and add physical manga volumes directly to the collection',
            'Per-user tracking of owned and read status across all series and volumes',
            'Custom PHP MVC framework with API key authentication serving all mobile app data',
            'Companion admin web panel for managing the global manga catalogue'
        ],
        tech: ['Ionic', 'Angular', 'TypeScript', 'PHP', 'MySQL', 'Cordova', 'REST API'],
        cover: '/manga-collection-preview/mangacollection.png',
        links: [
            {
                label: 'Open Project Overview',
                href: '/projects/manga-collection'
            },
            {
                label: 'GitHub Repository',
                href: 'https://github.com/janinchen85/mangacollectionroyaleapp'
            }
        ]
    },
]