"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github, Terminal, CheckCircle } from "lucide-react";

type Project = {
    id: number;
    title: string;
    desc: string;
    tags: string[];
    status: string;
    github?: string;
    link?: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Golden Path Platform",
        desc: "Alerting-as-Code framework using Backstage IDP, reducing manual config time to zero for AKS services.",
        tags: ["Backstage", "Azure", "Automation"],
        status: "live",
    },
    {
        id: 2,
        title: "Cloud Cost Optimizer",
        desc: "Engineered AWS Spot Instance strategy for scalable workloads, slashing infrastructure overhead by 50%.",
        tags: ["AWS", "Cost", "Spot Instances"],
        status: "deployed",
        github: "https://github.com/somesh1234567/provision-infrastructure",
    },
    {
        id: 3,
        title: "Multi-Cloud GitOps",
        desc: "Unified ArgoCD framework for Kubernetes deployments across Azure and On-prem with 100% parity.",
        tags: ["ArgoCD", "Kubernetes", "GitOps"],
        status: "live",
    },
    {
        id: 4,
        title: "Serverless Watchdog",
        desc: "Python-based Azure Functions to monitor infrastructure health and trigger real-time automated alerts.",
        tags: ["Python", "Azure Functions", "Serverless"],
        status: "deployed",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-20 px-4">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <span className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,0,0.8)]">./</span>projects
                    </h2>
                    <p className="text-gray-400">Selected open source work and infrastructure tools.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard className="group hover:bg-white/10 transition-colors h-full flex flex-col justify-between p-6">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-neon-green/50 transition-colors">
                                            <Terminal className="w-6 h-6 text-neon-green" />
                                        </div>
                                        <div className="flex gap-2">
                                            {project.github && (
                                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                            {project.link && (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 group-hover:text-neon-green transition-colors">{project.title}</h3>
                                    <p className="text-gray-400 mb-6">{project.desc}</p>
                                </div>

                                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                                    <div className="flex gap-2 flex-wrap">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-gray-500 bg-white/5 px-1.5 py-0.5 rounded">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className={`flex items-center gap-1 text-xs font-mono shrink-0 ${project.status === "live" ? "text-neon-green" :
                                        project.status === "beta" ? "text-yellow-400" :
                                            "text-blue-400"
                                        }`}>
                                        <CheckCircle className="w-3 h-3" />
                                        <span>{project.status.toUpperCase()}</span>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
