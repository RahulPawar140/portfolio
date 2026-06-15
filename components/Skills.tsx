"use client";

import { motion } from "framer-motion";

// Font Awesome Icons
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

/* ================= SKILL CATEGORIES ================= */

const skillCategories = [
    {
        title: "Web Technologies",
        skills: [
            { icon: FaHtml5, color: "#E34F26", name: "HTML" },
            { icon: FaCss3Alt, color: "#1572B6", name: "CSS" },
            { icon: FaJs, color: "#F7DF1E", name: "JavaScript" },
            { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
            { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
            { icon: FaReact, color: "#61DAFB", name: "React" },
            { icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
        ],
    },
    {
        title: "Programming",
        skills: [
            { icon: SiC, color: "#A8B9CC", name: "C" },
            { icon: SiCplusplus, color: "#00599C", name: "C++" },
            { icon: FaPython, color: "#3776AB", name: "Python" },
            { icon: FaJava, color: "#007396", name: "Java" },
            { icon: FaPhp, color: "#777BB4", name: "PHP" },
        ],
    },
    {
        title: "Backend & Databases",
        skills: [
            { icon: FaNodeJs, color: "#339933", name: "Node.js" },
            { icon: SiExpress, color: "#ffffff", name: "Express" },
            { icon: SiMysql, color: "#4479A1", name: "MySQL" },
            { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
            { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { icon: FaGitAlt, color: "#F05032", name: "Git" },
            { icon: FaGithub, color: "#ffffff", name: "GitHub" },
            { icon: SiPostman, color: "#FF6C37", name: "Postman" },
        ],
    },
];

/* ================= ANIMATIONS ================= */

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.06 },
    },
};

const item = {
    hidden: { opacity: 0, y: 10, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1 },
};

/* ================= COMPONENT ================= */

export default function Skills() {
    return (
        <section className="py-20 px-6" id="skills">
            <h2 className="text-4xl font-bold text-center text-white mb-14">
                Skills
            </h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ y: -6 }}
                        className="
              rounded-2xl
              bg-white/5
              border
              border-white/10
              px-6
              py-5
              backdrop-blur-md
              transition
            "
                    >
                        {/* Title */}
                        <h3 className="text-base font-semibold text-white mb-4 text-center">
                            {category.title}
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {category.skills.map((skill, i) => {
                                const Icon = skill.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.2 }}
                                        className="flex flex-col items-center gap-1"
                                    >
                                        <Icon size={30} color={skill.color} />
                                        <span className="text-[11px] text-gray-300">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}