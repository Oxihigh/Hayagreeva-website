'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ChevronRight,
  TrendingDown,
  AlertTriangle,
  Users,
  Monitor
} from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { FAQSection } from '@/components/faq-section'
import { motion } from 'framer-motion'

export default function Home() {
  const DISABLE_ANIMATIONS = false
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground overflow-hidden relative">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[100px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-10">
        <div className="absolute inset-0 bg-transparent z-0" />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} direction="up" delay={0.1}>
            <motion.div
              initial={DISABLE_ANIMATIONS ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: DISABLE_ANIMATIONS ? 0 : 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-2 filter drop-shadow-2xl">
                We Don't <span className="font-serif italic font-light text-blue-200">Motivate</span>.
                <br />
                We <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 relative inline-block">
                  Prepare
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </span>.
              </h1>
            </motion.div>
          </ScrollAnimation>

          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} direction="up" delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4 font-light">
              Hayagreeva Skillspheree is a career alignment and life readiness organisation dedicated to helping colleges and young professionals make informed, conscious career decisions.
            </p>
          </ScrollAnimation>
        </div>

        <div className="absolute bottom-32 left-0 right-0 flex justify-center z-20">
          <Button size="lg" className="h-12 px-8 text-base bg-white text-primary-foreground hover:bg-white/90 rounded-full shadow-lg hover:shadow-white/20 transition-all uppercase tracking-wide font-semibold" asChild>
            <Link href="/courses">
              Begin Your Chapter <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* 2. The Context / Wicked Problem */}
      <section className="py-20 px-6 bg-background/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
                The Context
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">The <span className="text-red-500">"Wicked Problem"</span></h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                To understand why we exist, you must understand the structural disconnect in India: the supply of degrees has outpaced the demand for skills.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12">
            {/* The Employability Paradox */}
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
              <div className="h-full border border-border p-8 rounded-2xl bg-secondary/10 hover:bg-secondary/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 cursor-default group">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                  The Employability Paradox
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-background/50 rounded-xl border border-border shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground text-lg">
                      <Users className="w-4 h-4 text-primary" /> Engineering Crisis
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      1.5 million engineers graduate annually, but <strong>only 10-17% are hired into core roles</strong>. The rest are underemployed or unemployed.
                    </p>
                  </div>
                  <div className="p-4 bg-background/50 rounded-xl border border-border shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground text-lg">
                      <TrendingDown className="w-4 h-4 text-red-500" /> Hiring Decline
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hiring intent for freshers in IT has dropped drastically from <strong>600,000 (2022)</strong> to under <strong>150,000 (2024)</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Why it's Wicked - Condensed */}
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} delay={0.1}>
              <div className="h-full border border-border p-8 rounded-2xl bg-secondary/10 hover:bg-secondary/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 cursor-default flex flex-col justify-center group">
                <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  Why it's "Wicked"
                </h3>
                <ul className="space-y-4">
                  {[
                    "The Experience Paradox: Need job for experience, need experience for job.",
                    "Outdated Curricula: Colleges teaching obsolete tech.",
                    "The 'ATS Monster': 80% resumes rejected by bots.",
                    "Soft Skill Deficit: 52% falter due to poor adaptability."
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground items-start">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 3. Video Placeholder (New) */}
      <section className="h-screen bg-transparent flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50 transition-colors"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center pl-1 shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-[14px] border-t-transparent border-l-[24px] border-l-white border-b-[14px] border-b-transparent"></div>
          </div>
        </div>
        <div className="absolute bottom-10 text-center w-full">
          <span className="text-lg font-bold bg-black/60 px-6 py-2 rounded-full text-white backdrop-blur-sm border border-white/10">Watch Our Vision</span>
        </div>
      </section>

      {/* 4. AI & Automation Filter */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <div className="bg-black/40 backdrop-blur-xl text-white p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-primary/20 transition-colors"></div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-200 text-xs font-medium mb-4">
                    <Monitor className="w-3 h-3" /> 2025 Reality
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">The AI & Automation Filter</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Artificial Intelligence has permanently raised the bar. Traditional "bottom-rung" roles (basic coding, data entry) are being automated. The industry no longer needs "code labourers"; it needs "problem solvers".
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Competitors prefer a fresher who knows Python/LLMs over someone they have to train for 6 months.
                  </p>
                </div>
                <div className="bg-[#003676] backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center shadow-lg">
                  <div className="text-4xl font-bold text-white mb-1">2.9 Lakh</div>
                  <div className="text-xs text-blue-200 uppercase tracking-wider mb-4 font-bold">Roles Added by GCCs</div>
                  <p className="text-sm text-blue-100 leading-tight font-light">
                    But only for niche skills. Generalist roles are vanishing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 5. Closing Invitation */}
      <section className="py-24 px-6 text-white text-center relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-[3.0] tracking-tight">
              Built by people who take responsibility for shaping young minds seriously.
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light">
              We invite colleges and mentors who value integrity to explore a meaningful professional association with us.
            </p>
            <Button size="lg" className="h-14 px-10 text-base bg-white text-primary-foreground hover:bg-blue-50 transition-all font-bold tracking-wide rounded-full shadow-2xl hover:scale-105" asChild>
              <Link href="mailto:contact@hayagreeva.com">Connect for Partnership</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <FAQSection />

      {/* 7. Join the Mission */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
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
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="border-t border-border py-8 px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground font-semibold">Hayagreeva Skillspheree</p>
            <p className="text-xs text-muted-foreground mt-0.5">© 2026 | A brand of Bareddy's Private Limited</p>
          </div>
          <div className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
            Clarity • Discipline • Responsibility
          </div>
        </div>
      </footer> */}
    </div>
  )
}