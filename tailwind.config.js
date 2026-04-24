import { defineConfig } from 'vite'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1440px',
            },
            borderRadius: {
                base: "15px",
            },
            boxShadow: {
                glow: "0 0 6px 2px rgba(200, 51, 94, 0.35)",
            },
            colors: {
                bg: "var(--color-bg)",
                surface: "var(--color-surface-primary)",
                surfaceAlt: "var(--color-surface-secondary)",
                textPrimary: "var(--color-text-primary)",
                textMuted: "var(--color-text-muted)",
                accentWarm: "var(--color-accent-warm)",
                accentCool: "var(--color-accent-cool)",
                accentBackend: "var(--color-accent-backend)",
                accentFrontend: "var(--color-accent-frontend)",
                accentDesign: "var(--color-accent-design)",
            },
            fontFamily: {
                acme: ['Acme', 'sans-serif'],
                arial: ['Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}