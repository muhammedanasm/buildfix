"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const testimonials = [
    {
        text: "The way they handled our luxury swimming pool and fountain work was exceptional. From the advanced pump room setup to the final finish, everything was flawless.",
        name: "Rajesh Mehta",
        role: "Premium Homeowner",
        img: "https://i.pravatar.cc/150?u=rohan"
    },
    {
        text: "Build Fix team redefined our corporate space with state-of-the-art LED screen work and sound systems. Their technical expertise in AV integration is unmatched.",
        name: "Michael Chen",
        role: "Hospitality Consultant",
        img: "https://i.pravatar.cc/150?u=dan"
    },
    {
        text: "Their panel board fabrication and high-level cable tray installation were done with extreme precision. It's rare to find a team so committed to safety and standards.",
        name: "Ankit Sharma",
        role: "Director, Sharma Enterprises",
        img: "https://i.pravatar.cc/150?u=priya"
    },
    {
        text: "The MEP coordination was perfect. Their attention to detail in HVAC duct installation and UG services saved us significant costs and time during the construction.",
        name: "Sunil Kapoor",
        role: "Project Manager",
        img: "https://i.pravatar.cc/150?u=rohan"
    },
    {
        text: "Ahead of schedule and zero compromise on quality. Their expertise in specialized engineering and aquatic ecosystems is truly world-class.",
        name: "Priya Verma",
        role: "Real Estate Developer",
        img: "https://i.pravatar.cc/150?u=sarah"
    }
];

export default function Testimonials() {
    const marqueeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        const totalWidth = marquee.scrollWidth / 2;

        const animation = gsap.to(marquee, {
            x: -totalWidth,
            duration: 35,
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
        <section className="bg-[#f5f5f5] py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-6 md:px-20 mb-16">

                {/* Header Style from Screenshot */}
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/50 font-sans animate-pulse">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black leading-[1.1] font-sans">
                        What Our Clients Say <br /> About Working With Us
                    </h2>
                </div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden">
                <div ref={marqueeRef} className="flex gap-6 md:gap-8 whitespace-nowrap w-max">
                    {/* Double the list for infinite loop */}
                    {[...testimonials, ...testimonials].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[2.5rem] p-10 md:p-14 w-[350px] md:w-[480px] shrink-0 border border-black/[0.02] shadow-sm flex flex-col justify-between"
                        >
                            {/* Quote Icon from Screenshot */}
                            <div className="mb-10">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-gold opacity-80">
                                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V15C13.017 16.8533 12.385 18.5593 11.3325 19.9231L11.3323 19.9233C10.7412 21.2721 9.40051 22.1818 7.84271 21.979C6.28491 21.7762 5.00843 20.5236 4.79361 18.9684C4.5788 17.4132 5.48512 15.9334 6.94582 15.4542C7.30058 15.3378 7.64348 15.1953 7.97159 15.0278V9C7.97159 7.89543 7.07616 7 5.97159 7H2.017C0.912431 7 0.0170002 7.89543 0.0170002 9V14C0.0170002 15.1046 0.912431 16 2.017 16H3.017C3.017 18.5593 3.649 20.2653 4.7015 21.6291C5.2926 22.9779 6.6333 23.8876 8.1911 23.6848C9.7489 23.482 11.0254 22.2294 11.2402 20.6742C11.455 19.119 10.5487 17.6392 9.088 17.16" fill="currentColor" />
                                </svg>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-lg md:text-xl text-black/70 leading-relaxed font-normal whitespace-normal font-sans mb-12">
                                "{item.text}"
                            </p>

                            {/* Profile Part */}
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale bg-gray-100">
                                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-black font-bold tracking-tight font-sans">{item.name}</span>
                                    <span className="text-black/40 text-xs font-medium font-sans">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}