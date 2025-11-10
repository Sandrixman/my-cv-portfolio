"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./PageTransition.module.css"

type PageTransitionProps = {
    isAnimating: boolean
}

export default function PageTransition({ isAnimating }: PageTransitionProps) {
    useEffect(() => {
        if (isAnimating) {
            document.body.classList.add("page-is-changing")
        } else {
            document.body.classList.remove("page-is-changing")
        }
    }, [isAnimating])

    return (
        <AnimatePresence>
            {isAnimating && (
                <>
                    {/* Two half blocks that cover the content */}
                    <motion.div
                        className={styles.coverTop}
                        initial={{ y: "-100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    />
                    <motion.div
                        className={styles.coverBottom}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Cover layer */}
                    <motion.div
                        className={styles.coverLayer}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                        }}
                    />

                    {/* Loading bar wrapper for centering */}
                    <div
                        className={styles.loadingBarWrapper}
                        style={{
                            position: "fixed",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 10000,
                            pointerEvents: "none",
                        }}
                    >
                        {/* Loading bar */}
                        <motion.div
                            className={styles.loadingBar}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 0.2, delay: 0.1 },
                            }}
                        >
                            <motion.div
                                className={styles.loadingBarProgress}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                exit={{ scaleX: 0 }}
                                transition={{
                                    duration: 1.1,
                                    delay: 0.15,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                            />
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}
