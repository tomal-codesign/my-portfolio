"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileImg from "../../../public/images/profile-img.jpg";
import SocialButton from "../common-component/social-button/SocialButton";

const MAX_SCROLL = 300; // changed to 300px
const MIN_WIDTH_PERCENT = 70;
const MAX_WIDTH_PERCENT = 100;

const Menu = () => {
    const pathname = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    const clampedScroll = Math.min(scrollY, MAX_SCROLL);

                    const widthPercent =
                        MAX_WIDTH_PERCENT -
                        ((MAX_WIDTH_PERCENT - MIN_WIDTH_PERCENT) * clampedScroll) / MAX_SCROLL;

                    const marginPercent = (100 - widthPercent) / 2;

                    if (headerRef.current) {
                        gsap.to(headerRef.current, {
                            width: `${widthPercent}%`,
                            marginLeft: `${marginPercent}%`,
                            marginRight: `${marginPercent}%`,
                            ease: "power3.out",
                            duration: 0.3,
                        });
                    }
                    ticking = false;
                });

                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });

        if (headerRef.current) {
            gsap.set(headerRef.current, {
                width: "100%",
                marginLeft: "0%",
                marginRight: "0%",
            });
        }

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div
            className="sticky top-0 z-[100] w-full py-2"
        >
            <div className="container px-4 mx-auto">
                <div ref={headerRef} className="bg-white/40 backdrop-blur-lg border border-white/80  rounded-full mx-auto">
                    <div className="grid grid-cols-5 items-center p-2">
                        {/* Profile image */}
                        <div className="col-span-1 flex justify-center items-center w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                className="object-cover w-full h-full"
                                src={ProfileImg}
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        {/* Nav */}
                        <div className="col-span-3 flex justify-center items-center">
                            <ul className="flex gap-2">
                                {[
                                    { href: "/", label: "Home" },
                                    { href: "/about", label: "About" },
                                    { href: "/services", label: "Services" },
                                    { href: "/portfolio", label: "Portfolio" },
                                ].map(({ href, label }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className={`px-5 py-2 rounded-full transition-all duration-200 ${pathname === href ? "bg-[#3E84DE] text-white" : ""
                                                }`}
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Theme + CTA */}
                        <div className="col-span-1 flex justify-end gap-3">
                            <SocialButton
                                icon="basil:whatsapp-outline"
                                iconColor="bg-[#60d669]"
                                hoverColor="hover:!bg-[#60d669] !bg-[#60d669] text-white"
                                text="Let's Talk"
                                link="tel:+880123456789"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
