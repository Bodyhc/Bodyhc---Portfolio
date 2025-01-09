import Link from "next/link";
import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate">
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}>
          <AnimatedTitle
            text={"Hi Bro I'm Abdullah Soliman . "}
            className={
              "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.001em]"}
          />
          <p className="mt-4 text-lg font-bold md:text-3xl">
            Front-End Developer | Full-Stack Enthusiast
          </p>
        </div>
        {/* <div className="mt-14 flex gap-10 text-[16px] font-bold  text-[#e4ded7] sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
          <Link
            href="https://github.com/Bodyhc"
            target="_blank"
            aria-label="View GitHub Profile">
            <AnimatedTitle
              text={"GITHUB"}
              className={
                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdullahsoliman/"
            target="_blank"
            aria-label="View linkedin Profile">
            <AnimatedTitle
              text={"LINKEDIN "}
              className={
                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link
            href="https://www.instagram.com/vbdullvh_m_solimvn/"
            target="_blank"
            aria-label="View instgram Profile">
            <AnimatedTitle
              text={"INSTGRAM "}
              className={
                "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
        </div> */}
      </div>
    </motion.section>
  );
};

export default Hero;
