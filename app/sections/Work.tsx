import ProjectGrid from "../components/work/ProjectGrid";
import React from "react";

const Work = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-bg-dark bg-cover bg-center py-20 md:py-24 lg:py-28"
            id="work"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />
            
            <div className="relative z-10 w-full flex flex-col items-center">
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-center text-[36px] font-bold leading-[1.1em] bg-gradient-to-r from-text-primary via-accent-purple to-text-primary bg-clip-text text-transparent md:text-[48px] lg:text-[64px]">
        Featured Work
            </h2>
                    <p className="mt-4 text-center text-text-primary text-sm md:text-base lg:text-lg opacity-90">
                        Check out some of my recent projects
                    </p>
                </div>

            <ProjectGrid />
            </div>
        </section>
    );
};

export default Work;
