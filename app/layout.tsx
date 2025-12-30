import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const syne = Inter({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    icons: "logo.png",
    title: "Bodyhc - Abdullah",
    description:
        "Bodyhc - Abdullah is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
    generator: "Next.js",
    monetag:"a72bb39e26c9c8a1e18487e857cdd7d7",
    applicationName: "Portfolio template",
    keywords: [
        "Portfolio template",
        "React",
        "developer",
        "frontend",
        "nextjs",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "Bodyhc - Abdullah",
        description:
            "portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        images: [
            {
                url: "./public/logo.png",
                width: 1200,
                height: 630,
                alt: "Portfolio template - Bodyhc - Abdullah",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Portfolio template - Bodyhc - Abdullah",
        description:
            "Portfolio template - Bodyhc - Abdullah is a portfolio template built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        creator: "@Abdullah Soliman",
        creatorId: "0000000000",
        images: ["./public/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}>
                {children}
            </body>
        </html>
    );
}
