"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useLenis } from "./SmoothScrolling";

export default function Navbar() {
    const navRef = useRef(null);
    const lenis = useLenis();


    useEffect(() => {
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.5,
        });
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
        e.preventDefault();
        if (target === "#home") {
            lenis?.scrollTo(0);
        } else {
            lenis?.scrollTo(target, { offset: -80 });
        }
    };

    const navItems = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Sectors", href: "#projects" },
    ];


    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-[100] flex justify-between items-center px-6 md:px-16 py-6 bg-black/10 backdrop-blur-sm"
        >
            {/* Actual Logo Image */}
            <div className="relative w-32 h-10 md:w-40 md:h-12">
                <Image
                    src="/images/logo.svg"
                    alt="Build Fix Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.2em] font-medium text-white/70">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="hover:text-[#D4AF37] transition-colors cursor-pointer"
                    >
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Let's Connect Button */}
            <a
                href="tel:+966544005480"
                className="group relative px-6 py-2 border border-[#D4AF37]/50 rounded-full overflow-hidden transition-all duration-300 hover:border-[#D4AF37] inline-block"
            >
                <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold text-white group-hover:text-black transition-colors duration-300">
                    Let's Connect
                </span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </a>
        </nav>
    );
}