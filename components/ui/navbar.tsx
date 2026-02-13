'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from './button'

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-3xl"
        >
            <div className="flex items-center justify-between px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg ring-1 ring-black/5">
                <Link href="/" className="text-base font-bold tracking-tight text-white flex items-center gap-2">
                    <span>HAYAGREEVA</span>
                </Link>

                <div className="hidden md:flex items-center gap-6">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'About', href: '/about' },
                        { name: 'Our Course', href: '/courses' },
                        { name: 'Mentors', href: '/team' },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-xs font-medium text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Button size="sm" className="h-8 rounded-full px-5 text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all" asChild>
                    <Link href="/#contact">Partner</Link>
                </Button>
            </div>
        </motion.nav>
    )
}
