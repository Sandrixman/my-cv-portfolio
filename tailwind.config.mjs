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
            },
        },
    },
    plugins: [],
}
