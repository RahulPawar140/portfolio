"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    const mouse = useRef({ x: 0, y: 0 });
    const ringPos = useRef({ x: 0, y: 0 });

    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        window.addEventListener("mousemove", move);

        const hoverables = document.querySelectorAll("a, button");

        const onEnter = () => setHover(true);
        const onLeave = () => setHover(false);

        hoverables.forEach(el => {
            el.addEventListener("mouseenter", onEnter);
            el.addEventListener("mouseleave", onLeave);
        });

        const animate = () => {
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
            }

            // Smooth trailing ring
            ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.12;
            ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.12;

            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
            }

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", move);
            hoverables.forEach(el => {
                el.removeEventListener("mouseenter", onEnter);
                el.removeEventListener("mouseleave", onLeave);
            });
        };
    }, []);

    return (
        <>
            {/* Inner Dot */}
            <div ref={dotRef} className="cursor-dot" />

            {/* Outer Ring */}
            <div
                ref={ringRef}
                className={`cursor-ring ${hover ? "cursor-hover" : ""}`}
            />
        </>
    );
}