'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './button'

export function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl"
        >
            <div className="flex items-center justify-between px-6 py-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-md ring-1 ring-border/5">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Image
                        src="/logo.png"
                        alt="Hayagreeva Logo"
                        width={180}
                        height={50}
                        className="h-10 w-auto object-contain"
                        priority
                    />
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'Our Course', href: '/courses' },
                        { name: 'Mentors', href: '/team' },
                        { name: 'About', href: '/about' },
                    ].map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <Button size="sm" className="h-10 rounded-full px-6 text-sm bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm transition-all font-semibold" asChild>
                    <Link href="/#contact">Partner</Link>
                </Button>
            </div>
        </motion.nav>
    )
}
