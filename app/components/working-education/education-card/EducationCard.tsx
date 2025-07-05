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
                <div className='flex gap-4 items-center w-full'>
                    <div className='lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] bg-[#fff]/60 flex justify-center items-center rounded-[18px] overflow-hidden'>
                        {icon && <Icon icon={icon} className='w-[22px] lg:w-[35px] h-[22px] lg:h-[35px]' />}
                    </div>
                    <div className='flex flex-col gap-1 lg:flex-row justify-between items-center flex-1'>
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-[var(--normal-text)] text-md lg:text-lg font-medium">{designation}</h2>
                            <p className='text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base'>{company}</p>
                        </div>
                        <div>
                            <p className='text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base'>{duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationCard