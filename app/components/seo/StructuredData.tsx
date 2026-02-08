import React from "react";

const StructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Abdullah Soliman",
        jobTitle: "Front-End Developer",
        url: "https://bodyhc.github.io",
        sameAs: [
            "https://github.com/Bodyhc",
            "https://www.linkedin.com/in/abdullahsoliman/",
            "https://www.instagram.com/vbdullvh_m_solimvn/",
        ],
        email: "abdullahsliman920@gmail.com",
        description: "Front-End Developer and Full-Stack Enthusiast specializing in React, Next.js, TypeScript, and modern web technologies.",
        knowsAbout: [
            "Front-End Development",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Web Development",
            "Full-Stack Development",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

export default StructuredData;


