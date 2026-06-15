"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaDownload, FaEye, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
    const [showResume, setShowResume] = useState(false);

    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="min-h-screen flex items-center px-4 md:px-6 relative overflow-hidden">

            {/* Background glow */}
            <div className="absolute w-[260px] h-[260px] md:w-[400px] md:h-[400px]
        bg-purple-500/20 blur-3xl rounded-full top-10 left-10 animate-pulse" />
            <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px]
        bg-cyan-400/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse" />

            {/* MOBILE IMAGE */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute top-6 right-6 md:hidden z-20"
            >
                <motion.img
                    src="/mypic.jpg"
                    alt="Rahul Pawar"
                    className="w-24 h-24 rounded-full object-cover border border-white/20 shadow-xl"
                />
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">

                {/* LEFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="text-center md:text-left"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white">
                        Hi, I’m{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                            Rahul Pawar
                        </span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-2xl mt-4">
                        Frontend Developer | Programming
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                        {["Frontend", "Backend", "UI/UX", "Problem Solver", "Testing & Automation"].map((tag, i) => (
                            <span
                                key={i}
                                className="px-4 py-1 text-sm rounded-full bg-white/10 border border-white/20 text-gray-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                        <button
                            onClick={scrollToProjects}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition"
                        >
                            View My Work 🚀
                        </button>

                        <button
                            onClick={scrollToContact}
                            className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition"
                        >
                            Contact Me 📩
                        </button>

                        {/* PREVIEW RESUME */}
                        <button
                            onClick={() => setShowResume(true)}
                            className="px-6 py-3 rounded-full bg-white/10 border border-white/30 text-white
              flex items-center gap-2 justify-center hover:bg-white hover:text-black transition"
                        >
                            <FaEye size={14} />
                            Preview Resume
                        </button>

                    </div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:flex justify-end"
                >
                    <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-3xl" />

                    <motion.img
                        src="/mypic.jpg"
                        alt="Rahul Pawar"
                        className="relative w-80 h-80 object-cover rounded-full border border-white/20 shadow-2xl"
                        whileHover={{ scale: 1.08, rotate: 1 }}
                    />
                </motion.div>
            </div>

            {/* 🔥 FLOATING DIRECT DOWNLOAD */}
            <motion.a
                href="/Rahul_Pawar_Resume.pdf"
                download
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-500 to-pink-600
        text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 font-semibold"
            >
                <FaDownload />
                Download Resume
            </motion.a>

            {/* 🧾 RESUME PREVIEW MODAL */}
            <AnimatePresence>
                {showResume && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#0b0b0b] rounded-xl max-w-3xl w-full p-4 relative"
                        >
                            <button
                                onClick={() => setShowResume(false)}
                                className="absolute top-4 right-4 text-white hover:text-red-400"
                            >
                                <FaTimes size={18} />
                            </button>

                            <iframe
                                src="/Rahul_Pawar_Resume.pdf"
                                className="w-full h-[75vh] rounded-lg"
                            />

                            <a
                                href="/Rahul_Pawar_Resume.pdf"
                                download
                                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r
                from-purple-500 to-pink-600 text-white py-3 rounded-full font-semibold"
                            >
                                <FaDownload />
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
}