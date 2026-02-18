'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, BookOpen, Brain, Briefcase, Heart, Monitor, CheckCircle, XCircle, Users, Compass, TrendingUp, Zap, Target, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { RealityCheckSection } from '@/components/reality-check-section'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-transparent text-foreground overflow-hidden">
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
                The Next Chapter
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
              <span className="text-white font-medium">Career Alignment & Life Readiness</span>
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 p-8 rounded-[25px] backdrop-blur-xl relative overflow-hidden border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
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
                  title: "The Inner Audit",
                  subtitle: "Self-Awareness & Foundationn",
                  desc: "Deep dive into personality, strengths, and weaknesses. Understanding 'Who am I?' before 'What should I do?'",
                  icon: Brain,
                  color: "text-cyan-400",
                  bg: "bg-cyan-500/10",
                  border: "hover:border-cyan-500/50"
                },
                {
                  phase: "02",
                  title: "Strategic Mapping",
                  subtitle: "Career Clarity & Decision Making",
                  desc: "Mapping specific skills to real-world career paths. Moving from confusion to conviction.",
                  icon: Compass,
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "hover:border-purple-500/50"
                },
                {
                  phase: "03",
                  title: "Corporate Fluency",
                  subtitle: "Workplace Readiness & Prof. Dev",
                  desc: "Surviving and thriving in corporate environments. Corporate etiquette, communication, and adaptability.",
                  icon: TrendingUp,
                  color: "text-pink-400",
                  bg: "bg-pink-500/10",
                  border: "hover:border-pink-500/50"
                },
                {
                  phase: "04",
                  title: "Market Mastery",
                  subtitle: "Placement Execution & Interview Mastery",
                  desc: "The final sprint. Resume building, mock interviews, and cracking the hiring process.",
                  icon: CheckCircle,
                  color: "text-emerald-400",
                  bg: "bg-emerald-500/10",
                  border: "hover:border-emerald-500/50"
                }
              ].map((module, i) => (
                <div key={i} className={`group relative p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${module.border}`}>
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

        {/* B2B Model Journey */}
        <section className="mb-32 relative">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">The B2B Institutional Journey</h2>
              <p className="text-slate-400">Partnering with colleges to transform entire cohorts.</p>
            </div>

            {/* Desktop View - Image */}
            <div className="hidden md:block relative w-full mt-12 px-4">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/The B2B Institutional Journey - visual selection.png"
                  alt="The B2B Institutional Journey Diagram"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Mobile View (Vertical Stack) */}
            <div className="md:hidden space-y-12 relative pl-8 border-l-2 border-primary/20 ml-4 mt-12">
              {[
                { title: "Unprepared Graduates", desc: "Lacking essential workforce skills.", icon: Brain, color: "text-slate-400", bg: "from-slate-500/20" },
                { title: "Consultation", desc: "Alignment with academic calendar.", icon: Layers, color: "text-blue-400", bg: "from-blue-500/20" },
                { title: "Integration", desc: "Seamless on-campus delivery.", icon: Zap, color: "text-purple-400", bg: "from-purple-500/20" },
                { title: "Selection", desc: "Curating committed groups.", icon: Users, color: "text-pink-400", bg: "from-pink-500/20" },
                { title: "Workforce Ready", desc: "Possessing essential skills.", icon: Target, color: "text-emerald-400", bg: "from-emerald-500/20" }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-black bg-${item.color.split('-')[1]}-500`}></div>
                  <div className="flex gap-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.bg} to-transparent border border-white/10 flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </section>

        {/* Video Placeholder */}
        {/* Video Placeholder */}
        <section className="h-[60vh] md:h-screen w-full bg-black flex items-center justify-center relative overflow-hidden mb-32 rounded-3xl border border-white/5">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/sample_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>
        </section>

        {/* The Reality Filter (Replaces Anti-Motivational) */}
        <ScrollAnimation>
          <RealityCheckSection />
        </ScrollAnimation>

        {/* Call to Action */}
        <ScrollAnimation>
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
      </main>
    </div>
  )
}
