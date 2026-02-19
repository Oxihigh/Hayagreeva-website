'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, BookOpen, Brain, Briefcase, Heart, Monitor, CheckCircle, XCircle, Users, Compass, TrendingUp, Zap, Target, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RealityCheckSection } from '@/components/reality-check-section'
import { B2BAnimatedFlow } from '@/components/b2b-animated-flow'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">

      {/* --- TOP: BLUE HERO SECTION --- */}
      <section className="bg-[#003676] pt-24 pb-16 md:pt-32 md:pb-24 relative rounded-b-[40px] md:rounded-b-[80px] overflow-hidden shrink-0">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollAnimation delay={0.1}>
            <div className="text-center mb-12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-block"
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
                  The Next Chapter
                </h1>
              </motion.div>
              <p className="text-xl md:text-2xl text-blue-100 mb-12 font-light max-w-2xl mx-auto">
                <span className="font-medium">Career Alignment & Life Readiness</span>
              </p>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white/10 p-8 rounded-[25px] backdrop-blur-xl relative overflow-hidden border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 text-white flex items-center justify-center gap-2">
                    <Target className="w-6 h-6 text-white" /> Depth Over Hype
                  </h3>
                  <p className="text-blue-50 leading-relaxed max-w-2xl mx-auto font-light">
                    At Hayagreeva Skillspheree, we believe that the transition from a student to a professional is the most critical "Next Chapter". We are not a typical "Placement Agency" or a "Motivational Workshop". We build character.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- MIDDLE: WHITE CONTENT SECTION --- */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">

        {/* 4-Phase Curriculum Cards */}
        <section className="mb-32">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#003676]">
                The 4-Phase Curriculum
              </h2>
              <p className="text-slate-600 text-lg">A structured path to professional excellence.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  phase: "01",
                  title: "The Inner Audit",
                  subtitle: "Self-Awareness & Foundation",
                  desc: "Deep dive into personality, strengths, and weaknesses. Understanding 'Who am I?' before 'What should I do?'",
                  icon: Brain,
                  color: "text-cyan-600",
                  bg: "bg-cyan-50",
                  border: "border-cyan-100",
                  hoverBorder: "group-hover:border-cyan-500",
                  hoverShadow: "group-hover:shadow-cyan-100"
                },
                {
                  phase: "02",
                  title: "Strategic Mapping",
                  subtitle: "Career Clarity & Decision Making",
                  desc: "Mapping specific skills to real-world career paths. Moving from confusion to conviction.",
                  icon: Compass,
                  color: "text-purple-600",
                  bg: "bg-purple-50",
                  border: "border-purple-100",
                  hoverBorder: "group-hover:border-purple-500",
                  hoverShadow: "group-hover:shadow-purple-100"
                },
                {
                  phase: "03",
                  title: "Corporate Fluency",
                  subtitle: "Workplace Readiness & Prof. Dev",
                  desc: "Surviving and thriving in corporate environments. Corporate etiquette, communication, and adaptability.",
                  icon: TrendingUp,
                  color: "text-pink-600",
                  bg: "bg-pink-50",
                  border: "border-pink-100",
                  hoverBorder: "group-hover:border-pink-500",
                  hoverShadow: "group-hover:shadow-pink-100"
                },
                {
                  phase: "04",
                  title: "Market Mastery",
                  subtitle: "Placement Execution & Interview Mastery",
                  desc: "The final sprint. Resume building, mock interviews, and cracking the hiring process.",
                  icon: CheckCircle,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                  border: "border-emerald-100",
                  hoverBorder: "group-hover:border-emerald-500",
                  hoverShadow: "group-hover:shadow-emerald-100"
                }
              ].map((module, i) => (
                <div key={i} className={`group relative p-6 rounded-2xl bg-white border ${module.border} shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${module.hoverBorder}`}>
                  <div className={`absolute top-4 right-4 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors`}>
                    {module.phase}
                  </div>
                  <div className={`w-14 h-14 rounded-xl ${module.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <module.icon className={`w-7 h-7 ${module.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{module.title}</h3>
                  <p className={`text-sm font-semibold ${module.color} mb-4 uppercase tracking-wider`}>{module.subtitle}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* B2B Model Journey */}
        <ScrollAnimation>
          <B2BAnimatedFlow />
        </ScrollAnimation>

        {/* Video Placeholder */}
        <section className="h-[60vh] md:h-screen w-full bg-slate-900 flex items-center justify-center relative overflow-hidden mb-32 rounded-3xl shadow-2xl">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/sample_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </section>

        {/* The Reality Filter (Replaces Anti-Motivational) */}
        <ScrollAnimation>
          <RealityCheckSection lightMode={true} />
        </ScrollAnimation>

      </main>

      {/* --- BOTTOM: BLUE CTA SECTION --- */}
      <section className="bg-[#003676] py-24 relative overflow-hidden shrink-0 rounded-t-[40px] md:rounded-t-[80px] -mt-16 pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[100px] opacity-30"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollAnimation>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the Mission</h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
                <div className="p-8 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-left backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">For College Administrators</h3>
                  <p className="text-blue-100 mb-6 text-sm">Empower your institution with a curriculum that delivers real results.</p>
                  <Button className="w-full bg-white text-[#003676] hover:bg-blue-50 font-bold" asChild>
                    <Link href="mailto:admin@hayagreeva.com">Partner With Us</Link>
                  </Button>
                </div>
                <div className="p-8 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-left backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">For Professional Mentors</h3>
                  <p className="text-blue-100 mb-6 text-sm">Share your industry expertise and shape the next generation.</p>
                  <Button variant="outline" className="w-full border-white/40 text-white hover:bg-white hover:text-[#003676] font-bold" asChild>
                    <Link href="mailto:mentors@hayagreeva.com">Join the Team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

    </div>
  )
}
