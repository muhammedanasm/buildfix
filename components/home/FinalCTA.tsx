"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
    const whatsappLink = "https://wa.me/966544005480?text=Hello, I would like to discuss a project with Build Fix.";

    return (
        <section className="relative w-full h-[600px] md:h-[600px] overflow-hidden bg-white flex items-center justify-center">


            {/* 1. Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/finalcta.webp"
                    alt="Build Fix Projects"
                    fill
                    className="object-cover brightness-[0.8]"
                    priority
                />
            </div>

            {/* 2. THE PREMIUM GLASSMORPISM OVERLAY */}

            <div
                className="absolute inset-x-0 bottom-0 h-[50%] z-20 backdrop-blur-[5px] border-t border-white/10"
                style={{

                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(0,0,0,0.5))',

                    WebkitMaskImage: 'linear-gradient(to top, black 70%, transparent 100%)',
                    maskImage: 'linear-gradient(to top, black 70%, transparent 100%)'
                }}
            />

            {/* 3. Deep Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black to-transparent z-30" />


            {/* 3. MINIMAL BLUR EFFECT */}
            <div
                className="absolute inset-x-0 bottom-0 h-[30%] z-20 backdrop-blur-[10px]"
                style={{
                    maskImage: 'linear-gradient(to top, black, transparent)',
                    WebkitMaskImage: 'linear-gradient(to top, black, transparent)'
                }}
            />

            {/* 4. CONTENT AREA */}
            <div className="relative z-30 px-6 text-center max-w-7xl mx-auto flex flex-col items-center pt-10">


                <h2 className="text-2xl md:text-[4vw] font-medium tracking-tight text-white max-w-5xl leading-[1.1] mb-12 font-sans">
                    Explore how <span className="font-bold text-gold font-tenor lowercase">Build Fix</span> can bring <br />  your next development to life.
                </h2>


                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white text-black px-12 py-5 rounded-2xl flex items-center gap-5 shadow-2xl hover:bg-gold hover:text-black transition-all duration-700"
                >
                    <span className="text-[11px] uppercase tracking-[0.4em] font-black font-sans">
                        Get Started
                    </span>
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                </a>
            </div>

            {/* 5. Subtle Noise Texture for Premium Finish */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-40" />
        </section>
    );
}