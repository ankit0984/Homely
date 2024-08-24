import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
const links = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'about' },
  { path: '/gallery', name: 'Gallery' },
  { path: '/projects', name: 'projects' },
  { path: '/contacts', name: 'contact' },
]

export default function Nav({ containerStyles, linkStyles, underlineStyles }) {
  const path = usePathname()

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`capitalize ${linkStyles}`}
        >
          {link.path === path && (
            <motion.span
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              transition={{ type: 'tween' }}
              layoutId="underline"
              className={`${underlineStyles}`}
            />
          )}
          {link.name}
        </Link>
      ))}
    </nav>
  )
}
