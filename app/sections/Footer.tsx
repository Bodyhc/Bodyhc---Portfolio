import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import React from "react";

const Footer = () => {
    return (
        <motion.section
            className="relative h-auto w-full items-center justify-center bg-bg-dark border-t border-glass-border pt-8 pb-8 md:pt-12 md:pb-12 lg:pt-10 lg:pb-10"
            initial="initial"
            animate="animate">
            <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/5 to-transparent" />
            <motion.div className="relative z-10 mx-auto flex w-[90%] flex-col items-center justify-center gap-4 text-center text-[12px] text-text-primary sm:flex-row sm:justify-between sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
                <AnimatedBody 
                    text={"© ABDULLAH 2024"} 
                    className={"m-0 p-0 text-text-primary font-semibold"} 
                />
                <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-2">
                    <AnimatedBody text={"Design & Deployed by"} className={"m-0 p-0 text-text-primary opacity-90"} />
                    <Link
                        href="https://github.com/Bodyhc"
                        target="_blank"
                        aria-label="ABDULLAH SOLIMAN"
                        className="group">
                        <span className="bg-gradient-to-r from-accent-purple to-accent-pink bg-clip-text text-transparent font-bold underline underline-offset-2 hover:no-underline transition-all">
                            <AnimatedBody text={"ABDULLAH SOLIMAN"} className={"m-0 p-0"} />
                        </span>
                    </Link>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default Footer;
