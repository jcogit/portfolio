export type KnowledgeKey = 'frontend' | 'backend' | 'database' | 'uxui' | 'tools'

export interface KnowledgeItem {
    key: KnowledgeKey
    label: string
    level: number
}

export const knowledgeData: KnowledgeItem[] = [
    {
        key: 'frontend',
        label: 'Frontend',
        level: 100
    },
    {
        key: 'backend',
        label: 'Backend',
        level: 60
    },
    {
        key: 'database',
        label: 'Database',
        level: 40
    },
    {
        key: 'uxui',
        label: 'UX/UI',
        level: 60
    },
    {
        key: 'tools',
        label: 'Tools',
        level: 80
    }
]
