/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                bg: "var(--color-bg)",
                bgMuted: "var(--color-bg-muted)",
                card: "var(--color-card)",
                border: "var(--color-border)",
                text: "var(--color-text)",
                textMuted: "var(--color-text-muted)",
                accent: "var(--color-accent)",
                accentHover: "var(--color-accent-hover)",
                success: "var(--color-success)",
                error: "var(--color-error)",
                warning: "var(--color-warning)",
            },
            fontFamily: {
                sora: ["var(--font-sora)", "sans-serif"],
                "miss-fajardose": ['"Miss Fajardose"', "cursive", "serif"],
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: "scale(0.2)" },
                    "100%": { opacity: 1, transform: "scale(1)" },
                },
                fadeOut: {
                    "0%": { opacity: 1, transform: "scale(1)" },
                    "100%": { opacity: 0, transform: "scale(0.5)" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.28s cubic-bezier(0.22, 1.24, 0.51, 1) forwards",
                fadeOut: "fadeOut 0.18s ease-in forwards",
            },
        },
    },
    plugins: [],
}
