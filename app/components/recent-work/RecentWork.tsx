'use client';

import PortfolioCard from '../portfolio-card/PortfolioCard';
import data from '../../data/export.json';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const RecentWork = () => {

    return (
        <section>
            <div className="pb-8 pt-8 px-4 container mx-auto">
                <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">
                    Portfolio Highlights
                </h1>
                <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-md">
                    A collection of ideas brought to life through craft.
                </p>
                <div className="lg:pt-8 pt-4">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="mySwiper">
                        {data.shots
                            .slice(0, 5)
                            .reverse()
                            .map((item, index) => (
                                <SwiperSlide key={index}>
                                    <PortfolioCard title={item.title} img={item.images.four_x} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default RecentWork;
