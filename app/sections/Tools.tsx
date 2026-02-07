import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import {
    SiGit,
    SiGithub,SiPostgresql,SiMysql,
    SiJavascript, SiNextdotjs, SiReact, SiTypescript,
    SiMongodb,
    SiNodedotjs,
    SiHtml5,
    SiCss3,
    SiVuedotjs,
    SiBootstrap,
    SiTailwindcss,
    SiPhp,
    SiPhpmyadmin,
    SiPython,
    SiXampp,
    SiSqlite,
    SiD3Dotjs,
    SiWeb3Dotjs,
    SiThreedotjs,
    SiBlender,
    SiSketch,
    SiFramer
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools.tsx";

const Tools = () => {
    return (
        <section
            className="relative z-10 w-full flex items-center justify-center overflow-hidden bg-bg-dark bg-cover bg-center pt-20 pb-32 md:pt-24 md:pb-40 lg:pt-28 lg:pb-48"
            id="tools"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/5 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-center text-[36px] font-bold leading-[1.1em] bg-gradient-to-r from-text-primary via-accent-blue to-text-primary bg-clip-text text-transparent md:text-[48px] lg:text-[64px]">
                        Tools I'm Using
                    </h2>
                    <p className="mt-4 text-center text-text-primary text-sm md:text-base lg:text-lg opacity-90">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="mx-auto w-[90%] flex flex-col items-center justify-center lg:max-w-[1200px] space-y-12 md:space-y-16">
                    {/* Frontend Section */}
                    <div className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 shadow-glass">
                        <AnimatedBody 
                            delay={0.2} 
                            text="Frontend" 
                            className="mb-8 text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl"
                        />
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-6">
                            <AnimatedTools className="contents" delay={0.2} stepSize={0.05} iconSize={50}>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple hover:scale-110 transition-all duration-300">
                                    <SiHtml5 className="text-text-primary group-hover:text-accent-purple transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue hover:scale-110 transition-all duration-300">
                                    <SiCss3 className="text-text-primary group-hover:text-accent-blue transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple hover:scale-110 transition-all duration-300">
                                    <SiBootstrap className="text-text-primary group-hover:text-accent-purple transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiTailwindcss className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink hover:scale-110 transition-all duration-300">
                                    <SiJavascript className="text-text-primary group-hover:text-accent-pink transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue hover:scale-110 transition-all duration-300">
                                    <SiTypescript className="text-text-primary group-hover:text-accent-blue transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiVuedotjs className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiReact className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple hover:scale-110 transition-all duration-300">
                                    <SiNextdotjs className="text-text-primary group-hover:text-accent-purple transition-colors"/>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    {/* Backend Section */}
                    <div className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 shadow-glass">
                        <AnimatedBody 
                            delay={0.3} 
                            text="Backend" 
                            className="mb-8 text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl"
                        />
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6">
                            <AnimatedTools className="contents" delay={0.3} stepSize={0.05} iconSize={50}>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple hover:scale-110 transition-all duration-300">
                                    <SiPhp className="text-text-primary group-hover:text-accent-purple transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue hover:scale-110 transition-all duration-300">
                                    <SiPython className="text-text-primary group-hover:text-accent-blue transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiPhpmyadmin className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink hover:scale-110 transition-all duration-300">
                                    <SiXampp className="text-text-primary group-hover:text-accent-pink transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue hover:scale-110 transition-all duration-300">
                                    <SiMysql className="text-text-primary group-hover:text-accent-blue transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiSqlite className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-green hover:scale-110 transition-all duration-300">
                                    <SiNodedotjs className="text-text-primary group-hover:text-green-400 transition-colors"/>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>

                    {/* Other Section */}
                    <div className="relative bg-glass backdrop-blur-xl border border-glass-border rounded-3xl p-8 md:p-12 shadow-glass">
                        <AnimatedBody 
                            delay={0.4} 
                            text="Other Tools" 
                            className="mb-8 text-2xl font-bold text-text-primary md:text-3xl lg:text-4xl"
                        />
                        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6">
                            <AnimatedTools className="contents" delay={0.4} stepSize={0.05} iconSize={50}>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-purple hover:scale-110 transition-all duration-300">
                                    <SiGithub className="text-text-primary group-hover:text-accent-purple transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink hover:scale-110 transition-all duration-300">
                                    <SiGit className="text-text-primary group-hover:text-accent-pink transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-yellow hover:scale-110 transition-all duration-300">
                                    <SiD3Dotjs className="text-text-primary group-hover:text-yellow-400 transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-blue hover:scale-110 transition-all duration-300">
                                    <SiWeb3Dotjs className="text-text-primary group-hover:text-accent-blue transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-cyan hover:scale-110 transition-all duration-300">
                                    <SiThreedotjs className="text-text-primary group-hover:text-accent-cyan transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-orange hover:scale-110 transition-all duration-300">
                                    <SiBlender className="text-text-primary group-hover:text-orange-400 transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-pink hover:scale-110 transition-all duration-300">
                                    <SiFramer className="text-text-primary group-hover:text-accent-pink transition-colors"/>
                                </div>
                                <div className="group relative p-4 bg-glass/50 backdrop-blur-md border border-glass-border rounded-xl hover:border-accent-yellow hover:scale-110 transition-all duration-300">
                                    <SiSketch className="text-text-primary group-hover:text-yellow-400 transition-colors"/>
                                </div>
                            </AnimatedTools>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
