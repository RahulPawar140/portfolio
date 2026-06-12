"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="py-24 px-6" id="contact">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-center text-white mb-16"
            >
                Let’s Connect
            </motion.h2>

            {/* Cards */}
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
                {/* LinkedIn */}
                <motion.a
                    href="https://www.linkedin.com/in/rahulpawar120"
                    target="_blank"
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="group backdrop-blur-xl bg-white/10
                     border border-white/20 rounded-2xl p-10
                     flex flex-col items-center text-center gap-6"
                >
                    <FaLinkedin size={64} className="text-[#0A66C2]" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            LinkedIn
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition">
                            Connect with me professionally
                        </p>
                    </div>
                </motion.a>

                {/* Gmail */}
                <motion.a
                    href="mailto:pawarrahul18220@gmail.com"
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="group backdrop-blur-xl bg-white/10
                     border border-white/20 rounded-2xl p-10
                     flex flex-col items-center text-center gap-6"
                >
                    <FaEnvelope size={64} className="text-[#EA4335]" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            Gmail
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition">
                            Send me an email
                        </p>
                    </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                    href="https://github.com/RahulPawar140"
                    target="_blank"
                    whileHover={{ scale: 1.08, y: -6 }}
                    className="group backdrop-blur-xl bg-white/10
                     border border-white/20 rounded-2xl p-10
                     flex flex-col items-center text-center gap-6"
                >
                    <FaGithub size={64} className="text-white" />
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            GitHub
                        </h3>
                        <p className="text-gray-300 group-hover:text-white transition">
                            View my projects & code
                        </p>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}