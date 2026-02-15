'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, Target, Compass, Shield, Award, Users, Lightbulb } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="max-w-4xl mx-auto px-6 pt-24 pb-12">

                {/* Hero Section */}
                <ScrollAnimation delay={0.1}>
                    <div className="text-center mb-20">
                        <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold mb-4 tracking-wider uppercase">
                            About Us
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Bridging the Gap Between <span className="text-primary">Education</span> & <span className="text-primary">Employability</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
                            We are not just a training institute; we are a movement to reclaim the true purpose of education—transforming potential into professional excellence.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Our Story */}
                <section className="mb-24">
                    <ScrollAnimation>
                        <div className="bg-secondary/10 border border-white/5 rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Lightbulb className="w-6 h-6 text-yellow-400" />
                                Our Story
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
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
                        <div className="h-full p-8 border border-border rounded-2xl hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-secondary/5">
                            <Target className="w-10 h-10 text-red-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                To empower students with the clarity, discipline, and responsibility required to navigate the complexities of the modern workforce, ensuring they are not just hired, but valued.
                            </p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0.2}>
                        <div className="h-full p-8 border border-border rounded-2xl hover:border-primary/50 transition-colors bg-gradient-to-br from-background to-secondary/5">
                            <Compass className="w-10 h-10 text-blue-500 mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                To be the premier bridge between academic institutions and the corporate world, creating a generation of professionals who lead with integrity, competence, and purpose.
                            </p>
                        </div>
                    </ScrollAnimation>
                </section>

                {/* Core Values */}
                <section className="mb-24">
                    <ScrollAnimation>
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Clarity",
                                    icon: Compass,
                                    color: "text-cyan-400",
                                    desc: "Understanding oneself and the market. Making informed decisions rather than following the herd."
                                },
                                {
                                    title: "Discipline",
                                    icon: Shield,
                                    color: "text-purple-400",
                                    desc: "The consistent adherence to standards. It is the bridge between goals and accomplishment."
                                },
                                {
                                    title: "Responsibility",
                                    icon: Users,
                                    color: "text-green-400",
                                    desc: "Taking ownership of one's career and life choices. Accountability is the mark of a professional."
                                }
                            ].map((value, i) => (
                                <div key={i} className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all">
                                    <value.icon className={`w-8 h-8 ${value.color} mb-4`} />
                                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-relaxed">{value.desc}</p>
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
                                <h2 className="text-2xl font-bold mb-4">Why "Hayagreeva"?</h2>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    In ancient tradition, <strong>Hayagreeva</strong> is the embodiment of knowledge and wisdom. We chose this name to reflect our commitment to true learning—knowledge that removes darkness and empowers action.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Skillspheree represents the holistic ecosystem we create around the student, encompassing technical skills, and life skills.
                                </p>
                            </div>
                            <div className="flex-shrink-0 bg-primary/10 p-8 rounded-full">
                                <Award className="w-24 h-24 text-primary" />
                            </div>
                        </div>
                    </ScrollAnimation>
                </section>

                {/* CTA */}
                <ScrollAnimation>
                    <div className="text-center py-12 border-t border-border">
                        <h2 className="text-2xl font-bold mb-4">Ready to Start the Journey?</h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Whether you are a student, a college administrator, or a potential mentor, there is a place for you in our mission.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="rounded-full px-8" asChild>
                                <Link href="/courses">Explore Our Framework</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
                                <Link href="/#contact">Partner With Us</Link>
                            </Button>
                        </div>
                    </div>
                </ScrollAnimation>
            </main>
        </div>
    )
}
