"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
        }, 2500); // loader duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.6,
                        filter: "blur(20px)",
                    }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none"
                >
                    {/* Cinematic Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2b1055_0%,#0f0f1a_40%,#000000_100%)]" />

                    {/* Glow Orbs */}
                    <div className="absolute w-[400px] h-[400px] bg-purple-500/30 blur-[120px] rounded-full top-10 left-10 animate-pulse"></div>
                    <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full bottom-10 right-10 animate-pulse"></div>

                    {/* Content */}
                    <div className="relative text-center">

                        {/* Name Reveal */}
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.5em" }}
                            animate={{ opacity: 1, scale: 1, letterSpacing: "0.1em" }}
                            transition={{ duration: 1 }}
                            className="text-5xl md:text-6xl font-bold text-white"
                        >
                            Rahul{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                                Pawar
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-300 mt-4 text-lg tracking-widest"
                        >
                            FrontEnd DEVELOPER
                        </motion.p>

                        {/* Loading line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.8, duration: 1.2 }}
                            className="h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 mt-6 mx-auto"
                        />

                        {/* Loading text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            className="text-gray-400 mt-4 text-sm"
                        >
                            Initializing Experience...
                        </motion.p>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}