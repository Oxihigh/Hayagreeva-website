'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle, ShieldCheck, XCircle, Activity, Zap } from 'lucide-react'
import { useState } from 'react'

interface RealityCheckSectionProps {
    lightMode?: boolean
}

export function RealityCheckSection({ lightMode = false }: RealityCheckSectionProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    const anomalies = [
        { title: "Motivational Hype", desc: "Short-term dopamine spikes." },
        { title: "False Promises", desc: "'100% Placement' Guarantees." },
        { title: "Generic Content", desc: "YouTube tutorials passed as curriculum." },
        { title: "Shortcuts", desc: "Tips & tricks over fundamentals." },
    ]

    const protocols = [
        { title: "Domain Depth", desc: "Building core engineering intuition." },
        { title: "Real Readiness", desc: "Skills that survive automation." },
        { title: "Structured Learning", desc: "Curated, rigorous academic path." },
        { title: "Long-term Value", desc: "Careers that grow for decades." },
    ]

    return (
        <section className="mb-32 relative">
            <div className={`absolute inset-0 ${lightMode ? 'bg-grid-black/[0.05]' : 'bg-grid-white/[0.02]'} bg-[size:50px_50px] -z-10`} />

            <div className="text-center mb-10 relative font-['Helvetica']">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${lightMode ? 'text-[#003676]' : 'text-white'}`}>The "Anti-Motivational" Philosophy</h2>
                <p className={`${lightMode ? 'text-slate-600' : 'text-slate-400'} text-sm`}>We don't sell dreams. We build competence.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">

                {/* Connecting Lines (Desktop only) */}
                <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent ${lightMode ? 'via-slate-300' : 'via-slate-700'} to-transparent hidden md:block`} />

                {/* Left Side: Anomalies (Red) */}
                <div className="space-y-4 relative font-['Helvetica']">
                    <div className="flex items-center justify-between mb-4 border-b border-red-500/20 pb-2">
                        <h3 className="text-xl font-bold text-red-500 flex items-center gap-2">
                            <XCircle className="w-5 h-5" />
                            What We Do Not Do
                        </h3>
                        <span className="text-[10px] text-red-500/60 bg-red-500/10 px-1.5 py-0.5 rounded">STATUS: REJECTED</span>
                    </div>

                    <div className="space-y-3">
                        {anomalies.map((item, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className={`p-4 rounded-lg border transition-all duration-300 relative overflow-hidden group cursor-default
                  ${hoveredIndex === i
                                        ? 'bg-red-950/40 border-red-500/50 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]'
                                        : lightMode ? 'bg-red-50 border-red-200 hover:border-red-300' : 'bg-red-950/10 border-red-500/10 hover:border-red-500/30'
                                    }`}
                            >
                                {/* Glitch Effect bars */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-red-500 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`} />

                                <h4 className={`text-base font-bold ${lightMode ? 'text-red-600' : 'text-red-400'} mb-0.5 flex items-center justify-between`}>
                                    {item.title}
                                    {hoveredIndex === i && <XCircle className="w-3.5 h-3.5 text-red-500" />}
                                </h4>
                                <p className={`text-xs ${lightMode ? 'text-red-700/70' : 'text-red-200/60'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Protocols (Green) */}
                <div className="space-y-4 relative font-['Helvetica']">
                    <div className="flex items-center justify-between mb-4 border-b border-emerald-500/20 pb-2">
                        <h3 className="text-xl font-bold text-emerald-500 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            What We Do
                        </h3>
                        <span className="text-[10px] text-emerald-500/60 bg-emerald-500/10 px-1.5 py-0.5 rounded">STATUS: VERIFIED</span>
                    </div>

                    <div className="space-y-3">
                        {protocols.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`p-4 rounded-lg border transition-all duration-300 relative overflow-hidden
                  ${hoveredIndex === i
                                        ? 'bg-emerald-950/40 border-emerald-500/50 scale-[1.02] shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]'
                                        : lightMode ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-950/10 border-emerald-500/10'
                                    }`}
                            >
                                {/* Connection Beam Effect */}
                                {hoveredIndex === i && (
                                    <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-10 h-[2px] bg-gradient-to-r from-transparent to-emerald-500 hidden md:block" />
                                )}

                                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-0'}`} />

                                <h4 className={`text-base font-bold ${lightMode ? 'text-emerald-600' : 'text-emerald-400'} mb-0.5 flex items-center justify-between`}>
                                    {item.title}
                                    {hoveredIndex === i && <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />}
                                </h4>
                                <p className={`text-xs ${lightMode ? 'text-emerald-700/70' : 'text-emerald-200/60'}`}>{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
