"use client";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-[#f5f5f5] py-10 md:py-22 w-full">
            <div className="w-full px-[20px]">

                {/* The Main Container - No heavy borders or shadows */}
                <div className="relative w-full h-[600px] md:h-[750px] rounded-[6px] overflow-hidden group">

                    {/* Background Image - Fill the card */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/cta.webp"
                            alt="Engineering"
                            fill
                            className="object-cover transition-transform duration-[5s] group-hover:scale-105"
                        />

                        {/* The "Melt" Effect: Gradient that blends image into a soft bottom area */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* THE BLUR OVERLAY: Only at the very bottom, blending seamlessly */}
                        <div className="absolute bottom-0 left-0 w-full h-[40%] backdrop-blur-md bg-black/10 mask-gradient"
                            style={{ maskImage: 'linear-gradient(to top, black, transparent)' }} />
                    </div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full flex flex-col justify-between p-10 md:p-20 text-white font-sans">

                        {/* Top Part: Clean Overlapping Icons (Removed white borders) */}
                        <div className="flex items-center -space-x-3">
                            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg z-20">
                                <Image src="/images/man.avif" alt="Expert" fill className="object-cover" />
                            </div>
                            <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg z-10 bg-gold flex items-center justify-center">
                                <Image
                                    src="/images/man2.webp"
                                    alt="Icon"
                                    fill
                                    className=""
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: "inherit",
                                        objectPosition: "center",
                                        objectFit: "fill",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Middle Part: Minimalist Quote */}
                        <div className="max-w-4xl">
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8">
                                "Precision in <span className="text-gold font-tenor">Electrical</span>, luxury in <span className="text-gold  font-tenor">Swimming Pools</span>, and comfort in <span className="text-gold  font-tenor">HVAC</span>."
                            </h2>
                            <div className="flex flex-col gap-1 border-l border-gold/50 pl-6">
                                <p className="text-lg font-bold tracking-tight">Expert Engineering Team</p>
                                <p className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">Build Fix Contracting Co.</p>
                            </div>
                        </div>

                        {/* Bottom Part: Clean Floating Buttons */}
                        <div className="flex flex-col md:flex-row items-center justify-end gap-10">

                            {/* 1. Speak with us  */}
                            <a href="tel:+966544005480" className="flex items-center gap-3 group/btn cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center group-hover/btn:bg-gold transition-all duration-500">
                                    <Phone size={18} className="group-hover/btn:text-black transition-colors" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black group-hover/btn:text-gold transition-colors font-sans">
                                    Speak with us
                                </span>
                            </a>

                            {/* 2. Get Started  */}
                            <a
                                href="https://wa.me/966544005480"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/gs relative px-10 py-5 bg-white text-black text-[10px] uppercase tracking-[0.4em] font-black rounded-2xl flex items-center gap-4 overflow-hidden transition-all duration-500 shadow-xl cursor-pointer"
                            >
                                {/* Text & Icon - Stay on top */}
                                <span className="relative z-10 flex items-center gap-4 group-hover/gs:text-black transition-colors duration-500 font-sans">
                                    Get Started <ArrowRight size={14} className="group-hover/gs:translate-x-1 transition-transform duration-500" />
                                </span>

                                {/* The Gold Fill Layer (Bottom to Top) */}
                                <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover/gs:translate-y-0 transition-transform duration-500 ease-out" />
                            </a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}