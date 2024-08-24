'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  desVariants,
  tagVariants,
  titleVariants,
} from '../../../../utils/animate'
const posts = [
  {
    id: '1',
    title: '10 Tips for a Modern Living Room',
    href: '/posts/modern-living-room-tips',
    description:
      'Discover the latest trends and ideas to transform your living room into a modern sanctuary with our top 10 design tips.',
    date: 'August 15, 2024',
    datetime: '2024-08-15',
    category: { title: '4.9', href: '/categories/living-room' },
    author: {
      name: 'Jane Doe',
      role: 'Senior Designer',
      href: '/team/jane-doe',
      imageurl: 'assets/image/profile1.jpg',
    },
  },
  {
    id: '2',
    title: 'Creating a Cozy Bedroom on a Budget',
    href: '/posts/cozy-bedroom-budget',
    description:
      'Learn how to create a warm and inviting bedroom without breaking the bank, with tips on color schemes, furniture, and decor.',
    date: 'July 28, 2024',
    datetime: '2024-07-28',
    category: { title: '4.9', href: '/categories/bedroom' },
    author: {
      name: 'John Smith',
      role: 'Interior Architect',
      href: '/team/john-smith',
      imageurl: 'assets/image/profile2.jpg',
    },
  },
  {
    id: '3',
    title: 'Maximizing Space in Small Kitchens',
    href: '/posts/maximizing-small-kitchens',
    description:
      'Explore creative solutions to make the most of your small kitchen with smart storage, multi-functional furniture, and more.',
    date: 'August 05, 2024',
    datetime: '2024-08-05',
    category: { title: '4.8', href: '/categories/kitchen' },
    author: {
      name: 'Emily Brown',
      role: 'Kitchen Specialist',
      href: '/team/emily-brown',
      imageurl: 'assets/image/profile3.jpg',
    },
  },
]

export default function Contact() {
  return (
    <div className="pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="tet-3xl font-bold tracking-tight sm:text-4xl"
        >
          Customer Revies
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="mt-2 text-lg leading-8 text-muted-foreground"
        >
          Learn how to grow your business with our expert advice.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="mx-auto mt-10 grid lg:grid-cols-3 grid-cols-1 gap-x-8 lg:max-w-none lg:mx-0
            sm:mt-16 py-10 border-b border-gray-200 border-t gap-y-16"
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime}>
                  <Image
                    src="assets/image/star.svg"
                    alt=""
                    width={80}
                    height={5}
                  />
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 bg-primary rounded-full text-white px-3 py-1.5 font-medium hover:bg-gray-100 hover:text-black transition-all"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span>{post.title}</span>
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-muted-foreground">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageurl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href={post.author.href}>
                      <span />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
