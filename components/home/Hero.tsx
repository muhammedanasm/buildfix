"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Video subtle zoom
            gsap.to(videoRef.current, {
                scale: 1.1,
                duration: 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

            // Text Masking Reveal
            tl.from(".hero-line", {
                y: "100%",
                opacity: 0,
                duration: 1.5,
                stagger: 0.15,
                ease: "expo.out",
                delay: 0.5
            })
                .from(".hero-desc", {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: "power3.out"
                }, "-=0.8")
                .from(".hero-btns", {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out"
                }, "-=0.6")
                .from(".hero-footer-item", {
                    opacity: 0,
                    y: 20,
                    duration: 1,
                    stagger: 0.2
                }, "-=0.5");
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center">

            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-60"
                >
                    <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                {/* Dark Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60" />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full pt-20">
                <div className="max-w-6xl">
                    <div className="overflow-hidden">
                        <span className="hero-line block text-[#F5F5F0] animate-pulse text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold mb-6">
                            Engineering Excellence
                        </span>
                    </div>

                    <div className="space-y-2">
                        <div className="overflow-hidden">
                            <h1 className="hero-line text-[11vw] md:text-[7vw] font-bold leading-[0.85] tracking-tighter uppercase text-white">
                                BUILD FIX
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="hero-line text-[11vw] md:text-[7vw] font-bold leading-[0.85] tracking-tighter uppercase text-white">
                                CONTRACTING
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="hero-line text-[11vw] md:text-[7vw] font-light leading-[0.85] tracking-tighter uppercase text-white/30 italic lowercase">
                                Company.
                            </h1>
                        </div>
                    </div>

                    <p className="hero-desc mt-10 text-white/60 text-sm md:text-lg max-w-2xl leading-relaxed font-light">
                        From concept to completion, we deliver high-quality <span className="text-white font-medium">integrated MEP, specialized Audio-Visual, and aquatic infrastructure</span> solutions tailored to the evolving demands of modern infrastructure.
                    </p>

                    {/* CTA Buttons - Framer Style */}
                    <div className="hero-btns mt-12 flex flex-wrap gap-6">

                        {/* Consult Our Experts - WhatsApp Redirect */}
                        <a
                            href="https://wa.me/966544005480"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-10 py-4 bg-white text-black text-[10px] uppercase tracking-[0.3em] font-bold rounded-full overflow-hidden transition-all duration-500 flex items-center"
                        >
                            {/* Text must be relative and z-10 to stay on top of the sliding background */}
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-sans">
                                Consult Our Experts
                            </span>

                            {/* Sliding Background Layer */}
                            <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </a>

                        {/* View Our Divisions - Section Navigation */}
                        <a
                            href="#services"
                            className="group relative px-10 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-bold rounded-full overflow-hidden transition-all duration-500 flex items-center"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-sans">
                                View Our Divisions
                            </span>

                            {/* Sliding Background Layer */}
                            <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </a>

                    </div>
                </div>
            </div>

            {/* Hero Footer Info Section */}
            <div className="absolute bottom-10 left-0 w-full px-6 md:px-16 hidden md:flex justify-between items-end gap-10">
                <div className="hero-footer-item flex flex-col gap-1">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold">Built to Perform</span>
                    <h3 className="text-white text-sm font-light tracking-widest uppercase">Fixed to Last</h3>
                </div>

                <div className="hero-footer-item h-[1px] bg-white/10 flex-grow mx-10 mb-2"></div>

                <div className="hero-footer-item max-w-xs text-right">
                    <p className="text-[9px] leading-relaxed text-white/40 uppercase tracking-[0.2em] font-medium">
                        Specializing in residential, commercial, and hospitality infrastructure projects.
                    </p>
                </div>
            </div>

            {/* Premium Noise Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}