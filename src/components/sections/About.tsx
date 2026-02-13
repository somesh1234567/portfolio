"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Cpu, Server, Globe, Database, Shield, Zap } from "lucide-react";

const skills = [
    { name: "Kubernetes/Docker", level: 95, color: "bg-blue-500" },
    { name: "AWS/Azure", level: 90, color: "bg-orange-500" },
    { name: "CI/CD (Jenkins/GitLab)", level: 88, color: "bg-red-500" },
    { name: "Terraform/Ansible", level: 85, color: "bg-purple-500" },
    { name: "Python/Go", level: 80, color: "bg-yellow-500" },
    { name: "Monitoring (Prometheus/Grafana)", level: 92, color: "bg-green-500" },
];

const badges = [
    "Linux", "Bash", "Nginx", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "React", "Next.js", "Node.js"
];

const systemStatus = [
    { label: "Mainnet", status: "Operational", color: "text-green-500" },
    { label: "Pipeline", status: "Idle", color: "text-yellow-500" },
    { label: "Database", status: "Synced", color: "text-green-500" },
    { label: "Cluster A", status: "98% Load", color: "text-red-500" },
];

export function About() {
    const skills = [
        { name: "Kubernetes/Docker", level: 95, color: "bg-blue-500" },
        { name: "AWS/Azure (EKS/AKS)", level: 90, color: "bg-orange-500" },
        { name: "IaC (Terraform/Ansible)", level: 92, color: "bg-purple-500" },
        { name: "CI/CD (Jenkins/ArgoCD)", level: 88, color: "bg-red-500" },
        { name: "Python/Scripting", level: 85, color: "bg-yellow-500" },
        { name: "Observability (Prom/Grafana)", level: 90, color: "bg-green-500" },
    ];

    const badges = [
        "Python", "AWS", "Azure", "Kubernetes", "Docker", "Terraform", "Ansible",
        "Jenkins", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "Linux", "PostgreSQL"
    ];

    const systemStatus = [
        { label: "Experience", status: "3.7 Years", color: "text-neon-blue" },
        { label: "Infrastructure", status: "Multi-Cloud", color: "text-purple-500" },
        { label: "Automation", status: "100%", color: "text-green-500" },
        { label: "Availability", status: "High (HA)", color: "text-yellow-500" },
    ];

    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                    {/* Left Column: Bio & Badges */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-4 font-mono">
                                <span className="text-neon-purple">./</span>about-me
                            </h2>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                DevOps Engineer with 3.7 years of experience building scalable cloud platforms and Kubernetes-based systems.
                                Experienced in designing production-grade infrastructure, automating deployments, and improving the reliability and
                                performance of distributed workloads. Strong background in Python, AWS, Azure, Terraform, GitOps, and Observability.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4 font-mono text-neon-blue">
                                &gt; tech_stack
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {badges.map((tech, index) => (
                                    <motion.span
                                        key={tech}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-gray-300 cursor-default hover:border-neon-blue/50 hover:bg-neon-blue/10 transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* System Status Dashboard */}
                        <GlassCard className="p-6">
                            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                                <Zap className="w-5 h-5 text-neon-green" />
                                <span className="font-mono font-bold">CAREER STATS</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {systemStatus.map((item) => (
                                    <div key={item.label} className="flex justify-between items-center text-sm font-mono">
                                        <span className="text-gray-400">{item.label}</span>
                                        <span className={item.color}>{item.status}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </div>

                    {/* Right Column: Skills & Stats */}
                    <div className="space-y-8">
                        <GlassCard>
                            <h3 className="text-xl font-bold mb-6 font-mono text-neon-green">
                                &gt; proficiency_levels
                            </h3>
                            <div className="space-y-6">
                                {skills.map((skill, index) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2 text-sm font-mono">
                                            <span>{skill.name}</span>
                                            <span className="text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                            <motion.div
                                                className={`h-full ${skill.color}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>

                        <div className="grid grid-cols-2 gap-4">
                            <GlassCard className="flex flex-col items-center justify-center p-6 text-center hover:bg-white/10">
                                <Server className="w-8 h-8 text-neon-purple mb-2" />
                                <div className="text-2xl font-bold">50%</div>
                                <div className="text-xs text-gray-400 font-mono">COST REDUCTION</div>
                            </GlassCard>
                            <GlassCard className="flex flex-col items-center justify-center p-6 text-center hover:bg-white/10">
                                <Shield className="w-8 h-8 text-neon-blue mb-2" />
                                <div className="text-2xl font-bold">100%</div>
                                <div className="text-xs text-gray-400 font-mono">ENV PARITY</div>
                            </GlassCard>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
