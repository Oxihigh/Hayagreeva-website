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
  Lightbulb
} from 'lucide-react'
import { ScrollAnimation } from '@/components/ui/scroll-animation'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="bg-background text-foreground overflow-hidden">

      {/* 1. Hero Section: The Radical Reality of "The Next Chapter" */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center px-6 overflow-hidden bg-[#020817]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0f172a] to-[#020817] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6 pt-16">
          <ScrollAnimation direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-2">
              We Don't <span className="font-serif italic font-light text-blue-100">Motivate</span>.
              <br />
              We <span className="font-serif italic text-white relative inline-block">
                Prepare
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>.
            </h1>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-4 font-light">
              Hayagreeva Skillspheree  is a career alignment and life readiness organisation dedicated to helping colleges and young professionals make informed, conscious career decisions.
            </p>
          </ScrollAnimation>

          {/* <ScrollAnimation direction="up" delay={0.3}>
            <div className="max-w-2xl mx-auto mb-6">
              <p className="text-base md:text-lg text-white leading-relaxed max-w-3xl mx-auto mb-4 font-light">
                “If you believe in depth over hype, clarity over noise, and responsibility over convenience, your next chapter begins here.”
              </p>
            </div>
          </ScrollAnimation> */}

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="h-12 px-8 text-base bg-blue-600 text-white hover:bg-blue-500 rounded-full shadow-lg hover:shadow-blue-500/20 transition-all uppercase tracking-wide font-semibold" asChild>
              <Link href="/courses">
                Begin Your Chapter <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. The Context / Wicked Problem */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="mb-16 max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4">
                The Context
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">The "Wicked Problem"</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                To understand why we exist, you must understand the structural disconnect in India: the supply of degrees has outpaced the demand for skills.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* The Employability Paradox */}
            <ScrollAnimation>
              <div className="h-full border border-border p-8 rounded-2xl bg-secondary/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-red-500" />
                  The Employability Paradox
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-background rounded-xl border border-border shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
                      <Users className="w-4 h-4 text-blue-500" /> Engineering Crisis
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      1.5 million engineers graduate annually, but <strong>only 10-17% are hired into core roles</strong>. The rest are underemployed or unemployed.
                    </p>
                  </div>
                  <div className="p-4 bg-background rounded-xl border border-border shadow-sm">
                    <h4 className="font-semibold mb-2 flex items-center gap-2 text-foreground">
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
            <ScrollAnimation delay={0.1}>
              <div className="h-full border border-border p-8 rounded-2xl bg-secondary/10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
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
          <ScrollAnimation>
            <div className="bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-950 text-white p-10 rounded-3xl border border-indigo-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

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
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center">
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
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Moving Beyond the "Placement" Myth</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our work is rooted in clarity, discipline, behaviour, and responsibility—not motivation, short-term outcomes, or superficial training. While many focus on the "job," we focus on the "person" behind the career. We design structured, mentor-led programs that bridge the gap between academic life and real professional expectations.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Clarity', desc: 'Understanding yourself—your skills, behaviour, and personality—before stepping into the world.', icon: Brain },
              { title: 'Discipline', desc: 'Developing the professional behaviour and decision-making ability required to survive and thrive.', icon: Target },
              { title: 'Responsibility', desc: 'Transitioning consciously into work life with a sense of ownership.', icon: ShieldCheck },
            ].map((item, idx) => (
              <ScrollAnimation key={idx} delay={idx * 0.1}>
                <div className="bg-card border border-border p-8 rounded-xl hover:shadow-lg transition-all h-full text-center hover:border-primary/30">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto text-primary">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Program: "The Next Chapter" */}
      <section id="program" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Next Chapter (120-Hour Fusion)</h2>
              <p className="text-lg text-muted-foreground">
                "The Next Chapter" is a structured Career Alignment & Life Readiness Program delivered offline to college students. This isn't a one-off seminar; it is a 120-hour immersion that blends technical rigor with life-sustaining habits.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical & Core Branch Foundations",
                points: [
                  "Specific modules for Engineering (B.E./B.Tech), Science (B.Sc), Education (B.Ed), and Financial roles.",
                  "Bridging the gap between theory and industry-ready objectives."
                ]
              },
              {
                title: "Professional Behaviour & Soft Skills",
                points: [
                  "Moving away from generic motivational content or superficial activities.",
                  "Focusing on real-world professional environments and interactive, discussion-based learning."
                ]
              },
              {
                title: "Aptitude & Logical Readiness",
                points: [
                  "Developing the cognitive speed and problem-solving tools required for modern selection processes."
                ]
              },
              {
                title: "Nutritional Balance & Mental Health",
                points: [
                  "A holistic approach to ensuring students are physically and mentally prepared for the rigors of industry work."
                ]
              }
            ].map((module, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="border border-border p-8 rounded-2xl hover:bg-secondary/20 transition-colors h-full flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4 text-primary">{module.title}</h3>
                  <ul className="space-y-4">
                    {module.points.map((point, j) => (
                      <li key={j} className="flex gap-4 text-sm text-foreground/80 leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Competitive Edge */}
      <section className="py-20 px-6 bg-secondary/10 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Our Competitive Edge: Industry-Led Mentorship</h2>
                <p className="text-lg text-muted-foreground">
                  We do not use generic trainers. We engage facilitators who bring real-world experience and depth in their specific domain.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { title: "Experience", desc: "A minimum of 7+ years of relevant professional or domain experience." },
                  { title: "Background", desc: "Mentors who have worked in real-world professional environments, leadership, or practice." },
                  { title: "Methodology", desc: "Trainers who connect concepts to real-life examples and value long-term development over quick results." }
                ].map((standard, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg mb-1">{standard.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{standard.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left">
              <div className="bg-gradient-to-br from-card to-background p-10 rounded-3xl border border-border shadow-2xl text-center">
                <div className="w-24 h-24 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Our Trainer Standards</h3>
                <div className="w-16 h-1 bg-primary mx-auto my-6 rounded-full" />
                <p className="font-bold text-xl mb-2">7+ Years Experience</p>
                <p className="text-muted-foreground">Real-world practitioners.<br />Not just speakers.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 5. Institutional Partnership Model */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">Institutional Partnership Model</h2>
              <p className="text-xl text-primary font-medium tracking-wide">Offline Excellence on Your Campus</p>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
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
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="bg-secondary/30 p-8 rounded-2xl border border-border hover:border-primary/50 transition-all text-center h-full hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What We Are NOT */}
      <section className="py-20 px-6 bg-red-50/10 dark:bg-red-950/10 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What We Are NOT</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">To maintain the integrity of our program, we are transparent about what we do and what we do not do</p>
            </div>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "No Motivational Hype", desc: "We don't focus on empty speaking without substance." },
              { title: "No False Promises", desc: "We do not promise placements, salaries, or shortcuts." },
              { title: "No Generic Content", desc: "We do not use copied or internet-sourced content; our curriculum is built for depth." },
              { title: "No Slides-Only Teaching", desc: "We rely on application and discussion, not just presentation slides." }
            ].map((item, i) => (
              <ScrollAnimation key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-background border border-red-200/20 shadow-sm hover:shadow-md transition-all text-center h-full group">
                  <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Closing Invitation */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-950 to-slate-950 text-white text-center relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight tracking-tight">
              Built by people who take responsibility for shaping young minds seriously.
            </h2>
            <p className="text-lg md:text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto font-light">
              We invite colleges and mentors who value integrity to explore a meaningful professional association with us.
            </p>
            <Button size="lg" className="h-14 px-10 text-base bg-white text-blue-950 hover:bg-blue-50 transition-all font-bold tracking-wide rounded-full shadow-2xl hover:scale-105" asChild>
              <Link href="mailto:contact@hayagreeva.com">Connect for Partnership</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>

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
