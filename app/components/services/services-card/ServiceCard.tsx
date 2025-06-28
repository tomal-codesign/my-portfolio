import React from 'react'
import CardSwap, { Card } from '../../common-component/card-swap/CardSwap'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
type Props = {
    id: number;
    name: string;
    description: string;
    icon: {
        id: number;
        icon: string;
        name: string;
    }[];
    img: {
        id: number;
        type: string;
        img?: any;
    }[];
}

const ServiceCard = (Props: Props) => {
    return (
        <>
            <div className='overflow-hidden relative z-[10] custom-spotlight-card bg-white/40  border border-[#fff]/80 rounded-[46px] backdrop-blur-lg'>
                <div className='lg:p-[40px] p-4'>
                    <h1 className='text-[var(--normal-text)] text-[30px] font-extrabold'>{Props.name}</h1>
                    <p className='pt-1 text-[var(--normal-text)] text-md'>{Props.description}</p>
                    <div className='flex py-4 gap-4'>
                        {Props.icon && Props.icon.map((item) => (
                            <div key={item.id} className='flex items-center gap-2 custom-spotlight-card bg-white/40 py-2 px-3 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg'>
                                <Icon width={20} height={20} icon={item.icon} className='text-[var(--normal-text)] text-[30px]' />
                                <span className='text-[var(--normal-text)] text-sm'>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ height: '570px', position: 'relative' }}>
                    <CardSwap
                        cardDistance={60}
                        verticalDistance={100}
                        delay={5000}
                        pauseOnHover={false}
                    >
                        {Props.img && Props.img.map((item) => (
                            <Card className=' rounded-[46px] backdrop-blur-2xl overflow-hidden'>
                                {item.img &&
                                    <Image
                                        src={item.img}
                                        alt="Image"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover object-left-top"
                                    />
                                }
                            </Card>
                        ))}
                        {/* <Card className='rounded-[46px] overflow-hidden backdrop-blur-2xl'>
                            <img className='w-full h-full object-cover object-left-top' src="https://cdn.dribbble.com/userupload/43375569/file/original-834e6fb9ff3d38c979cba69ba3ca2a61.jpg?resize=1024x1015&vertical=center" alt="" />
                        </Card>
                        <Card className=' rounded-[46px] overflow-hidden backdrop-blur-2xl'>
                            <img className='w-full h-full object-cover object-left-top' src="https://cdn.dribbble.com/userupload/43086306/file/original-5d0ab72db30fb1b6d60e1305b5e1f8b2.jpg?resize=1024x698&vertical=center" alt="" />
                        </Card> */}
                    </CardSwap>
                </div>
            </div>
        </>
    )
}

export default ServiceCard