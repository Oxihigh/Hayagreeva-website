'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react'
import Link from 'next/link'

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}


            <main className="max-w-3xl mx-auto px-6 pt-24 pb-12">
                <ScrollAnimation>
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-3">Our Mentor Standards</h1>
                        <p className="text-base text-muted-foreground max-w-xl mx-auto">
                            We believe that students should only learn from those who have truly "been there".
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Standards Grid */}
                <ScrollAnimation>
                    <div className="grid md:grid-cols-2 gap-4 mb-12">
                        <div className="p-4 bg-card border border-border rounded-xl">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                <span className="font-bold text-primary text-base">7+</span>
                            </div>
                            <h3 className="text-lg font-bold mb-1">Years of Experience</h3>
                            <p className="text-xs text-muted-foreground">Every facilitator must have at least 7 years of relevant professional or domain experience. No freshers teaching freshers.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-xl">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                <Briefcase className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Real-World Context</h3>
                            <p className="text-xs text-muted-foreground">Trainers must have worked in leadership or practice within industry environments, not just academic theory.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-xl">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                <GraduationCap className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Academic Seriousness</h3>
                            <p className="text-xs text-muted-foreground">We engage mentors who respect the time and structure of the institution.</p>
                        </div>
                        <div className="p-4 bg-card border border-border rounded-xl">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                <ShieldCheck className="w-4 h-4 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-1">Ethical Conduct</h3>
                            <p className="text-xs text-muted-foreground">Strict adherence to professional standards, with no personal promotion or pitching allowed during sessions.</p>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* CTA */}
                <ScrollAnimation>
                    <div className="text-center p-6 bg-secondary/20 rounded-2xl border border-white/5">
                        <h2 className="text-xl font-bold mb-2">Are you an industry leader?</h2>
                        <p className="text-xs text-muted-foreground mb-4 max-w-lg mx-auto">
                            If you take the responsibility of shaping young minds seriously and believe in responsibility over convenience, we look forward to a professional association.
                        </p>
                        <Button size="sm" asChild>
                            <Link href="mailto:mentors@hayagreeva.com">Apply as Mentor</Link>
                        </Button>
                    </div>
                </ScrollAnimation>
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
