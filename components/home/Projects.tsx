"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const projectSectors = [
    {
        title: "Commercial High-Rise",
        category: "Electrical & Panel Boards",
        img: "/images/mep.webp"
    },
    {
        title: "Luxury Hospitality",
        category: "Swimming Pools & Fountains",
        img: "/images/pool.webp"
    },
    {
        title: "Retail & Shopping Malls",
        category: "HVAC & Duct Installation",
        img: "/images/hvac.webp"
    },
    {
        title: "Corporate Hubs",
        category: "LED Screen & AV Integration",
        img: "/images/led.webp"
    },
    {
        title: "Industrial Complexes",
        category: "Cable Tray & UG Services",
        img: "/images/cable.jpeg"
    },
    {
        title: "Residential Estates",
        category: "Safety & MEP Excellence",
        img: "/images/engineering.webp"
    },
];

export default function Projects() {

    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return; // Null check added here

        const totalWidth = marquee.scrollWidth / 2;

        const animation = gsap.to(marquee, {
            x: -totalWidth,
            duration: 30,
            repeat: -1,
            ease: "none",
        });

        const handleMouseEnter = () => gsap.to(animation, { timeScale: 0.2, duration: 0.5 });
        const handleMouseLeave = () => gsap.to(animation, { timeScale: 1, duration: 0.5 });

        marquee.addEventListener("mouseenter", handleMouseEnter);
        marquee.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            animation.kill();
            marquee.removeEventListener("mouseenter", handleMouseEnter);
            marquee.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <section id="projects" className="bg-[#f5f5f5] py-12 md:py-12 overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 mb-16">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 mb-6 animate-pulse">
                            <div className="w-2 h-2 rounded-full bg-black/40" />
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/50 font-sans">Projects</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black leading-tight font-sans">
                            Our Featured Projects
                        </h2>
                    </div>
                    <p className="max-w-xs text-sm md:text-base text-black/40 leading-relaxed font-light font-sans">
                        Explore projects where thoughtful design meets reliable execution—each one tailored to meet real-world demands.
                    </p>
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                <div ref={marqueeRef} className="flex gap-6 md:gap-8 whitespace-nowrap w-max">
                    {[...projectSectors, ...projectSectors].map((project, index) => (
                        <div
                            key={index}
                            className="relative w-[320px] md:w-[480px] aspect-[4/3] rounded-3xl overflow-hidden group bg-gray-200 shrink-0"
                        >
                            <Image
                                src={project.img}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-90 hover:grayscale-0 hover:brightness-100"
                            />

                            <div className="absolute top-6 right-6">
                                <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/20">
                                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-black font-sans">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-10">
                                <h3 className="text-xl md:text-3xl font-bold text-white tracking-tight leading-none mb-2 font-sans">
                                    {project.title}
                                </h3>
                                <p className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-medium font-sans">
                                    Build Fix Excellence
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}