'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, TrendingDown, Users, AlertTriangle, Monitor, Lightbulb, Briefcase, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}


            <main className="max-w-3xl mx-auto px-6 pt-24 pb-12">
                <ScrollAnimation delay={0.1}>
                    <div className="mb-8">
                        <div className="inline-block px-2 py-0.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-[10px] font-medium mb-3">
                            About Us
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">The Context</h1>
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                            To understand why we exist, you must understand the "wicked problem" of fresher placements in India. It is a structural disconnect where the supply of degrees has outpaced the demand for skills.
                        </p>
                    </div>
                </ScrollAnimation>

                <section className="space-y-12">
                    {/* The Numbers */}
                    <ScrollAnimation>
                        <div className="border-l-2 border-primary pl-5 py-1">
                            <h2 className="text-xl font-bold mb-4">The Employability Paradox</h2>
                            <p className="text-sm text-muted-foreground mb-4">
                                While India adds over 10 million youth to the working-age population annually, recent data for 2024-2025 reveals a critical gap.
                            </p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <div className="p-3 bg-card border border-border rounded-lg">
                                    <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                                        <Users className="w-3.5 h-3.5 text-primary" /> Engineering Crisis
                                    </h3>
                                    <p className="text-[11px] text-muted-foreground">
                                        1.5 million engineers graduate annually, but <strong>only 10-17% are hired into core roles</strong>.
                                    </p>
                                </div>
                                <div className="p-3 bg-card border border-border rounded-lg">
                                    <h3 className="text-base font-semibold mb-1 flex items-center gap-2">
                                        <TrendingDown className="w-3.5 h-3.5 text-red-500" /> Hiring Decline
                                    </h3>
                                    <p className="text-[11px] text-muted-foreground">
                                        Hiring intent for freshers in IT dropped from <strong>600,000 (2022)</strong> to under <strong>150,000 (2024)</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Why it's Wicked */}
                    <ScrollAnimation>
                        <h2 className="text-xl font-bold mb-4">Why the Problem is "Wicked"</h2>
                        <p className="text-sm text-muted-foreground mb-4">
                            A "wicked problem" is difficult to solve because of incomplete and contradictory requirements.
                        </p>
                        <div className="space-y-3">
                            {[
                                { title: "The Experience Paradox", desc: "Employers want 'plug-and-play' freshers. You can't get a job without experience, and can't get experience without a job." },
                                { title: "Outdated Curricula", desc: "Many colleges teach technologies and methodologies that industry abandoned years ago." },
                                { title: "The 'ATS Monster'", desc: "80% of resumes are rejected by automated systems before a human sees them." },
                                { title: "Soft Skill Deficit", desc: "52% of graduates fail not on technicals, but due to poor adaptability and communication." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                                        <AlertTriangle className="w-2.5 h-2.5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sm">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>

                    {/* AI Factor */}
                    <ScrollAnimation>
                        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 p-5 rounded-xl border border-indigo-500/20">
                            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                                <Monitor className="w-5 h-5 text-indigo-400" />
                                The AI & Automation Factor (2025)
                            </h2>
                            <p className="text-sm text-muted-foreground mb-3">
                                Artificial Intelligence has permanently raised the bar. Traditional "bottom-rung" roles (basic coding, data entry) are being automated.
                            </p>
                            <div className="bg-background/50 p-3 rounded-lg border border-white/5">
                                <h4 className="font-semibold mb-1 text-xs">The Specialist Shift</h4>
                                <p className="text-[10px] text-muted-foreground">Competitors prefer a fresher who knows Python/LLMs over someone they have to train for 6 months. GCCs added 2.9 lakh roles, but only for niche skills.</p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Solution */}
                    <ScrollAnimation>
                        <div className="text-center pt-6 border-t border-border">
                            <h2 className="text-xl font-bold mb-3">How Hayagreeva Addresses This</h2>
                            <p className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto">
                                We attack this problem directly through a 120-hour fusion of technical grounds and life readiness.
                            </p>
                            <div className="grid md:grid-cols-3 gap-3 mb-6 text-left">
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <Lightbulb className="w-5 h-5 text-primary mb-2" />
                                    <h3 className="font-bold text-sm mb-1">Clarity vs Noise</h3>
                                    <p className="text-[10px] text-muted-foreground">Stopping students from blindly following trends.</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <Briefcase className="w-5 h-5 text-primary mb-2" />
                                    <h3 className="font-bold text-sm mb-1">Industry Objectives</h3>
                                    <p className="text-[10px] text-muted-foreground">Replacing "theory only" with "industry-ready objectives".</p>
                                </div>
                                <div className="p-3 bg-secondary/20 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                                    <h3 className="font-bold text-sm mb-1">Behavior & Discipline</h3>
                                    <p className="text-[10px] text-muted-foreground">Solving the #1 reason for interview rejection: the soft skill gap.</p>
                                </div>
                            </div>
                            <Button size="sm" asChild>
                                <Link href="/courses">Explore The Course</Link>
                            </Button>
                        </div>
                    </ScrollAnimation>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-8 px-6 bg-background mt-16">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-muted-foreground text-xs mb-2">
                        © 2026 Hayagreeva Skillspheree
                    </p>
                </div>
            </footer>
        </div>
    )
}
