'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, BookOpen, Brain, Briefcase, Heart, Monitor, CheckCircle, XCircle, Users, Compass, TrendingUp, Zap, Target, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">

        {/* Hero Section */}
        <ScrollAnimation delay={0.1}>
          <div className="text-center mb-24 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-blue-300 drop-shadow-2xl">
                The Course Curriculum
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
              The Next Chapter: <span className="text-white font-medium">Career Alignment & Life Readiness</span>
            </p>

            <div className="p-1 rounded-2xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 max-w-3xl mx-auto">
              <div className="bg-[#0b0f19] p-8 rounded-xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                <h3 className="text-2xl font-bold mb-4 text-white flex items-center justify-center gap-2">
                  <Target className="w-6 h-6 text-primary" /> Depth Over Hype
                </h3>
                <p className="text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  At Hayagreeva Skillspheree, we believe that the transition from a student to a professional is the most critical "Next Chapter". We are not a typical "Placement Agency" or a "Motivational Workshop". We build character.
                </p>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* 4-Phase Curriculum Cards */}
        <section className="mb-32">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                The 4-Phase Curriculum
              </h2>
              <p className="text-slate-400">A structured path to professional excellence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "01",
                  title: "Self Awareness",
                  subtitle: "& Foundation",
                  desc: "Deep dive into personality, strengths, and weaknesses. Understanding 'Who am I?' before 'What should I do?'",
                  icon: Brain,
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                  border: "hover:border-cyan-500/50"
                },
                {
                  phase: "02",
                  title: "Career Clarity",
                  subtitle: "& Decision Making",
                  desc: "Mapping specific skills to real-world career paths. Moving from confusion to conviction.",
                  icon: Compass,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "hover:border-purple-500/50"
                },
                {
                  phase: "03",
                  title: "Workplace Readiness",
                  subtitle: "& Professional Dev",
                  desc: "Surviving and thriving in corporate environments. Corporate etiquette, communication, and adaptability.",
                  icon: TrendingUp,
                  color: "text-pink-400",
                  bg: "bg-pink-500/10",
                  border: "hover:border-pink-500/50"
                },
                {
                  phase: "04",
                  title: "Placement Execution",
                  subtitle: "& Interview Mastery",
                  desc: "The final sprint. Resume building, mock interviews, and cracking the hiring process.",
                  icon: CheckCircle,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  border: "hover:border-emerald-500/50"
                }
              ].map((module, i) => (
                <div key={i} className={`group relative p-6 rounded-2xl bg-[#111827]/50 border border-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${module.border}`}>
                  <div className={`absolute top-4 right-4 text-5xl font-black text-white/5 group-hover:text-white/10 transition-colors`}>
                    {module.phase}
                  </div>
                  <div className={`w-14 h-14 rounded-xl ${module.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <module.icon className={`w-7 h-7 ${module.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{module.title}</h3>
                  <p className={`text-sm font-semibold ${module.color} mb-4 uppercase tracking-wider`}>{module.subtitle}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* The "Anti-Motivational" Philosophy */}
        <section className="mb-32">
          <ScrollAnimation>
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-red-500/20 via-transparent to-green-500/20">
              <div className="bg-[#0b0f19] rounded-[22px] p-8 md:p-12 border border-white/5 overflow-hidden">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">The "Anti-Motivational" Philosophy</h2>

                <div className="grid md:grid-cols-2 gap-12 relative">
                  {/* VS Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-16 h-16 bg-[#0b0f19] rounded-full border-2 border-white/10 items-center justify-center font-black text-white shadow-xl">
                    VS
                  </div>

                  {/* What We Avoid */}
                  <div className="space-y-6 relative group">
                    <div className="absolute inset-0 bg-red-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-bold text-red-400 flex items-center gap-3">
                      <XCircle className="w-8 h-8" /> What We Avoid
                    </h3>
                    <ul className="space-y-4">
                      {["Motivational Hype", "False Placement Promises", "Generic Internet Content", "Short-term Shortcuts"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 group-hover:text-red-200/80 transition-colors bg-red-950/20 p-3 rounded-lg border border-red-500/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Provide */}
                  <div className="space-y-6 relative group">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-bold text-emerald-400 flex items-center gap-3 md:justify-end">
                      What We Provide <CheckCircle className="w-8 h-8" />
                    </h3>
                    <ul className="space-y-4">
                      {["Substantial Domain Depth", "True Industrial Readiness", "Reflection-Based Learning", "Long-term Career Growth"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-400 group-hover:text-emerald-200/80 transition-colors bg-emerald-950/20 p-3 rounded-lg border border-emerald-500/10 md:flex-row-reverse md:text-right">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* B2B Model Journey */}
        <section className="mb-32">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 text-white">The B2B Institutional Journey</h2>
              <p className="text-slate-400">Partnering with colleges to transform entire cohorts.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -z-10"></div>

              {[
                { step: "01", title: "Consultation", desc: "Alignment with academic calendar." },
                { step: "02", title: "Integration", desc: "Seamless on-campus delivery." },
                { step: "03", title: "Selection", desc: "Curating committed groups." },
                { step: "04", title: "Outcome", desc: "Day-one workforce ready." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="w-14 h-14 rounded-full bg-[#0b0f19] border-4 border-primary/20 flex items-center justify-center font-bold text-primary mb-6 group-hover:scale-110 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all duration-300 z-10 bg-background">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* Call to Action */}
        <ScrollAnimation>
          <div className="relative rounded-3xl overflow-hidden p-12 text-center border border-white/10">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md -z-10"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Mission</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-black/40 border border-white/5 hover:border-primary/50 transition-all text-left">
                <h3 className="text-xl font-bold text-white mb-2">For College Administrators</h3>
                <p className="text-slate-400 mb-6 text-sm">Empower your institution with a curriculum that delivers real results.</p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold" asChild>
                  <Link href="mailto:admin@hayagreeva.com">Partner With Us</Link>
                </Button>
              </div>
              <div className="p-8 rounded-2xl bg-black/40 border border-white/5 hover:border-purple-500/50 transition-all text-left">
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
