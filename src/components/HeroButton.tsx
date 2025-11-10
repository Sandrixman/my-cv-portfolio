"use client"
import { Code2, CornerRightDown } from "lucide-react"

type HeroButtonProps = {
    text: string
}

const HeroButton = ({ text }: HeroButtonProps) => {
    return (
        <div className='flex flex-col gap-6 max-w-sm mx-auto relative'>
            <button
                onClick={() => window.lenis?.scrollTo("#projects", { offset: 0 })}
                className='
                    group relative w-full overflow-hidden rounded-2xl border border-[var(--color-border)]
                    bg-[var(--color-card)] text-[var(--color-text)]
                    hover:bg-gradient-to-r hover:from-[var(--color-gradient-start)] hover:to-[var(--color-gradient-end)]
                    hover:text-white transition-all duration-500 ease-out
                    shadow-[0_4px_14px_-2px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_-4px_var(--color-accent)]
                    active:scale-95
                    '
            >
                {/* subtle animated gradient line */}
                <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                    <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms] ease-out' />
                </div>

                <div className='relative z-10 flex items-center justify-between px-6 py-3'>
                    <div className='flex items-center gap-4'>
                        <div className='p-2 rounded-lg bg-[var(--color-accent)]/10 group-hover:bg-white/20 transition-colors duration-300'>
                            <Code2 className='w-5 h-5 text-[var(--color-accent)] group-hover:text-white transition-colors duration-300' />
                        </div>
                        <span className='font-semibold text-lg'>{text}</span>
                    </div>
                    <CornerRightDown className='w-6 h-6 text-[var(--color-accent)] group-hover:text-white group-hover:translate-x-1 transition-all duration-300' />
                </div>
            </button>
        </div>
    )
}

export default HeroButton
