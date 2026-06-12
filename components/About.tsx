"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-24 px-6" id="about">

            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                About Me
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10
                           border border-white/20 rounded-2xl p-10 text-center"
            >

                {/* Main Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                    I am a passionate <span className="text-white font-semibold">Frontend Developer </span>
                    with a strong interest in building modern, responsive, and interactive web applications.
                </p>

                <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    I also have hands-on experience in <span className="text-white font-semibold">Backend Development</span>,
                    which helps me understand full-stack workflows and build complete end-to-end applications.
                </p>

                <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    I am proficient in programming languages such as
                    <span className="text-white font-semibold"> C, C++, Java, and Python</span>, which strengthen my
                    problem-solving and logical thinking abilities.
                </p>

                <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                    I have also worked with <span className="text-white font-semibold">Databases</span> and performed
                    <span className="text-white font-semibold"> API testing using Postman</span>, gaining practical experience
                    in building and testing real-world applications.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 mt-10">
                    {[
                        "Frontend Development",
                        "Backend Development",
                        "C / C++ / Java / Python",
                        "Database Management",
                        "API Testing (Postman)",
                        "Problem Solving",
                    ].map((item, i) => (
                        <span
                            key={i}
                            className="px-4 py-2 text-sm rounded-full bg-black/30 text-gray-200 border border-white/10"
                        >
                            {item}
                        </span>
                    ))}
                </div>

            </motion.div>
        </section>
    );
}