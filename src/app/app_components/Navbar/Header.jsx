'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { usePathname } from 'next/navigation'
export default function Header() {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    const scrpllYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })

    return () => window.removeEventListener('scroll', scrpllYPos)
  }, [])
  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark: bg-accent'
          : 'py-6 dark:bg-transparent'
      } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-4">
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            
            <div className="xl:hidden md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
