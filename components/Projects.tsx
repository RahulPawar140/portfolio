"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "First HTML CSS Project",
        description: "",
        tech: ["HTML", "CSS"],
        github: "https://github.com/RahulPawar140/test",
        live: "https://rahulpawar140.github.io/test/",
    },
    {
        title: "GitHub Repo Explorer",
        description:
            "Search and explore GitHub repositories quickly in one place with clean UI and smooth animations.",
        tech: ["React", "API", "Tailwind"],
        github: "https://github.com/RahulPawar140/github-repo-viewer",
        live: "https://github-repo-viewer-xi.vercel.app/",
        featured: true, // ⭐ BEST PROJECT
    },
    {
        title: "Movie Nexus",
        description:
            "A lightweight movie discovery web app where you can search for films and start your cinematic journey.",
        tech: ["React", "API", "CSS"],
        github: "https://github.com/RahulPawar140/Movie_Nexus",
        live: "https://rahulpawar140.github.io/Movie_Nexus/",
    },
    {
        title: "Portfolio",
        description:
            "Personal portfolio built with Next.js, Tailwind CSS & Framer Motion.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        github: "https://github.com/RahulPawar140/Portfolio",
        live: "https://rahulpawar140.github.io/Portfolio/",
    },
    {
        title: "Expense Splitter for Friends",
        description:
            "A simple web app to split shared expenses and calculate balances instantly.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        github: "https://github.com/RahulPawar140/Expense_Splitter",
        live: "https://rahulpawar140.github.io/Expense_Splitter/",
    },
    {
        title: "Batch and Attendance Management Backend",
        description:
            "Backend system for managing batches and attendance using Node.js and PostgreSQL.",
        tech: ["Node.js", "Express.js", "PostgreSQL"],
        github: "https://github.com/RahulPawar140/Batch_and_Attendance_Management_Node",
        live: "#",
    },
    {
        title: "Batch and Attendance Management Frontend",
        description:
            "Ongoing project for batch and attendance system with modern UI.",
        tech: ["React", "Tailwind CSS", "v0.dev"],
        github: "https://github.com/RahulPawar140/Batch_and_Attendance_Management_React",
        live: "https://batch-and-attendance-management-rea.vercel.app/",
        featured: true, // ⭐ BEST PROJECT
    },
];

/* Animations */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section className="py-24 px-6" id="projects">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
                Projects
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10"
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        variants={item}
                        whileHover={{
                            y: project.featured ? -12 : -8,
                            scale: project.featured ? 1.08 : 1.04,
                        }}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                            ease: "easeOut"
                        }}
                        className={`group relative backdrop-blur-xl rounded-2xl p-8 transition-all duration-300
                            
                            ${project.featured
                                ? "bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400 shadow-[0_0_45px_rgba(168,85,247,0.4)]"
                                : "bg-white/10 border border-white/20"
                            }
                        `}
                        data-cursor="hover"
                    >
                        {/* ⭐ BEST PROJECT BADGE */}
                        {project.featured && (
                            <span className="absolute -top-4 left-6 px-4 py-1 text-xs font-semibold
                                bg-gradient-to-r from-purple-500 to-pink-500
                                text-white rounded-full shadow-lg animate-pulse">
                                ⭐ Best Project
                            </span>
                        )}

                        {/* TITLE */}
                        <h3 className="text-xl font-semibold text-white mb-3">
                            {project.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-300 text-sm mb-6">
                            {project.description}
                        </p>

                        {/* TECH STACK */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 rounded-full
                                    bg-black/30 text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* LINKS */}
                        <div className="flex gap-4">
                            <a
                                href={project.github}
                                target="_blank"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <FaGithub size={20} />
                            </a>

                            <a
                                href={project.live}
                                target="_blank"
                                className="text-white hover:text-gray-300 transition"
                            >
                                <FaExternalLinkAlt size={18} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}