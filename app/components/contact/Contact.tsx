"use client";
import { Icon } from "@iconify/react/dist/iconify.js"
import Image from "next/image"
import contactImg from "../../../public/images/contact-img.png"
import SocialButton from "../common-component/social-button/SocialButton"
import { useState } from "react";

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "main.tomal.m@gmail.com";

    const handleCopy = async (e: React.MouseEvent) => {
        e.preventDefault();
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
    };
    return (
        <div className="pt-16">
            <div className="container mx-auto px-4">
                <div data-aos="fade-up" className="custom-spotlight-card bg-[#3E84DE] p-[30px] lg:p-[40px] p-4 rounded-[46px] backdrop-blur-lg flex justify-between items-center">
                    <div className='w-full lg:w-[50%]'>
                        <h2 className="text-[#fff] text-[20px] lg:text-[40px] font-extrabold">Just one step away from connecting with me—anytime, anywhere</h2>
                        <p className="pt-4 text-[#fff] text-sm lg:text-base xl:text-base md:text-base">Have a creative idea you want to bring to life with standout design? I'm here to understand your vision and craft something meaningful and visually impactful. Let’s collaborate and make your project a success with creativity, precision, and trust.</p>
                        <div className="pt-4 pb-4 text-[#fff] text-md font-bold flex flex-col lg:flex-row gap-1">Message sent via email:
                            <div className="border border-white/20 font-normal rounded-md pl-3 pr-2 py-1 inline-flex items-center gap-3 mt-2 w-fit">
                                <a href={`mailto:${email}`} className="text-white">
                                    {email}
                                </a>
                                <button onClick={handleCopy} className="text-white cursor-pointer">
                                    {copied ? (
                                        <Icon
                                            icon="line-md:check-all"
                                            width="18"
                                            height="18"
                                        />
                                    ) : (
                                        <Icon
                                            icon="ic:baseline-content-copy"
                                            width="18"
                                            height="18"
                                        />)}
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <SocialButton icon='basil:whatsapp-outline' iconColor="bg-[#60d669]" hoverColor='hover:!bg-[#60d669] !bg-[#fff]/30 text-white' text='Connect with WhatsApp' link='tel:+880123456789' />
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <Image src={contactImg} alt="contact" width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact