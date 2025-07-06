"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SocialButton from '../common-component/social-button/SocialButton'
import ProfileImg from "../../../public/images/profile-img.jpg"
import { usePathname } from 'next/navigation'


const Menu = () => {
    const pathname = usePathname()

    return (
        <div className='py-5'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-5 items-center p-2 custom-spotlight-card bg-white/40 border border-[#fff]/80 rounded-full backdrop-blur-lg'>
                    <div className='col-span-1 flex justify-center items-center w-12 h-12 rounded-full overflow-hidden'>
                        <Image className='object-cover w-full h-full' src={ProfileImg} width={80} height={80} alt="Image" />
                    </div>
                    <div className='col-span-3 flex justify-center items-center'>
                        <ul className='m-0 p-0 flex gap-2'>
                            <li className='m-0'>
                                <Link className={`${pathname === '/' ? 'bg-[#3E84DE] text-white' : ''} m-0 px-7 py-3 rounded-full`} href="/">Home</Link>
                            </li>
                            <li className='m-0'>
                                <Link className={`${pathname === '/about' ? 'bg-[#3E84DE] text-white' : ''} m-0 px-7 py-3 rounded-full`} href="/about">About</Link>
                            </li>
                            <li className='m-0' >
                                <Link className={`${pathname === '/services' ? 'bg-[#3E84DE] text-white' : ''} m-0 px-7 py-3 rounded-full`} href="/services">Services</Link>
                            </li>
                            <li className='m-0'>
                                <Link className={`${pathname === '/portfolio' ? 'bg-[#3E84DE] text-white' : ''} m-0 px-7 py-3 rounded-full`} href="/portfolio">Portfolio</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1 flex justify-end gap-3'>
                        <div className='flex justify-center items-center'>
                            <label className="switch">
                                <input id="input" type="checkbox" />
                                <div className="slider round">
                                    <div className="sun-moon">
                                        <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>

                                        <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                        <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50"></circle>
                                        </svg>
                                    </div>
                                    <div className="stars">
                                        <svg id="star-1" className="star" viewBox="0 0 20 20">
                                            <path
                                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                                            ></path>
                                        </svg>
                                        <svg id="star-2" className="star" viewBox="0 0 20 20">
                                            <path
                                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                                            ></path>
                                        </svg>
                                        <svg id="star-3" className="star" viewBox="0 0 20 20">
                                            <path
                                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                                            ></path>
                                        </svg>
                                        <svg id="star-4" className="star" viewBox="0 0 20 20">
                                            <path
                                                d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <SocialButton icon='basil:whatsapp-outline' iconColor="bg-[#60d669]" hoverColor='hover:!bg-[#60d669] !bg-[#60d669] text-white' text="Let's Talk" link='tel:+880123456789' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu