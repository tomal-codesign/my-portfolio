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
    img: {
        id: number;
        type: string;
        img?: any;
    }[];
};

const ServiceCard = (Props: Props) => {
    return (
        <>
            <div className="overflow-hidden relative z-[10] custom-spotlight-card bg-white/40 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg">
                <div className="lg:p-[40px] !pb-4 p-4">
                    <h1 className="text-[var(--normal-text)] text-[30px] font-extrabold">{Props.name}</h1>
                    <p className="pt-1 text-[var(--normal-text)] text-md">{Props.description}</p>
                    <div className="flex py-4 gap-4">
                        {Props.icon?.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-2 custom-spotlight-card bg-white/40 py-2 px-3 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg"
                            >
                                <Icon width={20} height={20} icon={item.icon} className="text-[var(--normal-text)]" />
                                <span className="text-[var(--normal-text)] text-sm">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom Swiper Navigation Buttons */}

                <div className='relative'>
                    <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20 swiper-button-prev-custom cursor-pointer bg-white/60 backdrop-blur-lg p-2 rounded-full backdrop-blur-sm">
                        <Icon icon="iconamoon:arrow-left-2-light" width={28} height={28} />
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20 swiper-button-next-custom cursor-pointer bg-white/60 backdrop-blur-lg p-2 rounded-full backdrop-blur-sm">
                        <Icon icon="iconamoon:arrow-right-2-light" width={28} height={28} />
                    </div>
                    <Swiper
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        className="mySwiper"
                    >
                        {Props.img?.map((item, index) => (
                            <SwiperSlide key={index}>
                                {item.img && (
                                    <div className="h-[400px] !rounded-b-[46px]  backdrop-blur-2xl overflow-hidden">
                                        <Image
                                            src={item.img}
                                            alt="Image"
                                            width={1200}
                                            height={800}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
