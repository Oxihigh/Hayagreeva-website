'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, Briefcase, GraduationCap, ShieldCheck, Award, UserCheck, Star, Zap } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-transparent text-foreground overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">

                {/* Hero Section */}
                <ScrollAnimation delay={0.1}>
                    <div className="text-center mb-24 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400 drop-shadow-2xl">
                                Our Mentor Standards
                            </h1>
                        </motion.div>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-4xl mx-auto">
                            <span className="md:whitespace-nowrap">We believe that students should only learn from those who have truly "been there".</span><br />
                            <span className="text-white font-medium">Practitioners! not just Professors.</span>
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Standards Grid */}
                <section className="mb-32">
                    <ScrollAnimation>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {
                                    title: "3+ Years Experience",
                                    desc: "Every facilitator must have at least 3 years of relevant professional or domain experience. No freshers teaching freshers.",
                                    icon: "3+",
                                    color: "text-cyan-400",
                                    bg: "bg-cyan-500/10",
                                    border: "group-hover:border-cyan-500/50"
                                },
                                {
                                    title: "Real-World Context",
                                    desc: "Trainers must have worked in leadership or practice within industry environments, not just academic theory.",
                                    icon: Briefcase,
                                    color: "text-blue-400",
                                    bg: "bg-primary/10",
                                    border: "group-hover:border-primary/50"
                                },
                                {
                                    title: "Academic Focus",
                                    desc: "We engage mentors who respect the time and structure of the institution. Serious learning, no fluff.",
                                    icon: GraduationCap,
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/10",
                                    border: "group-hover:border-purple-500/50"
                                },
                                {
                                    title: "Ethical Conduct",
                                    desc: "Strict adherence to professional standards, with no personal promotion or pitching allowed during sessions.",
                                    icon: ShieldCheck,
                                    color: "text-emerald-400",
                                    bg: "bg-emerald-500/10",
                                    border: "group-hover:border-emerald-500/50"
                                }
                            ].map((item, i) => (
                                <div key={i} className={`group p-8 rounded-2xl bg-black/20 border border-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5 cursor-default ${item.border}`}>
                                    <div className={`w-16 h-16 rounded-xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                                        {typeof item.icon === 'string' ? (
                                            <span className={`text-2xl font-black ${item.color}`}>{item.icon}</span>
                                        ) : (
                                            <item.icon className={`w-8 h-8 ${item.color}`} />
                                        )}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </section>



                {/* CTA - Join the League */}
                <ScrollAnimation>
                    <div className="relative rounded-3xl overflow-hidden p-12 text-center border border-white/10">
                        {/* Glass Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md -z-10"></div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Mission</h2>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all text-left">
                                <h3 className="text-xl font-bold text-white mb-2">For College Administrators</h3>
                                <p className="text-slate-400 mb-6 text-sm">Empower your institution with a curriculum that delivers real results.</p>
                                <Button className="w-full bg-white hover:bg-white/90 text-primary-foreground font-bold" asChild>
                                    <Link href="mailto:admin@hayagreeva.com">Partner With Us</Link>
                                </Button>
                            </div>
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/50 transition-all text-left">
                                <h3 className="text-xl font-bold text-white mb-2">For Professional Mentors</h3>
                                <p className="text-slate-400 mb-6 text-sm">Share your industry expertise and shape the next generation.</p>
                                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white" asChild>
                                    <Link href="mailto:mentors@hayagreeva.com">Join the Team</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </main>
        </div>
    )
}
