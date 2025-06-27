import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import CardSwap, { Card } from '../common-component/card-swap/CardSwap'
import ServiceCard from './services-card/ServiceCard'

const Services = () => {
    return (
        <div>
            <div className='pt-8'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-2 gap-6">
                        <div className='custom-spotlight-card rounded-[46px] backdrop-blur-lg sticky top-[100px] left-0 h-[300px]  lg:pr-[100px]'>
                            <h1 className="text-[var(--normal-text)] text-[40px] font-extrabold">My Eyes to do</h1>
                            <p className="pt-1 text-[var(--normal-text)] text-md">An Addicted, Specialized, and Qualified to build UI/UX design for website  and mobile applications (Dealing with the front end part). I always work with the need to understand the benefits of the users, give them  something new to enjoy, and come close to new expectations in advance.</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            <ServiceCard />
                            <ServiceCard />
                            <ServiceCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services