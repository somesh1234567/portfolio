"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Calendar, Briefcase, GitCommit } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "DevOps Engineer",
        company: "Itron",
        period: "08/2022 - Present",
        description: "Architected 'Golden Path' for Alerting-as-Code using Backstage. Engineered mixed-node strategy on AWS slashing costs by 50%. Orchestrated end-to-end provisioning of EKS/AKS using Terraform.",
        tech: ["AWS", "Azure", "Terraform", "Python", "Backstage"],
    },
    {
        id: 2,
        role: "Bachelors in Technology",
        company: "CET, Bhubaneswar",
        period: "08/2018 - 05/2022",
        description: "Graduated with a strong foundation in computer science principles. Recognized for active participation in technical societies and hackathons.",
        tech: ["Engineering"],
    },
];

export function Experience() {
    return (
        <section className="relative py-20 px-4">
            {/* Animated Pipeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/5 -translate-x-1/2 hidden md:block">
                <motion.div
                    className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    viewport={{ once: true }}
                />
            </div>

            <div className="container mx-auto max-w-5xl">
                <motion.h2
                    className="text-4xl font-bold mb-16 font-mono text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-neon-blue">git log</span> --experience
                </motion.h2>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {/* Timeline Node */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-black border-2 border-neon-purple z-10">
                                <GitCommit className="w-4 h-4 text-white" />
                            </div>

                            {/* Content Card */}
                            <div className="w-full md:w-1/2">
                                <GlassCard className="p-6 relative group hover:border-neon-purple/50 transition-colors">
                                    {/* Connector Line for Mobile */}
                                    <div className="absolute left-0 top-1/2 -translate-x-full w-8 h-px bg-neon-purple hidden md:block opacity-50" />

                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors">{exp.role}</h3>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-neon-blue text-sm font-mono border border-neon-blue/20 px-2 py-1 rounded">
                                            <Calendar className="w-3 h-3" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <p className="text-gray-300 mb-4">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="text-xs font-mono px-2 py-1 bg-white/5 rounded text-gray-400">
                                                #{t}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Empty Space for Grid Layout */}
                            <div className="w-full md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
