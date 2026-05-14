"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const loadingWords = [
    "INITIALIZING MEP SYSTEMS",
    "CALIBRATING POWER GRIDS",
    "SYNCING AV NETWORKS",
    "OPTIMIZING AQUATIC SYSTEMS",
    "ENGINEERING EXCELLENCE",
];

const companyName = "BUILD FIX";

export default function Preloader() {
    const [counter, setCounter] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const preloaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. ALWAYS-ON GOLD SCANNER (Subtle)
            gsap.fromTo(
                ".scanner-bar",
                { yPercent: -100 },
                {
                    yPercent: 800,
                    duration: 5,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                },
            );

            // 2. LOGO REVEAL
            tl.fromTo(
                ".char",
                { opacity: 0, y: 20, filter: "blur(10px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1.2,
                    stagger: 0.05,
                    ease: "power4.out",
                },
            );

            // 3. COUNTER LOGIC (0 to 100)
            const countObj = { val: 0 };
            gsap.to(countObj, {
                val: 100,
                duration: 4,
                ease: "power3.inOut",
                onUpdate: () => {
                    const currentCount = Math.floor(countObj.val);
                    setCounter(currentCount);
                    const nextWord = Math.floor((currentCount / 100) * (loadingWords.length - 1));
                    setWordIndex(nextWord);
                },
            });

            // 4. THE PREMIUM EXIT (Tiles scale down randomly)
            tl.to(".loader-content", {
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                delay: 0.5,
                ease: "power4.in",
            })
                .to(".tile", {
                    scale: 0,
                    opacity: 0,
                    duration: 1.2,
                    stagger: {
                        grid: [5, 10],
                        from: "center",
                        amount: 0.7,
                    },
                    ease: "expo.inOut",
                })
                .to(preloaderRef.current, {
                    display: "none",
                });
        }, preloaderRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={preloaderRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        >
            {/* 🧩 MOSAIC TILES GRID */}
            <div className="absolute inset-0 grid grid-cols-5 md:grid-cols-10 grid-rows-5 bg-transparent pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="tile w-full h-full bg-[#050505] border-[0.5px] border-white/5" />
                ))}
            </div>

            {/* 🎨 TECHNICAL GOLD SCANNER */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-10">
                <div className="scanner-bar absolute top-0 left-0 w-full h-[15vh] bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
            </div>

            {/* 🎯 CENTER CONTENT */}
            <div className="loader-content relative z-[100] flex flex-col items-center">
                {/* COMPANY NAME */}
                <div className="mb-14 flex items-center gap-1">
                    {companyName.split("").map((char, i) => (
                        <span
                            key={i}
                            className={`char inline-block text-3xl md:text-6xl font-black tracking-tighter text-white uppercase ${char === " " ? "mr-4" : ""}`}
                        >
                            {char}
                        </span>
                    ))}
                    <div className="char w-2 h-2 bg-[#D4AF37] rounded-full ml-1 self-end mb-2"></div>
                </div>

                {/* KINETIC COUNTER */}
                <div className="flex flex-col items-center gap-6">
                    <div className="overflow-hidden">
                        <span className="text-white text-8xl md:text-[160px] font-thin tracking-tighter block leading-none select-none italic font-sans">
                            {counter}
                        </span>
                    </div>

                    {/* STATUS TEXT */}
                    <div className="h-6 flex items-center justify-center min-w-[300px]">
                        <span className="text-[#D4AF37] text-[10px] font-mono font-bold uppercase tracking-[0.8em] transition-all duration-300">
                            {loadingWords[wordIndex]}
                        </span>
                    </div>

                    {/* PROGRESS LINE */}
                    <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden rounded-full mt-4">
                        <div
                            className="absolute top-0 left-0 h-full bg-[#D4AF37] transition-all duration-300 shadow-[0_0_10px_#D4AF37]"
                            style={{ width: `${counter}%` }}
                        ></div>
                    </div>
                </div>
            </div>

            {/* FOOTER DATA */}
            <div className="absolute bottom-10 left-10 z-[100] hidden md:flex flex-col gap-1 opacity-20 font-mono">
                <span className="text-[8px] text-white tracking-widest uppercase">RIYADH_KINGDOM_OF_SAUDI_ARABIA</span>
                <span className="text-[8px] text-white tracking-widest uppercase italic">BUILD_FIX_V1.0_ENGINEERING_CORE</span>
            </div>
        </div>
    );
}