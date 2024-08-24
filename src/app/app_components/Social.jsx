'use client'
import React from 'react'
import { RiLinkedinFill, RiGithubFill } from 'react-icons/ri'
import { SiCodechef, SiLeetcode } from 'react-icons/si'
import Link from 'next/link'

const icons = [
  {
    path: 'https://github.com/ankit0984',
    name: <RiGithubFill />,
  },
  {
    path: 'https://linkedin.com/in/ankitkumar064',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://www.codechef.com/users/akki2424',
    name: <SiCodechef />,
  },
  {
    path: 'https://leetcode.com/u/ankitkr04/',
    name: <SiLeetcode />,
  },
]

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}
