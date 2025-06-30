'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PortfolioCard from '../portfolio-card/PortfolioCard';
import data from '../../data/export.json';

const RecentWork = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end start'],
    });

    const x = useTransform(scrollYProgress, [0, 1], ['1%', '-55%']);

    return (
        <section className="px-4">
            <div className="pb-8 pt-25 container mx-auto">
                <h1 className="text-[var(--normal-text)] text-[32px] md:text-[40px] font-extrabold">
                    Portfolio Highlights
                </h1>
                <p className="pt-1 text-[var(--normal-text)] text-sm md:text-md">
                    A collection of ideas brought to life through craft.
                </p>
            </div>
            <div ref={targetRef} className="relative h-[400vh] px-4">
                <div className="sticky top-24 h-screen flex items-center overflow-hidden">
                    <motion.div
                        style={{ x }}
                        className="flex gap-4 sm:gap-6 px-2"
                    >
                        {data.shots
                            .slice(0, 5)
                            .reverse()
                            .map((item, index) => (
                                <div
                                    key={index}
                                    className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px]"
                                >
                                    <PortfolioCard title={item.title} img={item.images.four_x} />
                                </div>
                            ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default RecentWork;
