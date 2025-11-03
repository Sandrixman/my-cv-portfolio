"use client"
import { motion } from "framer-motion"

export default function BurgerButton({ open, toggle }: { open: boolean; toggle: () => void }) {
    return (
        <button
            onClick={toggle}
            aria-label='Toggle menu'
            className='relative flex flex-col justify-center items-center w-10 h-6 md:hidden z-[1201]'
        >
            <motion.span
                className='absolute block w-full h-[2px] bg-[var(--color-text)] rounded'
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            />
            <motion.span
                className='absolute block w-full h-[2px] bg-[var(--color-text)] rounded'
                animate={open ? { opacity: 0 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            />
            <motion.span
                className='absolute block w-full h-[2px] bg-[var(--color-text)] rounded'
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
            />
        </button>
    )
}
