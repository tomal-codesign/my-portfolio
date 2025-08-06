"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileImg from "../../../public/images/profile-img.jpg";
import SocialButton from "../common-component/social-button/SocialButton";
import { Icon } from "@iconify/react/dist/iconify.js";

const MAX_SCROLL = 300; // changed to 300px
const MIN_WIDTH_PERCENT = 70;
const MAX_WIDTH_PERCENT = 100;

const Menu = () => {
    const pathname = usePathname();
    const headerRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

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

    const menuList = [
        { href: "/", label: "Home", icon: "fluent:home-16-regular" },
        { href: "/pages/about", label: "About", icon: "fluent:people-search-20-regular" },
        { href: "/pages/services", label: "Services", icon: "fluent:design-ideas-48-regular" },
        { href: "/pages/portfolio", label: "Portfolio", icon: "akar-icons:dashboard" },
    ]

    return (
        <div
            className="sticky top-0 z-[100] w-full pt-6"
        >
            <div className="container px-4 mx-auto">
                <div ref={windowWidth < 1080 ? null : headerRef} className="bg-white/40 backdrop-blur-lg border border-white/80  rounded-full mx-auto lg:w-auto w-fit">
                    <div className="flex justify-between items-center p-2">
                        {/* Profile image */}
                        <div className="col-span-1 lg:flex md:hidden hidden justify-center items-center w-12 h-12 rounded-full overflow-hidden">
                            <Image
                                className="object-cover w-full h-full"
                                src={ProfileImg}
                                width={80}
                                height={80}
                                alt="Image"
                            />
                        </div>

                        {/* Nav */}
                        <div className="col-span-3 flex justify-center items-center lg:w-auto md:w-auto md:ms-auto lg:m-0  w-full">
                            <ul className="flex justify-between gap-2 lg:w-auto md:w-auto w-full">
                                {menuList.map(({ href, label, icon }) => (
                                    <li key={href} className="flex align-center">
                                        <Link
                                            href={href}
                                            className={`lg:px-5 px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 ${pathname === href ? "bg-[#3E84DE] text-white" : "hover:bg-white/60"
                                                }`}
                                        >
                                            <Icon className="lg:hidden block" icon={icon} width="14" height="14" />
                                            <span className={`lg:block lg:text-[16px] text-[13px] hidden ${pathname === href ? "!block" : ""}`}>{label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Theme + CTA */}
                        <div className="col-span-1  justify-end gap-3 lg:flex md:hidden hidden">
                            <SocialButton
                                icon="basil:whatsapp-outline"
                                iconColor="bg-[#60d669]"
                                hoverColor="hover:!bg-[#60d669] !bg-[#60d669] text-white"
                                text="Let's Talk"
                                link="https://wa.me/8801737746673"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
