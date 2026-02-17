'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { HelpCircle } from 'lucide-react'

export function FAQSection() {
  const faqs = [
    {
      question: "Is this a placement agency?",
      answer: "No. We are a career alignment and life readiness organization. While we prepare you extensively for placements by building your skills, character, and professional behavior, we do not guarantee jobs. We guarantee capability."
    },
    {
      question: "Who is this program for?",
      answer: "This program is designed for college students (engineering, arts, science) and young professionals who feel disconnected from their career path or want to build a strong foundation for long-term professional success."
    },
    {
      question: "How is this different from other training institutes?",
      answer: "Most institutes focus on syntax (coding) or short-term tricks. We focus on the 'whole person'—Discipline, Clarity, and Responsibility. We teach you how to think, behave, and make decisions like a professional, not just how to code."
    },
    {
      question: "Is the program online or offline?",
      answer: "The 'Next Chapter' program is primarily an offline, immersion-based experience delivered on college campuses to ensure high engagement, discipline, and real-time feedback."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes, upon successful completion of the 120-hour immersion, you will receive a certification. However, we emphasize that your behavior and skills will speak louder than any piece of paper."
    }
  ]

  return (
    <section className="py-20 px-6 bg-transparent relative z-10" id="faq">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-4">
              <HelpCircle className="w-3 h-3" /> Common Queries
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              Clarifying the most common doubts about our approach and program.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollAnimation>
      </div>
    </section>
  )
}
