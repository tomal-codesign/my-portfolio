import React from 'react'
import { portfolioData } from '../../data/portfolioData'
import PortfolioCard from '@/app/components/portfolio-card/PortfolioCard'

const page = () => {
  return (
    <section>
      <div data-aos="fade-up" className="pt-10 px-4 container mx-auto">
        <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">
          Portfolio Highlights
        </h1>
        <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base">
          A collection of ideas brought to life through craft.
        </p>
      </div>
      <div className='pt-10 container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {portfolioData.map((item, index) => {
            return (
              <a href={item.link} key={index} target="_blank" rel="noopener noreferrer">
                <PortfolioCard title={item.title} img={item.images} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default page