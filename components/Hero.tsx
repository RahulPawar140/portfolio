"use client";

import { motion } from "framer-motion";

export default function Hero() {

    const scrollToProjects = () => {
        const el = document.getElementById("projects");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute w-[400px] h-[400px] bg-purple-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
            <div className="absolute w-[300px] h-[300px] bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>

            <div className="text-center z-10">

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold text-white"
                >
                    Hi, I’m{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        Rahul Pawar
                    </span>
                </motion.h1>

                {/* Role */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 text-lg md:text-2xl mt-4"
                >
                    Frontend Developer | Programming
                </motion.p>

                {/* Tags */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-3 mt-6"
                >
                    {["Frontend", "Backend", "UI/UX", "Problem Solver", "Testing & Automation"].map((tag, i) => (
                        <span
                            key={i}
                            className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </motion.div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-10"
                >
                    <button
                        onClick={scrollToProjects}
                        className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
                    >
                        View My Work 🚀
                    </button>
                </motion.div>

            </div>
        </section>
    );
}