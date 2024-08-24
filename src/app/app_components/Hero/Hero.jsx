'use client'
import { Button } from '@/components/ui/button'
import { TbArrowRight } from 'react-icons/tb'
import Image from 'next/image'
import {
  desVariants,
  tagVariants,
  titleVariants,
} from '../../../../utils/animate'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="container py-12 xl:py-24 h-[auto] text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
      <div className="lg:w-1/2 xl:py-14 lg:py-8 mx-auto">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
          className="tracking-widest uppercase"
        >
          Offer for the best Interior
        </motion.p>
        <motion.h1
          initial="offscreen"
          whileInView="onscreen"
          variants={desVariants}
          className="h1"
        >
          Make your home a <br />
          piece of art
        </motion.h1>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="pb-6 text-muted-foreground xl:pb-10"
        >
          Transform your living spaces into reflections of your personality and
          lifestyle. Whether you&apos;re dreaming of a modern minimalist look or
          a cozy, traditional vibe, our expert designers are here to turn your
          vision into reality. Experience the perfect blend of aesthetics and
          functionality, crafted just for you.
        </motion.p>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={titleVariants}
        >
          <Button className="group inline-flex items-center px-8 py-2 text-white rounded-full shadow-lg">
            Get started
            <TbArrowRight className="group-hover:translate-x-1 transition-all duration-300 w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
      <div className="lg:w-1/2">
        <Image
          src="/assets/image/hall.png"
          alt=""
          width={800}
          height={500}
          className="absolute right-20 xl:h-[448px] xl:w-[650px] lg:h-[344px] lg:w-[500px] hidden lg:block"
        />
      </div>
    </div>
  )
}
