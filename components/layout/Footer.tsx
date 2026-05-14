"use client";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const whatsappLink = "https://wa.me/966544005480?text=Hello, I would like to discuss a project.";

    return (
        <footer className="bg-black text-white pt-24 pb-10 px-6 md:px-20 font-sans">
            <div className="container mx-auto max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10 pb-20">

                    {/* LEFT: Branding & About */}
                    <div className="md:col-span-5 flex flex-col items-start gap-8">
                        <div className="relative w-40 h-14">
                            <Image
                                src="/images/logo.svg"
                                alt="Build Fix Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
                            Build Fix Contracting Co. is an engineering firm specializing in integrated MEP, Audio-Visual, and civil works. Dedicated to delivering high-quality, innovative solutions.
                        </p>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"

                            className="group relative bg-white text-black px-8 py-3.5 rounded-xl flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-black overflow-hidden transition-all duration-500"
                        >
                            {/* Text & Icon - Stay on top of the fill layer */}
                            <span className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500 font-sans">
                                Get Started
                                <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                            </span>

                            {/* The Gold Fill Layer (Bottom to Top) */}
                            <div className="absolute inset-0 bg-[#d4af37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </a>
                    </div>

                    {/* MIDDLE: Quick Links (SPA Anchors) */}
                    <div className="md:col-span-3 flex flex-col gap-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-white/70">
                            <li><a href="#home" className="hover:text-gold transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:text-gold transition-colors">Our Services</a></li>
                            <li><a href="#projects" className="hover:text-gold transition-colors">Featured Projects</a></li>
                            <li><a href="#testimonials" className="hover:text-gold transition-colors">Testimonials</a></li>
                        </ul>
                    </div>

                    {/* RIGHT: Contact Details from PDF */}
                    <div className="md:col-span-4 flex flex-col gap-8">
                        <h4 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/30">
                            Contact
                        </h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <Mail size={16} className="text-gold mt-1" />
                                <div className="flex flex-col">
                                    <a href="mailto:info@buildfix.org" className="text-sm hover:text-gold transition-colors">info@buildfix.org</a>
                                    <span className="text-[10px] text-white/30 mt-1 uppercase tracking-widest">Business Inquiry</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone size={16} className="text-gold mt-1" />
                                <div className="flex flex-col">
                                    <a href="tel:+966544005480" className="text-sm hover:text-gold transition-colors">+966 544 005 480</a>
                                    <a href="tel:+966569261340" className="text-sm hover:text-gold transition-colors">+966 569 261 340</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <MapPin size={16} className="text-gold mt-1" />
                                <p className="text-sm text-white/60 leading-relaxed font-light">
                                    Metro Tower, Office 1, Ground Floor, Abdul Rahman Ibnu Awf Rd, Riyadh, 14225, KSA.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR: Credits & Policy */}
                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/30">
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>

                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/30">
                        © 2026 Build Fix Contracting. All rights reserved.
                    </p>


                </div>

            </div>
        </footer>
    );
}