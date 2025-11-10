"use client"
import { motion } from "framer-motion"

export default function About() {
    return (
        <section className='py-24 px-6 max-w-4xl mx-auto text-center'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-3xl font-bold mb-6'
            >
                About Me
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'
            >
                I’m a Front-End and Bubble developer passionate about motion design, elegant code,
                and no-code innovation. My focus — creating interfaces that feel alive, intuitive,
                and fast.
            </motion.p>
        </section>
    )
}
