"use client";
import CardSwap, { Card } from '../../common-component/card-swap/CardSwap';
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
    id: number;
    name: string;
    description: string;
    icon: {
        id: number;
        icon: string;
        name: string;
    }[];
    img: any
};

const ServiceCard = (Props: Props) => {
    return (
        <>
            <div data-aos="fade-up" className="overflow-hidden relative z-[10] custom-spotlight-card bg-white/40 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg">
                <div className="lg:p-[40px] p-[30px] !pb-4 p-4">
                    <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[30px] font-extrabold">{Props.name}</h1>
                    <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base">{Props.description}</p>
                    <div className="flex flex-wrap py-4 lg:gap-4 gap-2">
                        {Props.icon?.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center lg:gap-2 gap-1 custom-spotlight-card bg-white/40 py-2 px-3 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg"
                            >
                                <Icon icon={item.icon} className="text-[var(--normal-text)] lg:w-[20px] lg:h-[20px] w-[15px] h-[15px]" />
                                <span className="text-[var(--normal-text)] text-xs lg:text-sm">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom Swiper Navigation Buttons */}

                <div className='relative left-[40px] w-full h-[200px] lg:h-[400px] rounded-tl-[30px] overflow-hidden'>
                    <Image src={Props.img} width={800} height={600} alt="Image" />
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
