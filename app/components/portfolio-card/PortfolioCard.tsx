import Image from 'next/image'
import React from 'react'
type Props = {
    img: string
    title: string
}
const PortfolioCard = ({ img, title }: Props) => {
    return (
        <div className='overflow-hidden relative custom-spotlight-card p-4 bg-white/40 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg group' >
            <div className='h-[200px] lg:h-[400px] overflow-hidden rounded-[30px]'>
                <Image className='object-cover w-full h-full group-hover:scale-108 ease-in duration-400' src={img} width={800} height={600} alt="Image" />
            </div>
            <div className='lg:px-[20px] pt-[26px] pb-[10px]  bottom-0 left-0 z-[10] w-full '>
                <h2 className='whitespace-nowrap overflow-hidden text-ellipsis text-[var(--normal-text)] text-lg lg:text-[22px] font-semibold text-center'>{title}</h2>
            </div>
        </div>
    )
}

export default PortfolioCard