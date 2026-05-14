"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Color Scrub Animation

            gsap.from(".about-word", {
                color: "#a1a1a1",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".about-text-container",
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                },
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);


    const sentence1 = "Build Fix Contracting is a precision-driven engineering firm mastering the complexities of integrated MEP, specialized Audio-Visual, and aquatic ecosystems.";
    const sentence2 = "We redefine modern infrastructure through sophisticated power systems and technical innovation.";
    const sentence3 = "Guided by a commitment to operational excellence, we ensure that every project is built to perform and fixed to last.";
    const fullText = `${sentence1} ${sentence2} ${sentence3}`;

    return (
        <section id="about" ref={sectionRef} className="bg-[#f5f5f5] py-22 md:py-32 px-6 md:px-20">
            <div className="container mx-auto max-w-6xl">

                <div className="about-text-container">
                    <h2 className="text-3xl md:text-3xl lg:text-3xl font-medium leading-[1.15] tracking-tight text-black">
                        {fullText.split(" ").map((word, i) => (
                            <span key={i} className="about-word inline-block mr-[0.25em]">
                                {word}
                            </span>
                        ))}
                    </h2>
                </div>

                <div className="mt-10">
                    <button className="px-7 py-3 bg-black/5 border border-black/5 rounded-lg text-[10px] uppercase tracking-[0.2em] font-bold text-black hover:bg-black hover:text-white transition-all duration-500">
                        Learn Our Story
                    </button>
                </div>
            </div>
        </section>
    );
}