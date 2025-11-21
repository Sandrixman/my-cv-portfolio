"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { contactInfo, socialLinks } from "@/config/constants"
import { Phone, Mail } from "lucide-react"

export default function Contact() {
    const t = useTranslations("Contact")
    const [copiedField, setCopiedField] = useState<string | null>(null)

    const handleCopy = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopiedField(field)
        setTimeout(() => setCopiedField(null), 2000)
    }

    const contactCards = [
        {
            id: "phone",
            label: t("phone"),
            value: contactInfo.phone,
            href: `tel:${contactInfo.phone}`,
            icon: <Phone className='w-6 h-6' />,
        },
        {
            id: "email",
            label: t("email"),
            value: contactInfo.email,
            href: `mailto:${contactInfo.email}`,
            icon: <Mail className='w-6 h-6' />,
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
                            className={`p-3 rounded-full backdrop-blur-lg border
                                    bg-gradient-to-tr from-[var(--btn-bg-from)]
                                    to-[var(--btn-bg-to)]
                                    border-[var(--btn-border)]
                                    shadow-lg hover:shadow-2xl transition-all duration-300
                                    ease-out cursor-pointer group relative overflow-hidden`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-r from-transparent
                                    ${
                                        social.id === "github"
                                            ? "via-black/15 dark:via-white/20"
                                            : social.gradientClass
                                    }
                                    to-transparent
                                    -translate-x-full group-hover:translate-x-full
                                    transition-transform duration-700 ease-out`}
                            />
                            <div className='relative z-10'>
                                <div
                                    className={`${social.iconClass} transition-colors duration-300 w-10 h-10`}
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
                    {contactCards.map((card) => {
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
                                transition={{ duration: 0.4 }}
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
