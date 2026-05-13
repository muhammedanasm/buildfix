"use client";

import { usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        window.scrollTo(0, 0);
        ScrollTrigger.refresh();

        return () => {
            lenis.destroy();
        };
    }, [pathname]);

    return <>{children}</>;
}