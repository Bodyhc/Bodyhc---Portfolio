"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className="fixed bottom-24 right-6 z-50 p-4 bg-glass backdrop-blur-md border border-glass-border rounded-full text-text-primary hover:border-accent-purple hover:bg-accent-purple/10 transition-all duration-300 hover:scale-110 shadow-glass md:right-8 lg:right-12"
                    data-blobity
                    data-blobity-radius="25"
                    data-blobity-magnetic="false"
                >
                    <BsArrowUp className="text-lg md:text-xl" />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;

