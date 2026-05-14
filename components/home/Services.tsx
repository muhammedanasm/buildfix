"use client";
import Image from "next/image";

const servicesData = [
    {
        title: "Electrical & AV Systems",
        description: "Precision-engineered power distribution and immersive audio-visual environments tailored for high-end infrastructure.",
        image: "/images/electric.webp",
        tags: ["PANEL BOARD FABRICATION", "LED SCREEN WORK", "CABLE TRAY INSTALLATION", "AV INTEGRATION"]
    },
    {
        title: "HVAC & Climate Control",
        description: "Advanced cooling and ventilation solutions ensuring optimal air quality and temperature management for large-scale projects.",
        image: "/images/hvacbanner.webp",
        tags: ["DUCT INSTALLATION", "AC INSTALLATION", "SMOKE MANAGEMENT", "VENTILATION"]
    },
    {
        title: "Aquatic Engineering",
        description: "Specialized in luxury swimming pools and fountain ecosystems, featuring state-of-the-art filtration and pump room services.",
        image: "/images/pool.webp",
        tags: ["SWIMMING POOL WORK", "FOUNTAIN DESIGN", "PUMP ROOM SERVICES", "UG SERVICES"]
    },
    {
        title: "MEP & Safety Excellence",
        description: "Comprehensive engineering coordination with a steadfast commitment to safety concerns and operational peak performance.",
        image: "/images/mvpdesign.webp",
        tags: ["SAFETY CONCERNS", "SHOP DRAWINGS", "TESTING & COMMISSIONING", "PREVENTIVE"]
    }
];

export default function Services() {
    return (
        <section id="services" className="bg-[#f5f5f5] py-24 md:py-32 px-6 md:px-20 min-h-screen">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">

                    {/* LEFT SIDE: Sticky Header Style */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                        <div className="flex items-center gap-2 mb-8 bg-black/[0.04] w-fit px-4 py-1.5 rounded-full border border-black/5 animate-pulse ">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/60 font-sans">
                                Services we provide
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-black leading-[1.1] font-sans">
                            Deep expertise across the sectors that matter
                        </h2>
                    </div>

                    {/* RIGHT SIDE: Services Cards List (Each Line) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">
                        {servicesData.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[15px] p-6 md:p-6 flex flex-col md:flex-row gap-8 items-center border border-black/[0.02] shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Service Image */}
                                <div className="relative w-full md:w-[220px] shrink-0 min-h-[240px] bg-gray-100">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover rounded-[10px]"
                                    />

                                </div>

                                {/* Service Content */}
                                <div className="flex flex-col flex-grow">
                                    <h3 className="text-2xl md:text-2xl font-semibold tracking-tight text-black mb-4 font-sans">
                                        {service.title}
                                    </h3>
                                    <p className="text-black/50 text-sm md:text-base leading-relaxed font-light font-sans mb-8">
                                        {service.description}
                                    </p>

                                    {/* Tags List */}
                                    <div className="flex flex-wrap gap-2">
                                        {service.tags.map((tag, i) => (
                                            <div key={i} className="bg-[#f5f5f5] px-3 py-1.5 rounded-lg border border-black/[0.02]">
                                                <span className="text-[8px] md:text-[9px] uppercase tracking-widest font-bold text-black/40 font-sans">
                                                    {tag}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}