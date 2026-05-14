"use client";
import { usePathname } from "next/navigation";
import { useEffect, ReactNode, createContext, useContext, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lenis instance
const LenisContext = createContext<Lenis | null>(null);
export const useLenis = () => useContext(LenisContext);

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [lenis, setLenis] = useState<Lenis | null>(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 1.5,
            smoothWheel: true,
        });

        setLenis(lenisInstance);

        lenisInstance.on("scroll", ScrollTrigger.update);

        const raf = (time: number) => {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        window.scrollTo(0, 0);
        ScrollTrigger.refresh();

        return () => {
            lenisInstance.destroy();
        };
    }, [pathname]);

    return (
        <LenisContext.Provider value={lenis}>
            {children}
        </LenisContext.Provider>
    );
}