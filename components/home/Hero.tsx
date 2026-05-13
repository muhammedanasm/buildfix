"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
    const textRef = useRef(null);
    const goldBlobRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Background Subtle Zoom Animation
        gsap.to(".hero-bg-img", {
            scale: 1.15,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Gold Blob Movement
        gsap.to(goldBlobRef.current, {
            x: 40,
            y: 30,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Text Reveal Animation
        tl.from(".hero-text", {
            y: 150,
            opacity: 0,
            duration: 1.8,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.8
        })
            .from(".hero-subtext", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power3.out"
            }, "-=1")
            .from(".hero-footer-line", {
                scaleX: 0,
                transformOrigin: "left",
                duration: 1.5,
                ease: "expo.inOut"
            }, "-=1")
            .from(".hero-footer-content", {
                opacity: 0,
                y: 20,
                duration: 1,
                stagger: 0.2
            }, "-=0.5");
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">

            {/* Optimized Background Image */}
            <div ref={bgRef} className="absolute inset-0 z-0 bg-[#0a0a0a]">
                <Image
                    src="/images/hero-bg.png" // ഫയൽ നെയിം കൃത്യമാണെന്ന് ഉറപ്പുവരുത്തുക
                    alt="Modern Architecture"
                    fill
                    priority
                    className="hero-bg-img object-cover opacity-100 transition-transform" // Opacity 40-ൽ നിന്ന് 80 ആക്കി
                />
                {/* ഇമേജ് കൂടുതൽ വ്യക്തമാകാൻ ഗ്രേഡിയന്റ് അല്പം ലൈറ്റ് ആക്കി */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/10" />
            </div>

            {/* GSAP Animated Gold Element */}
            <div
                ref={goldBlobRef}
                className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#D4AF37] opacity-15 blur-[140px] rounded-full pointer-events-none"
            />

            {/* Main Content */}
            <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full pt-20">
                <div ref={textRef} className="max-w-7xl">
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[13vw] md:text-[8.5vw] font-bold leading-[0.82] tracking-tighter uppercase text-white">
                            BUILD FIX
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[13vw] md:text-[8.5vw] font-bold leading-[0.82] tracking-tighter uppercase text-white">
                            CONTRACTING
                        </h1>
                    </div>
                    <div className="overflow-hidden">
                        <h1 className="hero-text text-[13vw] md:text-[8.5vw] font-bold leading-[0.82] tracking-tighter uppercase text-white/30">
                            COMPANY
                        </h1>
                    </div>

                    <p className="hero-subtext mt-10 text-[#D4AF37] font-semibold tracking-[0.4em] uppercase text-[10px] md:text-xs">
                        Built To Perform, Fixed to Last
                    </p>
                </div>
            </div>

            {/* Hero Footer Section */}
            <div className="absolute bottom-12 left-0 w-full px-6 md:px-16 z-20">
                <div className="hero-footer-line h-[1px] bg-white/10 w-full mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="hero-footer-content flex flex-col gap-1">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold">Project Sector</span>
                        <h3 className="text-white text-lg font-light tracking-wide italic">Engineering Solutions</h3>
                    </div>

                    <div className="hero-footer-content max-w-sm text-right">
                        <p className="text-[10px] leading-relaxed text-white/50 uppercase tracking-[0.15em]">
                            Specializing in integrated MEP, Audio-Visual, and civil works tailored to modern infrastructure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
}