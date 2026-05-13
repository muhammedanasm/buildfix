"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function ComingSoon() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Initial Hide
        gsap.set(".reveal-text", { y: 100, opacity: 0 });

        tl.to(".loading-bar", {
            width: "100%",
            duration: 2,
            ease: "expo.inOut",
        })
            .to(".loading-screen", {
                y: "-100%",
                duration: 1.2,
                ease: "expo.inOut",
                delay: 0.5
            })
            .to(".reveal-text", {
                y: 0,
                opacity: 1,
                duration: 1.5,
                stagger: 0.2,
                ease: "power4.out",
            }, "-=0.5")
            .from(".contact-item", {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.1,
                ease: "power3.out"
            }, "-=0.8");

    }, []);

    return (
        <div ref={containerRef} className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center text-white font-sans">

            {/* Loading Screen Overlay */}
            <div className="loading-screen fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center">
                <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
                    <div className="loading-bar absolute top-0 left-0 h-full w-0 bg-[#D4AF37]"></div>
                </div>
                <span className="mt-4 text-[10px] tracking-[0.5em] uppercase text-[#D4AF37] font-bold">Initializing</span>
            </div>

            {/* Background Animated Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37] opacity-[0.07] blur-[150px] rounded-full"></div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-6">
                <div className="mb-12 flex justify-center">
                    <Image src="/images/logo.svg" alt="Build Fix" width={180} height={60} className="object-contain" priority />
                </div>

                <div className="overflow-hidden mb-2">
                    <h2 className="reveal-text text-[10px] md:text-xs tracking-[0.6em] uppercase font-bold text-[#D4AF37]">
                        Engineering Excellence
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <h1 className="reveal-text text-5xl md:text-8xl font-bold tracking-tighter uppercase leading-none">
                        Something Great <br /> <span className="text-white/30 italic">is Building</span>
                    </h1>
                </div>

                <p className="reveal-text mt-8 text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                    We are crafting a new digital experience for Build Fix Contracting. <br className="hidden md:block" /> Stay tuned for our launch.
                </p>
            </div>

            {/* Professional Emails Footer */}
            <div className="hidden md:flex absolute bottom-12 left-0 w-full px-6 md:px-16 justify-between items-center gap-6 border-t border-white/10 pt-10">
                <div className="contact-item flex flex-col items-center md:items-start">
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">General Inquiry</span>
                    <a href="mailto:info@buildfix.org" className="text-xs hover:text-[#D4AF37] transition-colors">info@buildfix.org</a>
                </div>

                <div className="contact-item flex flex-col items-center md:items-start">
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Project Support</span>
                    <a href="mailto:project@buildfix.org" className="text-xs hover:text-[#D4AF37] transition-colors">project@buildfix.org</a>
                </div>

                <div className="contact-item flex flex-col items-center md:items-start">
                    <span className="text-[9px] uppercase tracking-widest text-[#D4AF37] font-bold mb-1">Sales & Estimates</span>
                    <a href="mailto:sales@buildfix.org" className="text-xs hover:text-[#D4AF37] transition-colors">sales@buildfix.org</a>
                </div>
            </div>

            {/* Grainy Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}