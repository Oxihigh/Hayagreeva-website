'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  ChevronRight,
  Brain,
  Target,
  ShieldCheck,
  Users,
  Briefcase,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  BookOpen,
  TrendingDown,
  AlertTriangle,
  Monitor,
  Lightbulb,
  UserCheck
} from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
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

      {/* 1. Hero Section: The Radical Reality of "The Next Chapter" */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#020817] z-10">
        {/* Hero Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0f172a] to-[#020817] z-0" />

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
              Hayagreeva Skillspheree  is a career alignment and life readiness organisation dedicated to helping colleges and young professionals make informed, conscious career decisions.
            </p>
          </ScrollAnimation>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-40">
            <Button size="lg" className="h-12 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg hover:shadow-primary/20 transition-all uppercase tracking-wide font-semibold" asChild>
              <Link href="/courses">
                Begin Your Chapter <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">The "Wicked Problem"</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
                To understand why we exist, you must understand the structural disconnect in India: the supply of degrees has outpaced the demand for skills.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
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

          {/* AI Factor */}
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white p-10 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-indigo-400/20 transition-colors"></div>

              <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-xs font-medium mb-4">
                    <Monitor className="w-3 h-3" /> 2025 Reality
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">The AI & Automation Filter</h3>
                  <p className="text-indigo-100/80 leading-relaxed mb-6">
                    Artificial Intelligence has permanently raised the bar. Traditional "bottom-rung" roles (basic coding, data entry) are being automated. The industry no longer needs "code labourers"; it needs "problem solvers".
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Competitors prefer a fresher who knows Python/LLMs over someone they have to train for 6 months.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center group-hover:bg-white/15 transition-colors">
                  <div className="text-4xl font-bold text-white mb-1">2.9 Lakh</div>
                  <div className="text-xs text-indigo-200 uppercase tracking-wider mb-4">Roles Added by GCCs</div>
                  <p className="text-xs text-indigo-100 leading-tight">
                    But only for niche skills. Generalist roles are vanishing.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* 3. Our Foundational Identity */}
      <section className="py-20 px-6 bg-secondary/30 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Column: Text & List */}
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Moving Beyond the "Placement" Myth</h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl">
                  Our work is rooted in clarity, discipline, behaviour, and responsibility—not motivation, short-term outcomes, or superficial training. While many focus on the "job," we focus on the "person" behind the career.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: 'Clarity', desc: 'Understanding yourself—your skills, behaviour, and personality—before stepping into the world.', icon: Brain },
                  { title: 'Discipline', desc: 'Developing the professional behaviour and decision-making ability required to survive and thrive.', icon: Target },
                  { title: 'Responsibility', desc: 'Transitioning consciously into work life with a sense of ownership.', icon: ShieldCheck },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-xl mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            {/* Right Column: Visual Card */}
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} direction="left">
              <div className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-border shadow-2xl text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 relative z-10">The Whole Person</h3>
                <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full relative z-10" />
                <p className="font-bold text-2xl mb-2 relative z-10">Character &gt; Skills</p>
                <p className="text-muted-foreground relative z-10">We build the foundation<br />for a 40-year career.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 3. The Program: "The Next Chapter" */}
      <section id="program" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Next Chapter (120-Hour Fusion)</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                "The Next Chapter" is a structured Career Alignment & Life Readiness Program delivered offline to college students. This isn't a one-off seminar; it is a 120-hour immersion that blends technical rigor with life-sustaining habits.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Video Placeholder */}
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} delay={0.1}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black relative aspect-video group cursor-pointer h-full min-h-[300px] hover:shadow-cyan-500/20 hover:scale-[1.01] transition-all duration-300">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent"></div>
                  </div>
                </div>
                <span className="absolute bottom-6 left-6 text-sm font-bold bg-black/60 px-3 py-1.5 rounded-lg text-white backdrop-blur-sm border border-white/10">Watch Our Vision</span>
              </div>
            </ScrollAnimation>

            {/* Right Column: Carousel Content */}
            <div className="relative">
              <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} delay={0.2}>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {[
                      {
                        phase: "PHASE 1",
                        title: "Self Awareness & Foundation",
                        desc: "Objective: Make students understand themselves before thinking about career.",
                        icon: Brain,
                        color: "text-cyan-400",
                        bg: "bg-cyan-500/10",
                      },
                      {
                        phase: "PHASE 2",
                        title: "Career Clarity & Decision Making",
                        desc: "Objective: Help students connect skills to real career options.",
                        icon: Monitor,
                        color: "text-purple-400",
                        bg: "bg-purple-500/10",
                      },
                      {
                        phase: "PHASE 3",
                        title: "Professional Development & Workplace Readiness",
                        desc: "Objective: Prepare students to survive and grow in real work environments.",
                        icon: Briefcase,
                        color: "text-pink-400",
                        bg: "bg-pink-500/10",
                      },
                      {
                        phase: "PHASE 4",
                        title: "Placement Readiness & Execution",
                        desc: "Objective: Prepare students for interviews and hiring reality.",
                        icon: CheckCircle2,
                        color: "text-emerald-400",
                        bg: "bg-emerald-500/10",
                      }
                    ].map((item, index) => (
                      <CarouselItem key={index} className="pl-4 basis-full">
                        <div className="p-8 h-full rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col min-h-[300px] justify-center hover:bg-[#111827] hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                          <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                            <item.icon className={`w-8 h-8 ${item.color}`} />
                          </div>
                          <div className="text-xs font-bold text-white/50 mb-3 tracking-wider">{item.phase}</div>
                          <h3 className="font-bold text-2xl mb-3 text-white">{item.title}</h3>
                          <p className="text-base text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-end gap-2 mt-4">
                    <CarouselPrevious className="static translate-y-0 translate-x-0" />
                    <CarouselNext className="static translate-y-0 translate-x-0" />
                  </div>
                </Carousel>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Competitive Edge */}
      <section className="py-20 px-6 bg-secondary/10 border-y border-border/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Competitive Edge: Industry-Led Mentorship</h2>
                <p className="text-lg md:text-xl text-muted-foreground">
                  We do not use generic trainers. We engage facilitators who bring real-world experience and depth in their specific domain.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Experience", desc: "A minimum of 3+ years of relevant professional or domain experience." },
                  { title: "Background", desc: "Mentors who have worked in real-world professional environments, leadership, or practice." },
                  { title: "Methodology", desc: "Trainers who connect concepts to real-life examples and value long-term development over quick results." }
                ].map((standard, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-xl mb-1">{standard.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{standard.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} direction="left">
              <div className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-border shadow-2xl text-center group hover:scale-[1.02] hover:shadow-primary/20 transition-transform duration-300">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Users className="w-10 h-10 text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Our Trainer Standards</h3>
                <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full" />
                <p className="font-bold text-2xl mb-2">3+ Years Experience</p>
                <p className="text-muted-foreground">Real-world practitioners.<br />Not just speakers.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 5. Institutional Partnership Model */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Institutional Partnership Model</h2>
              <p className="text-xl md:text-2xl text-primary font-medium tracking-wide">Offline Excellence on Your Campus</p>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg md:text-xl">
                We do not approach students individually; we partner with colleges to integrate "The Next Chapter" into the institutional framework.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Structured Engagement", desc: "Classes happen offline in the college to maintain academic seriousness.", icon: BookOpen },
              { title: "Professional Conduct", desc: "All trainers adhere to strict standards, including respect for students, institutions, and ethical behaviour.", icon: ShieldCheck },
              { title: "Zero Personal Promotion", desc: "Our trainers are prohibited from personal sales or pitching during sessions; the focus remains 100% on the student’s development.", icon: Users }
            ].map((item, i) => (
              <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS} key={i} delay={i * 0.1}>
                <div className="bg-secondary/30 p-8 rounded-2xl border border-border hover:border-primary/50 transition-all text-center h-full hover:-translate-y-2 hover:shadow-xl duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Are NOT */}


      {/* 7. Closing Invitation */}
      <section className="py-24 px-6 bg-gradient-to-r from-primary to-slate-950 text-white text-center relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation disableAnimation={DISABLE_ANIMATIONS}>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              Built by people who take responsibility for shaping young minds seriously.
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light">
              We invite colleges and mentors who value integrity to explore a meaningful professional association with us.
            </p>
            <Button size="lg" className="h-14 px-10 text-base bg-white text-primary hover:bg-blue-50 transition-all font-bold tracking-wide rounded-full shadow-2xl hover:scale-105" asChild>
              <Link href="mailto:contact@hayagreeva.com">Connect for Partnership</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 bg-background">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-foreground font-semibold">Hayagreeva Skillspheree</p>
            <p className="text-xs text-muted-foreground mt-0.5">© 2026 | A brand of Bareddy's Private Limited</p>
          </div>
          <div className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
            Clarity • Discipline • Responsibility
          </div>
        </div>
      </footer>
    </div>
  )
}