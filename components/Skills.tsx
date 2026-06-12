"use client";

import { motion } from "framer-motion";

// Font Awesome
import {
    FaPython,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaBootstrap,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaPhp,
} from "react-icons/fa";

// Simple Icons
import {
    SiC,
    SiCplusplus,
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiPostman,
} from "react-icons/si";

/* 🔥 SKILLS ARRAY (THIS WAS MISSING) */
const skills = [
    { icon: SiC, color: "#A8B9CC", name: "C" },
    { icon: SiCplusplus, color: "#00599C", name: "C++" },
    { icon: FaPython, color: "#3776AB", name: "Python" },
    { icon: FaJava, color: "#007396", name: "Java" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML" },
    { icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
    { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
    { icon: FaNodeJs, color: "#339933", name: "Node.js" },
    { icon: SiExpress, color: "#ffffff", name: "Express.js" },
    { icon: SiMysql, color: "#4479A1", name: "MySQL" },
    { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: FaGitAlt, color: "#F05032", name: "Git" },
    { icon: FaGithub, color: "#ffffff", name: "GitHub" },
    { icon: SiPostman, color: "#FF6C37", name: "Postman" },
    { icon: FaPhp, color: "#777BB4", name: "PHP" },
];

/* Animations */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
    return (
        <section className="py-24 px-6" id="skills">
            <h2 className="text-4xl font-bold text-center text-white mb-16">
                Skills
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 gap-10"
            >
                {skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                        <motion.div
                            key={i}
                            variants={item}
                            whileHover={{ scale: 1.25, rotate: 6 }}
                            className="flex flex-col items-center gap-3"
                            data-cursor="hover"
                        >
                            <Icon size={48} color={skill.color} />
                            <span className="text-sm text-gray-300">
                                {skill.name}
                            </span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}