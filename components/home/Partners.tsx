"use client";
import Image from "next/image";

const partners = [
    { name: "Partner 1", logo: "/images/partner1.svg" },
    { name: "Partner 2", logo: "/images/partner2.svg" },
    { name: "Partner 3", logo: "/images/partner3.svg" },
    { name: "Partner 4", logo: "/images/partner4.svg" },
    { name: "Partner 5", logo: "/images/partner5.svg" },
    { name: "Partner 6", logo: "/images/partner6.svg" },
    { name: "Partner 7", logo: "/images/partner7.svg" },
    { name: "Partner 8", logo: "/images/partner8.svg" },
    { name: "Partner 9", logo: "/images/partner9.svg" },
    { name: "Partner 10", logo: "/images/partner10.svg" },
    { name: "Partner 11", logo: "/images/partner11.svg" },
    { name: "Partner 12", logo: "/images/partner12.svg" },
];

export default function Partners() {
    return (
        <section className="bg-[#f5f5f5] py-24 md:py-32 px-6 md:px-20 border-t border-black/5">
            <div className="container mx-auto max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-6 bg-black/[0.03] px-4 py-1.5 rounded-full border border-black/5">
                        <div className="w-1 h-1 rounded-full bg-black/40" />
                        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-black/50 font-sans">
                            Collaborations
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-black max-w-2xl leading-[1.2] font-sans">
                        Building lasting relationships <br /> with every project
                    </h2>
                </div>

                {/* Logo Grid - Smaller & Compact Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl aspect-[4/2.5] flex items-center justify-center p-8 md:p-10 border border-black/[0.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group cursor-pointer"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">

                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-[30px] md:max-h-[40px] w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}