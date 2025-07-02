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
        <section className="px-4">
            <div className="pb-22 pt-8 container mx-auto">
                <h1 className="text-[var(--normal-text)] text-[32px] md:text-[40px] font-extrabold">
                    Portfolio Highlights
                </h1>
                <p className="pt-1 text-[var(--normal-text)] text-md">
                    A collection of ideas brought to life through craft.
                </p>
                <div className="pt-8">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
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
                    {/* {data.shots
                        .slice(0, 5)
                        .reverse()
                        .map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]"
                            >
                                <PortfolioCard title={item.title} img={item.images.four_x} />
                            </div>
                        ))} */}
                </div>
            </div>
        </section>
    );
};

export default RecentWork;
