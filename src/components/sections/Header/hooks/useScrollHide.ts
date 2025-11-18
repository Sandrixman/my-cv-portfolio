import { useEffect, useState } from "react"

export function useScrollHide(heroSelector = "#hero", threshold = 0.7) {
    const [hidden, setHidden] = useState(false)
    const [pastHero, setPastHero] = useState(false)
    const [lastScroll, setLastScroll] = useState(0)

    useEffect(() => {
        const hero = document.querySelector(heroSelector)
        const heroHeight = hero?.clientHeight || 0

        const handleScroll = () => {
            const current = window.scrollY
            const scrolledPastHero = current > heroHeight * threshold
            setPastHero(scrolledPastHero)

            if (scrolledPastHero) {
                if (current > lastScroll + 10) setHidden(true)
                else if (current < lastScroll - 10) setHidden(false)
            } else setHidden(false)

            setLastScroll(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScroll])

    return { hidden, pastHero }
}
