import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import intellier from '../../../../public/images/Intellier-Limited.webp'
import type { StaticImageData } from 'next/image';

type props = {
    icon?: string
    designation?: string
    company?: string
    duration?: string
}

const EducationCard = ({ icon, designation, company, duration }: props) => {
    return (
        <div>
            <div className={`flex gap-6 items-center justify-between bg-white/60 px-3 py-3 border border-[#fff]/80 rounded-[30px] backdrop-blur-lg relative overflow-hidden`}>
                <div className='absolute bottom-0 left-0 bg-linear-to-r from-[#67AE6E]/20 to-blue-500/00 w-[30%] h-full z-[-1]'></div>
                <div className='flex gap-4'>
                    <div className='w-[60px] h-[60px] bg-[#fff]/60 flex justify-center items-center rounded-[18px] overflow-hidden'>
                        {icon && <Icon icon={icon} width="35" height="35" />}

                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className="text-[var(--normal-text)] text-lg font-medium">{designation}</h2>
                        <p className='text-[var(--normal-text)] text-md'>{company}</p>
                    </div>
                </div>
                <div>
                    <p className='text-[var(--normal-text)] text-md'>{duration}</p>
                </div>
            </div>
        </div>
    )
}

export default EducationCard