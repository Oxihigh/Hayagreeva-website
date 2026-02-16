'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, Target, Compass, Shield, Award, Users, Lightbulb } from 'lucide-react'
import Link from 'next/link'

import { motion } from 'framer-motion'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
            </div>

            <main className="max-w-4xl mx-auto px-6 pt-24 pb-12 relative z-10">

                {/* Hero Section */}
                <ScrollAnimation delay={0.1}>
                    <div className="text-center mb-24 relative min-h-[60vh] flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-400 drop-shadow-2xl">
                                Bridging the Gap Between<br className="md:hidden" /> <span className="whitespace-nowrap"><span className="text-white">Education</span> & <span className="text-white">Employability</span></span>
                            </h1>
                        </motion.div>
                        <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-3xl mx-auto">
                            We are not just a training institute; we are a movement to reclaim the true purpose of education—transforming potential into professional excellence.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Our Story */}
                <section className="mb-24">
                    <ScrollAnimation>
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-8 md:p-12 backdrop-blur-sm hover:bg-secondary/20 transition-colors duration-300">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-3">
                                <Lightbulb className="w-8 h-8 text-yellow-400" />
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                                <p>
                                    Hayagreeva Skillspheree was born out of a critical observation: India produces millions of graduates every year, yet industries struggle to find "employable" talent. The disconnect wasn't in the degrees, but in the <strong>delivery of skills</strong> and the <strong>development of character</strong>.
                                </p>
                                <p>
                                    We realized that students didn't just need technical training; they needed a fundamental shift in mindset. They needed to move from being passive learners to active, responsible professionals. Thus, distinct from traditional placement agencies, we established Hayagreeva to be a comprehensive <strong>Career Alignment & Life Readiness Organization</strong>.
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>

                {/* Mission & Vision */}
                <section className="grid md:grid-cols-2 gap-8 mb-24">
                    <ScrollAnimation delay={0.1}>
                        <div className="h-full p-8 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-secondary/5 hover:-translate-y-2 hover:shadow-xl group">
                            <div className="w-16 h-16 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Target className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                To empower students with the clarity, discipline, and responsibility required to navigate the complexities of the modern workforce, ensuring they are not just hired, but valued.
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <div className="h-full p-8 border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-background to-secondary/5 hover:-translate-y-2 hover:shadow-xl group">
                            <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Compass className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                To be the premier bridge between academic institutions and the corporate world, creating a generation of professionals who lead with integrity, competence, and purpose.
                            </p>
                        </div>
                    </ScrollAnimation>
                </section>

                {/* Core Values */}
                <section className="mb-24">
                    <ScrollAnimation>
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Clarity",
                                    icon: Compass,
                                    color: "text-cyan-400",
                                    bg: "bg-cyan-500/10",
                                    desc: "Understanding oneself and the market. Making informed decisions rather than following the herd."
                                },
                                {
                                    title: "Discipline",
                                    icon: Shield,
                                    color: "text-purple-400",
                                    bg: "bg-purple-500/10",
                                    desc: "The consistent adherence to standards. It is the bridge between goals and accomplishment."
                                },
                                {
                                    title: "Responsibility",
                                    icon: Users,
                                    color: "text-green-400",
                                    bg: "bg-green-500/10",
                                    desc: "Taking ownership of one's career and life choices. Accountability is the mark of a professional."
                                }
                            ].map((value, i) => (
                                <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                                    <div className={`w-14 h-14 rounded-xl ${value.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <value.icon className={`w-7 h-7 ${value.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollAnimation>
                </section>

                {/* The Name */}
                <section className="mb-24">
                    <ScrollAnimation>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why "Hayagreeva"?</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                                    In ancient tradition, <strong>Hayagreeva</strong> is the embodiment of knowledge and wisdom. We chose this name to reflect our commitment to true learning—knowledge that removes darkness and empowers action.
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Skillspheree represents the holistic ecosystem we create around the student, encompassing technical skills, and life skills.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-primary/10 p-8 rounded-full animate-pulse">
                                <Award className="w-24 h-24 text-primary" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>

                {/* CTA */}
                <ScrollAnimation>
                    <div className="text-center py-12 border-t border-border">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start the Journey?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                            Whether you are a student, a college administrator, or a potential mentor, there is a place for you in our mission.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg hover:shadow-primary/25" asChild>
                                <Link href="/courses">Explore Our Framework</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-bold hover:bg-white/5" asChild>
                                <Link href="/#contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </main>
        </div>
    )
}
