import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'
type Props = {
    img: string
    title: string
}
const PortfolioCard = ({ img, title }: Props) => {
    return (
        <div className='overflow-hidden relative custom-spotlight-card p-4 bg-white/40 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg group' >
            <div className='h-[200px] lg:h-[330px] overflow-hidden rounded-[30px] group relative'>
                <Image className='object-cover w-full h-full group-hover:scale-108 ease-in duration-400' src={img} width={800} height={600} alt="Image" />
                <div className='opacity-0 group-hover:opacity-100  absolute top-0 left-0 w-full h-full bg-black/40 flex justify-center items-center'>
                    <div className='bg-white w-[50px] h-[50px] rounded-full text-black flex justify-center items-center rotate-310'>
                        <Icon icon="si:arrow-right-duotone" width="26" height="26" />
                    </div>
                </div>
            </div>
            <div className='lg:px-[20px] pt-[20px] pb-[5px]  bottom-0 left-0 z-[10] w-full '>
                <h2 className='whitespace-nowrap overflow-hidden text-ellipsis text-[var(--normal-text)] text-lg lg:text-[22px] font-semibold text-center'>{title}</h2>
            </div>
        </div>
    )
}

export default PortfolioCard