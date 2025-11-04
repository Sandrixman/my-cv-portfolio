export function scrollToSection(id: string, offset = 0) {
    const el = document.getElementById(id)
    if (el instanceof HTMLElement) {
        if (window.lenis) {
            window.lenis.scrollTo(el, { offset })
        } else {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }
}
