import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";

const About = () => {
    return (
        <section
            className="relative z-10 w-full flex items-center justify-center overflow-hidden bg-bg-dark bg-cover bg-center pt-20 pb-32 md:pt-24 md:pb-40 lg:pt-28 lg:pb-48"
            id="about">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-center text-[36px] font-bold leading-[1.1em] bg-gradient-to-r from-text-primary via-accent-purple to-text-primary bg-clip-text text-transparent md:text-[48px] lg:text-[64px]">
                        About Me
                    </h2>
                    <p className="mt-4 text-center text-text-primary text-sm md:text-base lg:text-lg opacity-90">
                        Learn more about my journey and passion
                    </p>
                </div>

                <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1200px]">
                    <div className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 lg:p-16 shadow-glass w-full">
                        <div className="flex w-[100%] flex-col gap-6 text-[16px] font-medium leading-relaxed tracking-wide text-text-primary md:gap-8 md:text-[18px] lg:text-[20px]">
                        <AnimatedBody
                                text="I am Abdullah, and I am eager to learn more about front-end development and full-stack development. I have a good command of JavaScript, Next.js, React.js, HTML, and CSS. I believe in trying out new things and embracing challenges because having knowledge in various fields offers valuable experiences to share. I am particularly focused on improving my weaknesses."
                                className="text-text-primary"
                        />

                        <AnimatedBody
                            delay={0.1}
                                text="Whether I'm designing a sleek user interface or coding a complex application, I'm always striving to create something unique and innovative. I love experimenting with new technologies and staying up-to-date with the latest trends in the tech world."
                                className="text-text-primary"
                        />

                        <AnimatedBody
                            delay={0.2}
                                text="Right now, I'm working on some exciting projects that I can't wait to share with you. I'm always open to new opportunities and collaborations."
                                className="text-text-primary"
                            />
                        </div>

                        {/* Decorative gradient line */}
                        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
