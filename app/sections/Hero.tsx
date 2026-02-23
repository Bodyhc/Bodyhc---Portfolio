import Link from "next/link";
import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitleText";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center overflow-hidden"
      id="home"
      initial="initial"
      animate="animate">
      <HeroBackground />
      
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0 relative z-10">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 px-6 py-2 bg-glass backdrop-blur-md border border-glass-border rounded-full"
          >
            <p className="text-sm text-text-primary font-medium">Welcome to my Portfolio</p>
          </motion.div>
          
          <AnimatedTitle
            text={"Hi, I'm Abdullah Soliman"}
            className={
              "mb-4 text-center text-[40px] font-bold leading-[1.1em] tracking-tight text-text-primary sm:text-[50px] md:mb-6 md:text-[70px] lg:text-[90px]"
            }
            wordSpace={"mr-[8px]"}
            charSpace={"mr-[0.001em]"}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <p className="mt-4 text-xl font-semibold text-text-primary md:text-2xl lg:text-3xl opacity-90">
              <span className="bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan bg-clip-text text-transparent">
                Front-End Developer
              </span>
              {" "}|{" "}
              <span className="bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue bg-clip-text text-transparent">
                Full-Stack Enthusiast
              </span>
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-6 justify-center items-center sm:gap-8 md:gap-10 lg:gap-12"
        >
          <Link
            href="https://github.com/Bodyhc"
            target="_blank"
            aria-label="View GitHub Profile"
            className="group relative px-6 py-3 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple transition-all duration-300 hover:shadow-glow-purple"
            data-blobity
            data-blobity-radius="15"
            data-blobity-magnetic="false">
            <AnimatedTitle
              text={"GITHUB"}
              className={
                "text-[14px] font-bold text-text-primary group-hover:text-accent-purple transition-colors sm:text-[16px] md:text-[18px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdullahsoliman/"
            target="_blank"
            aria-label="View linkedin Profile"
            className="group relative px-6 py-3 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue transition-all duration-300 hover:shadow-glow-blue"
            data-blobity
            data-blobity-radius="15"
            data-blobity-magnetic="false">
            <AnimatedTitle
              text={"LINKEDIN"}
              className={
                "text-[14px] font-bold text-text-primary group-hover:text-accent-blue transition-colors sm:text-[16px] md:text-[18px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link
            href="https://www.instagram.com/vbdullvh_m_solimvn/"
            target="_blank"
            aria-label="View instgram Profile"
            className="group relative px-6 py-3 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink transition-all duration-300 hover:shadow-glow-pink"
            data-blobity
            data-blobity-radius="15"
            data-blobity-magnetic="false">
            <AnimatedTitle
              text={"INSTAGRAM"}
              className={
                "text-[14px] font-bold text-text-primary group-hover:text-accent-pink transition-colors sm:text-[16px] md:text-[18px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
          <Link
            href="https://wa.me/201029946946"
            target="_blank"
            aria-label="Message me on WhatsApp"
            className="group relative px-6 py-3 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-green-500 transition-all duration-300 hover:shadow-glow-green"
            data-blobity
            data-blobity-radius="15"
            data-blobity-magnetic="false">
            <AnimatedTitle
              text={"WHATSAPP"}
              className={
                "text-[14px] font-bold text-text-primary group-hover:text-green-500 transition-colors sm:text-[16px] md:text-[18px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
