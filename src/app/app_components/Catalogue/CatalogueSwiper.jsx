'use client'
import { TbArrowUpRight } from 'react-icons/tb'
import { Button } from '../../../components/ui/button'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'
import {
  desVariants,
  tagVariants,
  titleVariants,
} from '../../../../utils/animate'
import {catalogueSwiperData} from '../../data/data'


export default function InteriorDesignCatalogue() {
  return (
    <div className="py-8 lg:py-28 bg-neutral-50">
      <div className="container grid pb-8 lg:grid-cols-1">
        <div className="text-left">
          <motion.h1
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="py-4 text-4xl font-medium lg:text-6xl lg:py-0 text-slate-800"
          >
            Timeless Elegance
          </motion.h1>

          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="pb-6 text-xl font-bold tracking-wider mt-5 uppercase text-amber-700"
          >
            Curated luxury decor to elevate your living spaces
          </motion.h2>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          className="grid grid-cols-2 text-gray-600 gap-x-8"
        >
          <p>
            Our interior design philosophy marries contemporary aesthetics with timeless charm. We curate spaces that reflect your personality while adhering to principles of balance, harmony, and functionality. From bespoke furniture pieces to artisanal decor accents, every element is thoughtfully selected to create a cohesive and inviting atmosphere.
          </p>
          <p>
            We specialize in crafting interiors that stand the test of time. Our designs incorporate sustainable materials, innovative textures, and a sophisticated color palette to create spaces that are both visually stunning and deeply comfortable. Whether you&apos;re looking to revamp a single room or redesign your entire home, our team of expert designers is dedicated to bringing your vision to life.
          </p>
        </motion.div>
        <a href="/gallery">
          <Button className="inline-flex items-center px-8 py-3 mt-4 text-white bg-amber-700 rounded-full hover:bg-amber-800 transition-colors">
            Gallery
            <TbArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </a>
      </div>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mt-12"
      >
        {catalogueSwiperData.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}