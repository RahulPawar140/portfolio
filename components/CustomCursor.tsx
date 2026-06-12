"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);

        const hoverables = document.querySelectorAll("a, button");
        hoverables.forEach(el => {
            el.addEventListener("mouseenter", () => setHover(true));
            el.addEventListener("mouseleave", () => setHover(false));
        });

        return () => {
            window.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <>
            {/* Inner Dot */}
            <div
                className="cursor-dot"
                style={{ left: pos.x, top: pos.y }}
            />

            {/* Outer Ring */}
            <div
                className={`cursor-ring ${hover ? "cursor-hover" : ""}`}
                style={{ left: pos.x, top: pos.y }}
            />
        </>
    );
}