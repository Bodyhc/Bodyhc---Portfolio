import Link from "next/link";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitleText";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";

const Contact = () => {
    return (
        <motion.section
            className="relative z-10 flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-20 md:min-h-[80vh] md:py-24 lg:min-h-[90vh] lg:pt-0 lg:pb-32"
            id="contact"
            initial="initial"
            animate="animate">
            <ContactBackground />
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-pink/10 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-center text-[36px] font-bold leading-[1.1em] bg-gradient-to-r from-text-primary via-accent-pink to-text-primary bg-clip-text text-transparent md:text-[48px] lg:text-[64px]">
                        Get In Touch
                    </h2>
                    <p className="mt-4 text-center text-text-primary text-sm md:text-base lg:text-lg opacity-90">
                        Let's build something amazing together
                    </p>
                </div>

                <div className="flex w-full flex-col items-center justify-center gap-12 sm:gap-16 md:flex-row md:items-start md:justify-between md:gap-8 lg:gap-12">
                    {/* Email Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-10 lg:p-12 shadow-glass max-w-md w-full"
                    >
                        <h3 className="text-xl font-bold text-text-primary mb-4 md:text-2xl">
                            Have a project in mind?
                        </h3>
                        <p className="text-text-primary mb-6 text-sm md:text-base opacity-90">
                            Got a question, proposal, project, or want to work together on something?
                        </p>
                        <Link
                            href="mailto:abdullahsliman920@gmail.com?subject=Lets%20work%20together!"
                            target="_blank"
                            aria-label="Send me an email"
                            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl text-text-primary font-semibold hover:shadow-glow-pink transition-all duration-300 hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <span>Send me an email</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-end"
                    >
                        <Link
                            href="https://github.com/Bodyhc"
                            target="_blank"
                            aria-label="View GitHub Profile"
                            className="group relative px-6 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple transition-all duration-300 hover:shadow-glow-purple hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <AnimatedTitle
                                text={"GITHUB"}
                                className={
                                    "text-[14px] font-bold text-text-primary group-hover:text-accent-purple transition-colors md:text-[16px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/abdullahsoliman/"
                            target="_blank"
                            aria-label="View linkedin Profile"
                            className="group relative px-6 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue transition-all duration-300 hover:shadow-glow-blue hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <AnimatedTitle
                                text={"LINKEDIN"}
                                className={
                                    "text-[14px] font-bold text-text-primary group-hover:text-accent-blue transition-colors md:text-[16px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://www.instagram.com/vbdullvh_m_solimvn/"
                            target="_blank"
                            aria-label="View instgram Profile"
                            className="group relative px-6 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink transition-all duration-300 hover:shadow-glow-pink hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <AnimatedTitle
                                text={"INSTAGRAM"}
                                className={
                                    "text-[14px] font-bold text-text-primary group-hover:text-accent-pink transition-colors md:text-[16px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://wa.me/201029946946"
                            target="_blank"
                            aria-label="Message me on WhatsApp"
                            className="group relative px-6 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-green-500 transition-all duration-300 hover:shadow-glow-green hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <AnimatedTitle
                                text={"WHATSAPP"}
                                className={
                                    "text-[14px] font-bold text-text-primary group-hover:text-green-500 transition-colors md:text-[16px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                        <Link
                            href="https://uiverse.io/profile/Bodyhc"
                            target="_blank"
                            aria-label="View UiVerse Profile"
                            className="group relative px-6 py-4 bg-glass backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan transition-all duration-300 hover:shadow-glow-blue hover:scale-105"
                            data-blobity
                            data-blobity-radius="15"
                            data-blobity-magnetic="false">
                            <AnimatedTitle
                                text={"UIVERSE"}
                                className={
                                    "text-[14px] font-bold text-text-primary group-hover:text-accent-cyan transition-colors md:text-[16px]"
                                }
                                wordSpace={"mr-[0.25em]"}
                                charSpace={"mr-[0.01em]"}
                            />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
