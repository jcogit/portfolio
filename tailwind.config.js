import { defineConfig } from 'vite'

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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
            },
            fontFamily: {
                acme: ['Acme', 'sans-serif'],
                arial: ['Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
