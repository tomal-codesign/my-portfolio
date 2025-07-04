import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import WeaponCard from './weapon-card/WeaponCard'

type props = {
    className?: string
}

const Weapons = ({ className }: props) => {
    return (
        <>
            <div className={`pt-8 ${className}`}>
                <div className="container mx-auto px-4">
                    <div className='custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] p-4 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg'>
                        <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">My Weapons Power</h1>
                        <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-md">Mastering both design aesthetics and frontend functionality with a refined toolset.</p>
                        <div className='flex flex-wrap lg:pt-10 pt-3 lg:pt-6 justify-center'>
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(219, 69, 60, 0.3)" icon="material-icon-theme:figma" text="Figma" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(52, 137, 255, 0.3)" icon="devicon:photoshop" text="Photoshop" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(209, 83, 80, 0.3)" icon="vscode-icons:file-type-html" text="HTML" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor='rgba(53, 138, 226, 0.3)' icon="vscode-icons:file-type-css2" text="CSS" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(130, 34, 222, 0.3)" icon="devicon:bootstrap" text="Bootstrap" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(56, 189, 248, 0.3)" icon="devicon:tailwindcss" text="Tailwind" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(247, 223, 30, 0.3)" icon="logos:javascript" text="JavaScript" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(125, 213, 207, 0.4)" icon="devicon:react" text="React" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(0, 0, 0, 0.3)" icon="devicon:nextjs" text="Next.js" />
                            <WeaponCard className='lg:w-1/7 md:w-1/3 w-1/2 p-1.5 lg:p-3' spotlightColor="rgba(244, 42, 73, 0.3)" icon="devicon:angular" text="Angular" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weapons