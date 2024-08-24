

'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  desVariants,
  tagVariants,
  titleVariants,
} from '../../../../utils/animate'

// Separated data
const aboutData = {
  image: {
    src: "/assets/image/aboutfront.png",
    alt: "Elegant interior design showcase",
    width: 900,
    height: 500,
  },
  experienceYears: 25,
  title: "Crafting Timeless Elegance",
  subtitle: "Award-Winning Interior Design Studio",
  paragraphs: [
    "At Elegance Interiors, we blend artistry with functionality to transform spaces into breathtaking environments. Our passion for innovative design and meticulous attention to detail has earned us the trust of discerning clients worldwide and numerous accolades in the industry.",
    "From luxurious residential sanctuaries to cutting-edge commercial spaces, we pride ourselves on creating bespoke interiors that reflect the unique personality and lifestyle of each client. Our team of expert designers and craftsmen work collaboratively to deliver exceptional results that exceed expectations and stand the test of time.",
  ],
  achievements: [
    { number: '15+', text: 'Years of Excellence' },
    { number: '500+', text: 'Satisfied Clients' },
    { number: '50+', text: 'Design Awards' },
    { number: '1000+', text: 'Projects Completed' },
  ],
}

export default function EnhancedAbout() {
  return (
    <div className="container py-12 xl:py-24 h-auto">
      <div className="grid lg:grid-cols-2 gap-8 place-items-center">
        {/* Image */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="relative"
        >
          <Image
            src={aboutData.image.src}
            alt={aboutData.image.alt}
            width={aboutData.image.width}
            height={aboutData.image.height}
            className="rounded-lg  max-md:hidden"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
            <p className="text-2xl font-bold">{aboutData.experienceYears}+</p>
            <p className="text-sm">Years of Innovation</p>
          </div>
        </motion.div>
        
        {/* Content */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-3xl font-extrabold leading-tight lg:text-5xl"
          >
            {aboutData.title}
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-lg font-semibold text-primary"
          >
            {aboutData.subtitle}
          </motion.p>
          {aboutData.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              className="text-gray-600"
            >
              {paragraph}
            </motion.p>
          ))}
          
          {/* Achievements */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="grid grid-cols-2 gap-4 mt-6"
          >
            {aboutData.achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary">{achievement.number}</p>
                <p className="text-sm text-gray-600">{achievement.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}