"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const statsData = [
    {
        value: "15+",
        label: "Years of engineering mastery",
        description: "Specializing in Panel board fabrication, Duct installation, and high-level Cable tray solutions since day one."
    },
    {
        value: "250",
        label: "Aquatic & Infrastructure projects",
        description: "Expertise in Swimming pool and Fountain work, including advanced Pump room services and UG services."
    },
    {
        value: "100+",
        label: "Advanced AV & LED Integrations",
        description: "Delivering state-of-the-art LED screen work and integrated Audio-Visual solutions for modern sectors."
    },
    {
        value: "100%",
        label: "Safety & Quality Compliance",
        description: "Uncompromising safety concerns and operational efficiency in every residential and industrial facility."
    }
];

export default function Stats() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Cards Fade-in
            gsap.from(".stat-card", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0a0a0a] pt-0 pb-24 md:pb-40  px-6 md:px-20 text-white overflow-hidden">
            <div className="container mx-auto">

                {/* Header Section */}
                <div className="text-center mb-20 md:mb-32">
                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8 animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 font-sans">Results</span>
                    </div>
                    <h2 className="text-4xl md:text-7xl font-medium tracking-tighter leading-tight font-sans">
                        Building with experience <br /> <span className="text-white/40 italic">you can measure</span>
                    </h2>
                </div>

                {/* Stats Grid - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-7xl mx-auto">
                    {statsData.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-card bg-[#161616] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-between min-h-[350px] md:min-h-[450px] border border-white/[0.03] hover:bg-[#1c1c1c] transition-colors duration-500 group"
                        >
                            {/* Big Number at Top Right */}
                            <div className="flex justify-end">
                                <h3 className="text-7xl md:text-9xl font-bold tracking-tighter text-white group-hover:text-gold transition-colors duration-500 font-sans">
                                    {stat.value}
                                </h3>
                            </div>

                            {/* Info at Bottom Left */}
                            <div className="max-w-md">
                                <h4 className="text-xl md:text-2xl font-bold mb-4 font-sans tracking-tight">
                                    {stat.label}
                                </h4>
                                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light font-sans">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}