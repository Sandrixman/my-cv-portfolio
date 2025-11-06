import { Code2, CornerRightDown } from "lucide-react"
import ArrowDown from "/arrow-down.svg"

type HeroButtonProps = {
    text: string
}

const HeroButton = ({ text }: HeroButtonProps) => {
    return (
        <div className='flex flex-col gap-6 max-w-sm mx-auto relative'>
            <button className='group relative p-2 rounded-2xl backdrop-blur-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-purple-400/60 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out'></div>

                <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-purple-400/20 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                <div className='relative z-10 flex items-center gap-4'>
                    <div className='p-2 rounded-lg bg-gradient-to-br from-purple-500/30 to-purple-600/10 backdrop-blur-sm group-hover:from-purple-400/40 group-hover:to-purple-500/20 transition-all duration-300'>
                        <Code2 className='w-6 h-6' />
                    </div>
                    <div className='flex-1 text-left'>
                        <a
                            href='#projects'
                            className='text-purple-400 font-bold text-lg group-hover:text-purple-300 transition-colors duration-300 drop-shadow-sm'
                        >
                            {text}
                        </a>
                    </div>
                    <div className='opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300'>
                        <CornerRightDown className='w-8 h-8 stroke-purple-600' />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default HeroButton
