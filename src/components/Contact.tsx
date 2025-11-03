"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

export default function Contact() {
    const t = useTranslations("Contact")

    return (
        <section id='contact' data-label={t("label")} className='py-24 px-6 text-center'>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className='text-3xl font-bold mb-8'
            >
                Let’s build something human.
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className='flex flex-wrap justify-center gap-4'
            >
                <a
                    href='mailto:you@example.com'
                    className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-lg shadow hover:scale-105 transition'
                >
                    Email
                </a>
                <a
                    href='https://linkedin.com/in/oleksandernovak'
                    target='_blank'
                    className='px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-105 transition'
                >
                    LinkedIn
                </a>
                <a
                    href='https://github.com/oleksander-novak'
                    target='_blank'
                    className='px-6 py-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:scale-105 transition'
                >
                    GitHub
                </a>
            </motion.div>
        </section>
    )
}
