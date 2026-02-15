'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Facebook,
    Linkedin,
    Instagram,
    Youtube,
    MapPin,
    Phone,
    Mail,
    ArrowUpRight
} from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-[#020817] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-6">
                        <Link
                            href="/"
                            className="inline-block"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/logo.png"
                                    alt="Hayagreeva Logo"
                                    width={180}
                                    height={60}
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-slate-400 leading-relaxed max-w-sm mt-4">
                            Hayagreeva Skillspheree is a top Indian career alignment organization, dedicated to promoting education, community welfare, and environmental conservation with financial transparency.
                        </p>
                        <div className="pt-4">
                            <Button
                                asChild
                                variant="default"
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12 px-8 shadow-lg shadow-primary/20"
                            >
                                <Link href="#contact" className="flex items-center gap-2">
                                    Contact Us Now <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {/* Links Columns */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link href="/courses" className="hover:text-primary transition-colors">Our Course</Link></li>
                                <li><Link href="/team" className="hover:text-primary transition-colors">Mentors</Link></li>
                                <li><Link href="#contact" className="hover:text-primary transition-colors">Partner with Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div className="lg:col-span-3">
                        <div className="bg-white text-slate-900 p-8 rounded-none shadow-xl h-full flex flex-col justify-center">
                            <h4 className="font-bold text-2xl mb-4 leading-tight">
                                Ready to Bring The Change. Let's Get To Work Now!
                            </h4>
                            <Button
                                asChild
                                className="w-full bg-[#8bc34a] hover:bg-[#7cb342] text-white font-bold h-12 rounded-none mt-4 text-base"
                            >
                                <Link href="mailto:contact@hayagreeva.com" className="flex items-center justify-center gap-2">
                                    Partner With Us <ArrowUpRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
                        {/* Address */}
                        <div>
                            <h5 className="font-bold mb-4 text-white">Address</h5>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Hyderabad, Telangana, India
                            </p>
                        </div>
                        {/* Call Us */}
                        <div>
                            <h5 className="font-bold mb-4 text-white">Call Us</h5>
                            <p className="text-sm text-slate-400">
                                87544-13255
                            </p>
                        </div>
                        {/* Email Us */}
                        <div>
                            <h5 className="font-bold mb-4 text-white">Email Us</h5>
                            <p className="text-sm text-slate-400">
                                contact@hayagreeva.com
                            </p>
                        </div>
                        {/* Follow Us */}
                        <div className="flex flex-col items-start lg:items-end">
                            <h5 className="font-bold mb-4 text-white">Follow Us</h5>
                            <div className="flex gap-4">
                                <SocialLink href="#" icon={<Youtube className="h-5 w-5" />} />
                                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
                                <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-white/5">
                        <p className="text-xs text-slate-500">
                            Hayagreeva | Copyrights (c) All Rights Reserved
                        </p>

                    </div>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-white hover:text-primary transition-colors duration-300"
        >
            {icon}
        </a>
    )
}
