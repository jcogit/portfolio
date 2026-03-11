import type { KnowledgeKey } from './knowledge'

export type SkillColor =
    | 'accent-warm'
    | 'accent-cool'
    | 'surface'

export interface SkillItem {
    name: string
    value: number
    years: number
    color: SkillColor
}

export const skillsData: Record<KnowledgeKey, SkillItem[]> = {
    frontend: [
        { name: 'HTML', value: 96, years: 20, color: 'accent-warm' },
        { name: 'CSS | SCSS | Sass', value: 94, years: 18, color: 'accent-warm' },
        { name: 'JavaScript | TypeScript', value: 92, years: 16, color: 'accent-warm' },
        { name: 'Bootstrap', value: 85, years: 10, color: 'accent-cool' },
        { name: 'Angular', value: 83, years: 8, color: 'accent-cool' },
        { name: 'React', value: 78, years: 6, color: 'accent-cool' },
        { name: 'Vue', value: 75, years: 5, color: 'accent-cool' },
        { name: 'Tailwind', value: 74, years: 5, color: 'surface' },
        { name: 'Pinia', value: 62, years: 2, color: 'surface' },
    ],

    backend: [
        { name: 'PHP', value: 94, years: 18, color: 'accent-warm' },
        { name: 'C#', value: 88, years: 10, color: 'accent-warm' },
        { name: 'REST APIs', value: 90, years: 8, color: 'accent-cool' },
        { name: 'Laravel', value: 85, years: 8, color: 'accent-cool' },
        { name: 'Node.js', value: 78, years: 6, color: 'surface' },
        { name: 'GraphQL', value: 68, years: 4, color: 'surface' }
    ],

    database: [
        { name: 'MySQL', value: 94, years: 18, color: 'accent-warm' },
        { name: 'PostgreSQL', value: 86, years: 8, color: 'accent-cool' },
        { name: 'SQLite', value: 78, years: 6, color: 'accent-cool' },
        { name: 'Azure', value: 72, years: 4, color: 'surface' },
    ],

    uxui: [
        { name: 'Adobe Photoshop', value: 90, years: 15, color: 'accent-warm' },
        { name: 'Gimp', value: 88, years: 15, color: 'accent-warm' },
        { name: 'Adobe XD', value: 80, years: 6, color: 'accent-cool' },
        { name: 'Sketch', value: 78, years: 6, color: 'accent-cool' },
        { name: 'Affinity', value: 76, years: 5, color: 'surface' },
        { name: 'Figma', value: 74, years: 4, color: 'surface' },
    ],

    tools: [
        { name: 'Apache', value: 92, years: 18, color: 'accent-warm' },
        { name: 'Git', value: 88, years: 10, color: 'accent-warm' },
        { name: 'GitHub', value: 86, years: 10, color: 'accent-warm' },
        { name: 'npm', value: 86, years: 10, color: 'accent-warm' },
        { name: 'Visual Studio Code', value: 84, years: 8, color: 'accent-cool' },
        { name: 'Docker', value: 78, years: 5, color: 'surface' },
        { name: 'Prisma', value: 70, years: 3, color: 'surface' },
        { name: 'Vite', value: 68, years: 3, color: 'surface' },
    ]
}
