'use client'

import { Button } from '@/components/ui/button'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ArrowLeft, BookOpen, Brain, Briefcase, Heart, Monitor, CheckCircle, XCircle, Users, Compass, TrendingUp, Zap, Target, Layers } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { B2BAnimatedFlow } from '@/components/b2b-animated-flow'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">

      {/* --- TOP: HERO IMAGE SECTION --- */}
      <section className="relative w-full pt-34 pb-16 md:pt-52 md:pb-48 overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shrink-0">
        {/* Background Image Element */}
        <div className="absolute inset-0 z-0">
          <img
            src="/course landing page.png"
            alt="Courses Landing Background"
            className="w-full h-full object-cover object-top opacity-98"
          />
          <div className="absolute inset-0 bg-[#003676]/60 mix-blend-multiply"></div>
        </div>

        {/* Restored Content */}
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
              <p className="text-xl md:text-2xl text-blue-100 mb-6 font-light max-w-2xl mx-auto drop-shadow-md">
                <span className="font-medium">Career Alignment & Life Readiness</span>
              </p>

              <p className="text-blue-50 text-lg leading-relaxed max-w-3xl mx-auto font-light drop-shadow-md px-4">
                At Hayagreeva Skillspheree, we believe that the transition from a student to a professional is the most critical "Next Chapter". We are not a typical "Placement Agency" or a "Motivational Workshop". We build character.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* --- MIDDLE: WHITE CONTENT SECTION --- */}
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">

        {/* 4-Phase Curriculum Cards */}
        <section className="mb-32">
          {/* <ScrollAnimation> */}
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
                title: "IDENTITY. CLARITY. FOUNDATION.",
                subtitle: "The Inner Audit",
                desc: "Psychological and strategic breakdown of who you are — your strengths, behavior patterns, values, and untapped potential. We don’t ask “What job do you want?” We ask, “Who are you becoming?",
                outcomes: [
                  "Absolute clarity about your strengths",
                  "Defined growth areas with action plans",
                  "A strong personal foundation to build your career on"
                ],
                icon: Brain,
                color: "text-cyan-600",
                bg: "bg-cyan-50",
                border: "border-cyan-100",
                hoverBorder: "group-hover:border-cyan-500",
                hoverShadow: "group-hover:shadow-cyan-100",
                baseBg: "bg-white",
                outcomeBg: "bg-[#e52e2e]",
                outcomeTextColor: "text-white"
              },
              {
                phase: "02",
                title: "CONFIDENCE. COMMUNICATION. COMPETENCE.",
                subtitle: "Corporate Fluency",
                desc: "This phase builds your workplace intelligence — communication mastery, executive presence, adaptability, and performance mindset.",
                outcomes: [
                  "High-impact communication skills",
                  "Workplace confidence and professional etiquette",
                  "Resilience, adaptability, and leadership presence"
                ],
                icon: Compass,
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "border-purple-100",
                hoverBorder: "group-hover:border-purple-500",
                hoverShadow: "group-hover:shadow-purple-100",
                baseBg: "bg-white",
                outcomeBg: "bg-[#e52e2e]",
                outcomeTextColor: "text-white"
              },
              {
                phase: "03",
                title: "PRECISION. DIRECTION. DECISION POWER.",
                subtitle: "Strategic Mapping",
                desc: "Here, we translate your strengths into real-world career pathways. Every skill is mapped. Every interest is validated. Every option is analyzed.",
                outcomes: [
                  "Clear career direction aligned with your strengths",
                  "Industry relevance and market insight",
                  "A structured roadmap with measurable milestones"
                ],
                icon: TrendingUp,
                color: "text-pink-600",
                bg: "bg-pink-50",
                border: "border-pink-100",
                hoverBorder: "group-hover:border-pink-500",
                hoverShadow: "group-hover:shadow-pink-100",
                baseBg: "bg-white",
                outcomeBg: "bg-[#e52e2e]",
                outcomeTextColor: "text-white"
              },
              {
                phase: "04",
                title: "POSITIONING. PERFORMANCE. PLACEMENT.",
                subtitle: "Market Mastery",
                desc: "From resume strategy to interview dominance, we train you to position yourself as the obvious choice. You won’t chase jobs. You’ll command opportunities.",
                outcomes: [
                  "Powerful resume and profile positioning",
                  "Interview strategy and real-time response control",
                  "Placement execution and offer negotiation readiness"
                ],
                icon: CheckCircle,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-100",
                hoverBorder: "group-hover:border-emerald-500",
                hoverShadow: "group-hover:shadow-emerald-100",
                baseBg: "bg-white",
                outcomeBg: "bg-white", // Leaving the last one without a red bg just like the image reference which only highlights the actual curriculum. It seems in the image only the active or certain ones have it. Oh actually wait, let's keep it uniform or red like the others for consistency since the prompt says "outcomes in the content should come somewhere in the terms of red section shown", the image shows the red background applied to the card's bottom half for the first three visible cards. Let's make all of them have the red background for outcomes.
                outcomeTextColor: "text-white"
              }
            ].map((module, i) => {
              {/* Use the primary theme color for all outcomes backgrounds */ }
              module.outcomeBg = "bg-[#003676]";

              return (
                <div key={i} className={`group flex flex-col relative rounded-2xl ${module.baseBg} border ${module.border} shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${module.hoverBorder} overflow-hidden h-full`}>
                  {/* Top Content */}
                  <div className="p-6 pb-2 min-h-[360px] flex flex-col">
                    <div className={`absolute top-4 right-4 text-5xl font-black text-slate-100 group-hover:text-slate-200 transition-colors`}>
                      {module.phase}
                    </div>
                    <div className={`w-14 h-14 rounded-xl ${module.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <module.icon className={`w-7 h-7 ${module.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1 flex-shrink-0">
                      {module.title.split('.').filter(Boolean).map((phrase, phraseIdx) => (
                        <span key={phraseIdx} className="block">{phrase.trim()}.</span>
                      ))}
                    </h3>
                    <p className={`text-sm font-semibold ${module.color} mb-4 uppercase tracking-wider flex-shrink-0`}>{module.subtitle}</p>
                    <p className="text-sm text-slate-600 leading-relaxed pr-1 flex-grow">{module.desc}</p>
                  </div>

                  {/* Refined Outcomes Section */}
                  <div className="p-6 pt-4 pb-6 relative bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-100/50 mt-auto">
                    {/* Decorative top border */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#003676]/20 to-transparent"></div>

                    <ul className="space-y-1.5">
                      {module.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start text-sm font-medium leading-relaxed text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <div className="mr-3 mt-0.5 w-6 h-6 rounded-full bg-[#003676]/10 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3.5 h-3.5 text-[#003676]" />
                          </div>
                          <span className="mt-0.5">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
          {/* </ScrollAnimation> */}
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

        {/* The "Anti-Motivational" Philosophy */}
        <section className="mb-32">
          <ScrollAnimation>
            <div className="relative p-1 rounded-3xl bg-gradient-to-b from-red-500/20 via-transparent to-emerald-500/20">
              <div className="bg-[#003676] rounded-[22px] p-8 md:p-12 border border-white/10 overflow-hidden shadow-2xl">
                <h2 className="text-3xl font-bold mb-12 text-center text-white">The "Anti-Motivational" Philosophy</h2>

                <div className="grid md:grid-cols-2 gap-12 relative">
                  {/* VS Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-16 h-16 bg-[#003676] rounded-full border-2 border-white/20 items-center justify-center font-black text-white shadow-xl">
                    VS
                  </div>

                  {/* What We Avoid */}
                  <div className="space-y-6 relative group">
                    <div className="absolute inset-0 bg-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-bold text-red-300 flex items-center gap-3">
                      <XCircle className="w-8 h-8" /> What We Avoid
                    </h3>
                    <ul className="space-y-4 relative z-10">
                      {["Motivational Hype", "False Placement Promises", "Generic Internet Content", "Short-term Shortcuts"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-blue-50 group-hover:text-white transition-colors bg-[#00285a]/60 p-3 rounded-lg border border-red-500/20">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What We Provide */}
                  <div className="space-y-6 relative group">
                    <div className="absolute inset-0 bg-emerald-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-2xl font-bold text-emerald-300 flex items-center gap-3 md:justify-end">
                      What We Provide <CheckCircle className="w-8 h-8" />
                    </h3>
                    <ul className="space-y-4 relative z-10">
                      {["Substantial Domain Depth", "True Industrial Readiness", "Reflection-Based Learning", "Long-term Career Growth"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-blue-50 group-hover:text-white transition-colors bg-[#00285a]/60 p-3 rounded-lg border border-emerald-500/20 md:flex-row-reverse md:text-right">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
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
