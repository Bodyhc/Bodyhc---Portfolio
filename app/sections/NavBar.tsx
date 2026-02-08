"use client";
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        const element = document.getElementById(href);
        if (element) {
            const offset = 80; // Offset for fixed navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
                top: offsetPosition,
            left: 0,
            behavior: "smooth",
        });
        }
    };

    return (
        <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-2xl px-2 py-2 shadow-glass">
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                    <Link
                        href="#home"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Home Section"
                        className="group relative px-4 py-2 rounded-xl text-[12px] font-semibold text-text-primary hover:text-accent-purple transition-all duration-300 sm:px-5 sm:text-[13px] md:px-6 md:text-[14px]"
                    >
                        <span className="relative z-10">HOME</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        href="#about"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to About Section"
                        className="group relative px-4 py-2 rounded-xl text-[12px] font-semibold text-text-primary hover:text-accent-purple transition-all duration-300 sm:px-5 sm:text-[13px] md:px-6 md:text-[14px]"
                    >
                        <span className="relative z-10">ABOUT</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-cyan/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        href="#work"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Work Section"
                        className="group relative px-4 py-2 rounded-xl text-[12px] font-semibold text-text-primary hover:text-accent-purple transition-all duration-300 sm:px-5 sm:text-[13px] md:px-6 md:text-[14px]"
                    >
                        <span className="relative z-10">WORK</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-pink/20 to-accent-purple/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        href="#tools"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Tools Section"
                        className="group relative px-4 py-2 rounded-xl text-[12px] font-semibold text-text-primary hover:text-accent-purple transition-all duration-300 sm:px-5 sm:text-[13px] md:px-6 md:text-[14px]"
                    >
                        <span className="relative z-10">TOOLS</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-cyan/20 to-accent-blue/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    <Link
                        href="#contact"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Contact Section"
                        className="group relative px-4 py-2 rounded-xl text-[12px] font-semibold text-text-primary hover:text-accent-purple transition-all duration-300 sm:px-5 sm:text-[13px] md:px-6 md:text-[14px]"
                    >
                        <span className="relative z-10">CONTACT</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
