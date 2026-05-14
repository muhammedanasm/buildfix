"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function MissionVision() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text reveal animation
            gsap.from(".reveal-text", {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
            });

            // Middle line growth
            gsap.from(".divider-line", {
                height: 0,
                duration: 1.5,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-[#0a0a0a] py-32 md:py-48 px-6 md:px-20 text-white overflow-hidden relative">

            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold opacity-[0.03] blur-[150px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 md:gap-20 items-start">

                    {/* MISSION SECTION */}
                    <div className="lg:col-span-5">
                        <div className="mb-10">
                            <span className="reveal-text block text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4 animate-pulse ">Our Purpose</span>
                            <h2 className="reveal-text text-5xl md:text-7xl font-medium tracking-tighter font-sans uppercase">
                                Mission
                            </h2>
                        </div>
                        <p className="reveal-text text-lg md:text-xl text-white/60 leading-relaxed font-light font-sans max-w-xl">
                            To become a globally recognized engineering partner, delivering world-class
                            <span className="text-white font-medium italic mx-1">integrated MEP, specialized Audio-Visual, and aquatic solutions</span>
                            while setting new benchmarks in technical precision, innovation, and trust.
                        </p>
                    </div>

                    {/* VERTICAL DIVIDER (Visible on Desktop) */}
                    <div className="hidden lg:flex lg:col-span-1 justify-center py-10">
                        <div className="divider-line w-[1px] h-[350px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                    </div>

                    {/* VISION SECTION */}
                    <div className="lg:col-span-5 lg:mt-32">
                        <div className="mb-10">
                            <span className="reveal-text block text-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-4">Our Aspiration</span>
                            <h2 className="reveal-text text-5xl md:text-7xl font-medium tracking-tighter font-sans uppercase">
                                Vision
                            </h2>
                        </div>
                        <p className="reveal-text text-lg md:text-xl text-white/60 leading-relaxed font-light font-sans max-w-xl">
                            To redefine modern infrastructure through high-quality engineering and innovation—building enduring partnerships by ensuring
                            <span className="text-white font-medium italic mx-1">peak performance, operational reliability, and unmatched excellence</span>
                            in every system we build.
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom watermark text */}
            <div className="absolute bottom-10 left-10 opacity-[0.02] pointer-events-none select-none">
                <span className="text-[15vw] font-black uppercase tracking-tighter">Integrity</span>
            </div>
        </section>
    );
}