'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, BookOpen, Brain, Briefcase, Heart, Monitor, CheckCircle, XCircle, Users } from 'lucide-react'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}


      <main className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Core Manifesto */}
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Course Curriculum</h1>
            <p className="text-xl text-primary mb-6 font-light">The Next Chapter: Career Alignment & Life Readiness</p>
            <div className="p-6 bg-secondary/20 rounded-2xl border border-white/5 text-left max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-bold mb-3">Depth Over Hype</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                At Hayagreeva Skillspheree, we believe that the transition from a student to a professional is the most critical "Next Chapter" in a person's life. We are not a typical "Placement Agency" or a "Motivational Workshop" provider.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium">Realizing true potential</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium">Corporate temperament</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium">Disciplined mindset</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span className="text-xs font-medium">Taking ownership</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* 120-Hour Framework */}
        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-primary" />
              The 120-Hour Integrated Framework
            </h2>
            <p className="text-base text-muted-foreground mb-6">
              A comprehensive curriculum delivered entirely offline on college campuses.
            </p>

            <div className="grid gap-4">
              {[
                {
                  title: "Technical Foundations",
                  desc: "Tailored content for core branches (Engineering, Science, Education, Finance). Bridging theory vs industry objectives.",
                  icon: Monitor
                },
                {
                  title: "Soft Skills & Etiquette",
                  desc: "Developing the communication and social intelligence required for high-stakes professional environments.",
                  icon: Users
                },
                {
                  title: "Aptitude & Logic",
                  desc: "Strengthening cognitive abilities and analytical thinking for recruitment and real-world problem solving.",
                  icon: Brain
                },
                {
                  title: "Nutritional Balance",
                  desc: "Unique module addressing physical health and energy management for sustained performance.",
                  icon: Heart
                },
                {
                  title: "Behavioral Readiness",
                  desc: "Helping students understand career realities and transition consciously into work life.",
                  icon: Briefcase
                }
              ].map((module, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <module.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1">{module.title}</h3>
                    <p className="text-xs text-muted-foreground">{module.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Anti-Motivational Philosophy */}
        <ScrollAnimation>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">The "Anti-Motivational" Philosophy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-red-900/10 border border-red-500/20">
                <h3 className="text-lg font-bold text-red-200 mb-4 flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> What We Avoid
                </h3>
                <ul className="space-y-3 text-red-100/70 text-sm">
                  <li>• Motivational Hype</li>
                  <li>• Placement Promises</li>
                  <li>• Generic Slides/Internet Content</li>
                  <li>• Short-term Shortcuts</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-900/10 border border-green-500/20">
                <h3 className="text-lg font-bold text-green-200 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> What We Provide
                </h3>
                <ul className="space-y-3 text-green-100/70 text-sm">
                  <li>• Substantial Domain Depth</li>
                  <li>• True Industrial Readiness</li>
                  <li>• Reflection-Based, Discussion-Heavy Classrooms</li>
                  <li>• Long-term Career Development</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* B2B Model */}
        <ScrollAnimation>
          <div className="bg-gradient-to-br from-secondary/50 to-background p-8 rounded-3xl border border-border">
            <h2 className="text-2xl font-bold mb-4">The B2B Institutional Model</h2>
            <p className="text-muted-foreground mb-6 text-sm">
              We do not recruit individual students; we partner with forward-thinking colleges to transform their entire cohorts.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-lg border border-white/5">
                <span className="text-primary font-bold block mb-0.5 text-sm">01 Consultation</span>
                <span className="text-[10px] text-muted-foreground">Alignment with academic calendar.</span>
              </div>
              <div className="p-4 bg-background rounded-lg border border-white/5">
                <span className="text-primary font-bold block mb-0.5 text-sm">02 Integration</span>
                <span className="text-[10px] text-muted-foreground">On-campus delivery.</span>
              </div>
              <div className="p-4 bg-background rounded-lg border border-white/5">
                <span className="text-primary font-bold block mb-0.5 text-sm">03 Selection</span>
                <span className="text-[10px] text-muted-foreground">Committed participant groups.</span>
              </div>
              <div className="p-4 bg-background rounded-lg border border-white/5">
                <span className="text-primary font-bold block mb-0.5 text-sm">04 Outcome</span>
                <span className="text-[10px] text-muted-foreground">Day-one workforce ready.</span>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Join Mission */}
        <ScrollAnimation>
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Join the Mission</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border border-border rounded-xl">
                <h3 className="font-bold mb-1 text-sm">For College Administrators</h3>
                <p className="text-xs text-muted-foreground mb-3">Prepare your students for reality.</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="mailto:admin@hayagreeva.com">Partner With Us</Link>
                </Button>
              </div>
              <div className="p-5 border border-border rounded-xl">
                <h3 className="font-bold mb-1 text-sm">For Professional Mentors</h3>
                <p className="text-xs text-muted-foreground mb-3">If you value depth over noise.</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href="mailto:mentors@hayagreeva.com">Join the Team</Link>
                </Button>
              </div>
            </div>
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
