'use client'

import { motion } from 'framer-motion'
import { Brain, Layers, Zap, Users, Target } from 'lucide-react'

export function B2BAnimatedFlow() {
    const steps = [
        {
            title: "Consultation",
            desc: "We align our 120-hour program with your college's specific academic calendar.",
            icon: Layers
        },
        {
            title: "Integration",
            desc: "The course is delivered on-campus, maintaining the sanctity of the classroom.",
            icon: Zap
        },
        {
            title: "Selection",
            desc: "Students choose the course through their institution, ensuring a committed and disciplined participant group.",
            icon: Users
        },
        {
            title: "Outcome",
            desc: "Graduates who are not just \"placed,\" but are ready to contribute to the workforce from day one.",
            icon: Target
        }
    ]

    return (
        <section className="mb-32 relative w-full">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4 text-[#003676]">The B2B Institutional Model</h2>
                <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                    Our business model is exclusively Business-to-Institution. We do not recruit individual students; we partner with forward-thinking colleges to transform their entire cohorts.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Desktop View (Horizontal) */}
                <div className="hidden md:block relative h-[400px]">
                    {/* Connecting Line Container */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-visible z-0 pointer-events-none">

                        {/* Animated Line - Curvy Path */}
                        <svg className="w-full h-full overflow-visible" viewBox="0 0 1200 400" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#003676" stopOpacity="0.1" />
                                    <stop offset="50%" stopColor="#003676" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#003676" stopOpacity="0.1" />
                                </linearGradient>
                            </defs>
                            <motion.path
                                d="M -50 200 C 0 200, 60 50, 150 50 S 300 350, 450 350 S 600 50, 750 50 S 900 350, 1050 350 S 1200 200, 1250 200"
                                fill="transparent"
                                stroke="#003676"
                                strokeWidth="2"
                                strokeDasharray="10 10"
                                initial={{ strokeDashoffset: 0 }}
                                animate={{ strokeDashoffset: -1000 }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 w-full h-full">
                        {/* Position 1 (Top Left) */}
                        <div className="absolute left-[12.5%] top-[20px] w-[250px] -translate-x-1/2 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#003676] flex items-center justify-center mb-4 shadow-lg z-10 relative">
                                <div className="absolute inset-1 rounded-full border border-dashed border-slate-300"></div>
                                <Layers className="w-10 h-10 text-[#003676]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003676] mb-2">Consultation</h3>
                            <p className="text-slate-600 text-sm leading-relaxed px-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                                We align our 120-hour program with your college's specific academic calendar.
                            </p>
                        </div>

                        {/* Position 2 (Bottom Middle-Left) */}
                        <div className="absolute left-[37.5%] top-[320px] w-[250px] -translate-x-1/2 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#003676] flex items-center justify-center mb-4 shadow-lg z-10 relative">
                                <div className="absolute inset-1 rounded-full border border-dashed border-slate-300"></div>
                                <Zap className="w-10 h-10 text-[#003676]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003676] mb-2">Integration</h3>
                            <p className="text-slate-600 text-sm leading-relaxed px-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                                The course is delivered on-campus, maintaining the sanctity of the classroom.
                            </p>
                        </div>

                        {/* Position 3 (Top Middle-Right) */}
                        <div className="absolute left-[62.5%] top-[20px] w-[250px] -translate-x-1/2 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#003676] flex items-center justify-center mb-4 shadow-lg z-10 relative">
                                <div className="absolute inset-1 rounded-full border border-dashed border-slate-300"></div>
                                <Users className="w-10 h-10 text-[#003676]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003676] mb-2">Selection</h3>
                            <p className="text-slate-600 text-sm leading-relaxed px-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                                Students choose the course through their institution, ensuring a committed group.
                            </p>
                        </div>

                        {/* Position 4 (Bottom Right) */}
                        <div className="absolute left-[87.5%] top-[320px] w-[250px] -translate-x-1/2 flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-white border-4 border-[#003676] flex items-center justify-center mb-4 shadow-lg z-10 relative">
                                <div className="absolute inset-1 rounded-full border border-dashed border-slate-300"></div>
                                <Target className="w-10 h-10 text-[#003676]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#003676] mb-2">Outcome</h3>
                            <p className="text-slate-600 text-sm leading-relaxed px-2 bg-white/90 backdrop-blur-sm rounded-lg border border-slate-100 shadow-sm">
                                Graduates who are not just "placed," but ready for the workforce.
                            </p>
                        </div>


                    </div>
                </div>

                {/* Mobile View (Vertical) */}
                <div className="md:hidden relative pl-8 border-l-2 border-slate-200 ml-4 space-y-12">
                    {/* Animated Vertical Line Overlay */}
                    <motion.div
                        className="absolute left-[-2px] top-0 w-[2px] bg-[#003676] z-10"
                        initial={{ height: "0%" }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            {/* Removed Number Circle */}

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-md">
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 rounded-lg bg-blue-50 text-[#003676]">
                                        <step.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#003676]">{step.title}</h3>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
