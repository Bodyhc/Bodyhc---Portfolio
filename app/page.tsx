"use client";
import React from "react";
import { useEffectOnce } from "usehooks-ts";
import useBlobity from "./components/blobity/useBlobity";
import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
import ScrollToTop from "./components/other/ScrollToTop";
import ErrorBoundary from "./components/other/ErrorBoundary";
export default function Home() {
    useEffectOnce(() => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    });

    useBlobity({
        focusableElementsOffsetX: 4,
        focusableElementsOffsetY: 4,
        color: "#ffffff",
        dotColor: "#ffffff",
        invert: true,
        focusableElements:
            "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
        font: "'Inter', sans-serif",
        fontSize: 16,
        fontWeight: 900,
        opacity: 1.0,
        fontColor: "#ffffff",
        zIndex: 35,
        size: 50,
        radius: 5,
        magnetic: false,
    });

    return (
        <>
            <header />
            <Blur />
            <Color />
            <NavBar />
            <ErrorBoundary>
                <main className="flex flex-col items-center justify-center bg-bg-dark">
                    <a
                        href="#main-content"
                        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-glass focus:backdrop-blur-md focus:border focus:border-glass-border focus:rounded-xl focus:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-purple"
                    >
                        Skip to main content
                    </a>
                    <div id="main-content">
                <Hero />
                <About />
                <Work />
                <Tools />
                <Contact />
                <Footer />
                    </div>
                    <ScrollToTop />
            </main>
            </ErrorBoundary>
        </>
    );
}
