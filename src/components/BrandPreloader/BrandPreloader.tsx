"use client"
import { motion } from "framer-motion"
import styles from "./BrandPreloader.module.css"

export default function BrandPreloader() {
    return (
        <motion.div
            className={`${styles.preloaderOverlay} fixed inset-0 flex items-center justify-center`}
            initial={{ scale: 1, opacity: 1, rotateX: 0 }}
            animate={{ scale: 12, opacity: [1, 1, 0.8, 0.5, 0], rotateX: -20 }}
            transition={{ duration: 1.8, ease: [0.5, 0.4, 0.2, 1] }}
        >
            {" "}
            <motion.span
                className={`${styles.logoGradient} tracking-wide whitespace-nowrap text-center`}
                initial={{ scale: 1, opacity: 1, rotateX: 0 }}
                animate={{ scale: 12, opacity: [1, 1, 0.8, 0.5, 0], rotateX: -20 }}
                transition={{ duration: 2, ease: "easeOut" }}
            >
                {" "}
                Oleksandr&nbsp;Novak <br /> Loading{" "}
            </motion.span>{" "}
        </motion.div>
    )
}
