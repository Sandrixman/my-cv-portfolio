"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function Contact() {
    const t = useTranslations("Contact")
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const contactInfo = {
        telegram: "https://t.me/sancho_novak",
        github: "https://github.com/sandrixman",
        linkedin: "https://www.linkedin.com/in/-oleksandr-novak/",
        phone: "+380506901903",
        email: "sandrix28101981@gmail.com",
    }

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    const socialLinks = [
        {
            id: "telegram",
            href: contactInfo.telegram,
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-10 h-10 fill-current'
                >
                    <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z'></path>
                </svg>
            ),
            buttonClass:
                "border-blue-500/20 hover:shadow-blue-500/30 hover:border-blue-500/50 hover:from-blue-500/10",
            iconClass: "text-blue-500 group-hover:text-blue-400",
            gradientClass: "via-blue-500/20",
        },
        {
            id: "github",
            href: contactInfo.github,
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-10 h-10 fill-current'
                >
                    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'></path>
                </svg>
            ),
            buttonClass:
                "border-white/10 hover:shadow-white/20 hover:border-white/30 hover:from-white/10",
            iconClass: "text-white group-hover:text-white/90",
            gradientClass: "via-white/10",
        },
        {
            id: "linkedin",
            href: contactInfo.linkedin,
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    className='w-10 h-10 fill-current'
                >
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'></path>
                </svg>
            ),
            buttonClass:
                "border-indigo-500/20 hover:shadow-indigo-500/30 hover:border-indigo-500/50 hover:from-indigo-500/10",
            iconClass: "text-indigo-500 group-hover:text-indigo-400",
            gradientClass: "via-indigo-500/20",
        },
    ]

    const contactCards = [
        {
            id: "phone",
            label: t("phone"),
            value: contactInfo.phone,
            href: `tel:${contactInfo.phone}`,
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                </svg>
            ),
        },
        {
            id: "email",
            label: t("email"),
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            icon: (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-6 h-6'
                >
                    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                    <polyline points='22,6 12,13 2,6'></polyline>
                </svg>
            ),
        },
    ]

    return (
        <section id='contact' data-label={t("label")}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center mb-16'
            >
                <h2 className='text-3xl md:text-4xl font-bold mb-4'>{t("title")}</h2>
                <p className='text-lg text-gray-600 dark:text-gray-400'>{t("subtitle")}</p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='mb-16'
            >
                <h3 className='text-xl font-semibold mb-8 text-center'>{t("socialMedia")}</h3>
                <div className='flex flex-wrap justify-center gap-6'>
                    {socialLinks.map((social) => (
                        <motion.a
                            key={social.id}
                            href={social.href}
                            target='_blank'
                            rel='noopener noreferrer'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.1, rotate: 3 }}
                            whileTap={{ scale: 0.95, rotate: 0 }}
                            className={`p-3 rounded-full backdrop-blur-lg border ${social.buttonClass} bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out cursor-pointer hover:bg-gradient-to-tr hover:to-black/40 group relative overflow-hidden`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-transparent ${social.gradientClass} to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out`}
                            ></div>
                            <div className='relative z-10'>
                                <div
                                    className={`${social.iconClass} transition-colors duration-300`}
                                >
                                    {social.icon}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Contact Information Cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
            >
                <h3 className='text-xl font-semibold mb-8 text-center'>{t("contactInfo")}</h3>
                <div className='grid grid-cols-2 gap-6 mb-6'>
                    {contactCards.map((card, index) => {
                        const CardContent = (
                            <div className='p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 h-full flex flex-col'>
                                <div className='flex items-center justify-between mb-4'>
                                    <div className='p-3 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10'>
                                        <div className='text-white/80 group-hover:text-white transition-colors'>
                                            {card.icon}
                                        </div>
                                    </div>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            handleCopy(card.value, card.id)
                                        }}
                                        className='px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all duration-200'
                                    >
                                        {copiedField === card.id ? t("copied") : t("copy")}
                                    </button>
                                </div>
                                <h4 className='text-sm font-medium text-white/60 mb-2'>
                                    {card.label}
                                </h4>
                                <p className='text-base font-semibold text-white break-all'>
                                    {card.value}
                                </p>
                            </div>
                        )

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className='relative group'
                            >
                                {card.href ? (
                                    <a href={card.href} className='block cursor-pointer'>
                                        {CardContent}
                                    </a>
                                ) : (
                                    CardContent
                                )}
                            </motion.div>
                        )
                    })}
                </div>
                {/* Address as simple text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    viewport={{ once: true }}
                    className='text-center'
                >
                    <p className='text-base text-gray-400 dark:text-gray-500'>{t("address")}</p>
                </motion.div>
            </motion.div>
        </section>
    )
}
