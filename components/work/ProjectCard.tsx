import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import React from "react";
import {SiGithub} from "react-icons/si";
import {BsLink45Deg} from "react-icons/bs";
const ProjectCard = ({
    id,
    name,
    description,
    technologies,
    techNames,
    techLinks,
    github,
    demo,
    image,
    available,
}: ProjectProps) => {
    return (
        <motion.div
            className={`group relative z-10 h-[550px] w-full overflow-hidden rounded-3xl sm:h-[650px] md:h-[600px] lg:h-[550px]`}
            initial="initial"
            animate="animate"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
        >
            {/* Glassmorphism Container */}
            <div className="absolute inset-0 bg-glass backdrop-blur-xl border border-glass-border rounded-3xl overflow-hidden">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                    id % 3 === 0 ? 'from-accent-purple/20 via-accent-blue/10 to-transparent' :
                    id % 3 === 1 ? 'from-accent-pink/20 via-accent-purple/10 to-transparent' :
                    'from-accent-cyan/20 via-accent-blue/10 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Project Image */}
                <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={image}
                        alt={`${name} project screenshot`}
                    width={500}
                    height={500}
                        className={`absolute transition-transform duration-700 group-hover:scale-110 ${
                            id % 2 === 0 ? "right-0 bottom-0 w-[70%] sm:w-[75%] md:w-[65%] lg:w-[60%]" : "left-0 bottom-0 w-[70%] sm:w-[75%] md:w-[65%] lg:w-[60%]"
                        }`}
                        loading={id < 2 ? "eager" : "lazy"}
                        priority={id < 2}
                />
                    <div className={`absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/80 to-transparent ${
                        id % 2 === 0 ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                    }`} />
                </div>

                {/* Action Buttons */}
                <div
                    className={`absolute top-6 z-20 ${
                        id % 2 === 0 ? "left-6" : "right-6"
                    } flex items-center justify-center gap-3`}
                >
                    {available ? (
                        <>
                            <Link
                                href={github}
                                target="_blank"
                                aria-label="Open GitHub Repository"
                                className="group/btn relative w-12 h-12 md:w-14 md:h-14 bg-glass backdrop-blur-md border border-glass-border rounded-xl flex items-center justify-center text-text-primary hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300 hover:scale-110"
                                data-blobity
                                data-blobity-radius="15"
                                data-blobity-magnetic="false">
                                <SiGithub className="text-xl md:text-2xl group-hover/btn:text-accent-purple transition-colors"/>
                            </Link>
                            <Link
                                href={demo}
                                target="_blank"
                                aria-label="Open Live Demo"
                                className="group/btn relative w-12 h-12 md:w-14 md:h-14 bg-glass backdrop-blur-md border border-glass-border rounded-xl flex items-center justify-center text-text-primary hover:border-accent-blue hover:bg-accent-blue/10 transition-all duration-300 hover:scale-110"
                                data-blobity
                                data-blobity-radius="15"
                                data-blobity-magnetic="false">
                                <BsLink45Deg className="text-xl md:text-2xl group-hover/btn:text-accent-blue transition-colors"/>
                            </Link>
                        </>
                    ) : (
                        <div className="px-4 py-2 bg-glass backdrop-blur-md border border-glass-border rounded-xl">
                            <span className="text-sm text-text-muted">Coming Soon</span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div
                    className={`absolute z-10 ${
                        !(id % 2 === 0)
                            ? "right-0 top-32 mr-6 md:right-0 md:mr-8 lg:top-40 lg:mr-12"
                            : "left-6 top-32 md:left-8 lg:top-40 lg:left-12"
                    } max-w-[85%] md:max-w-[60%] lg:max-w-[50%]`}
                >
                    <AnimatedTitle
                        text={name}
                        className={
                            "text-[36px] leading-tight text-text-primary font-bold md:text-[42px] lg:text-[48px] mb-4"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={description}
                        className={
                            "mt-4 text-[15px] font-medium text-text-secondary leading-relaxed md:text-[16px]"
                        }
                    />
                    
                    {/* Technologies Grid */}
                    <div className="mt-8 flex flex-wrap gap-3">
                        {technologies.map((IconComponent, techId) => (
                                <Link
                                key={techId}
                                href={techLinks[techId]}
                                    target="_blank"
                                aria-label={`Learn more about ${techNames[techId]}`}
                                className="group/tech relative w-10 h-10 md:w-12 md:h-12 bg-glass backdrop-blur-md border border-glass-border rounded-lg flex items-center justify-center text-text-primary hover:border-accent-purple hover:text-accent-purple hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-purple"
                                title={techNames[techId]}
                                data-blobity-tooltip={techNames[techId]}
                                    data-blobity-magnetic="false"
                                >
                                <IconComponent className="text-lg md:text-xl"/>
                                </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
