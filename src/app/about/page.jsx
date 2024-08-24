'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { TbArrowUpRight } from 'react-icons/tb';
import { Button } from '@/components/ui/button';
import { motion, useScroll, useTransform } from 'framer-motion';
import { titleVariants, tagVariants, desVariants } from '../../../utils/animate';
import {teamMembers} from '../data/data'

const AboutSection = ({ title, content }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={tagVariants}
    className="mb-8"
  >
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-lg leading-relaxed">{content}</p>
  </motion.div>
);

const TeamMember = ({ title, image, description }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={titleVariants}
    className="border-2 border-primary"
  >
    <div className="p-4 text-center bg-gray-100 aspect-auto -m-0.5 transition hover:-translate-y-3 hover:-translate-x-3">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="mx-auto rounded-full"
      />
      <h2 className="py-4 text-2xl font-semibold uppercase">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  </motion.div>
);

export default function EnhancedAboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div>
      <div className="bg-about bg-center bg-cover">
        <h1 className="container py-32 text-6xl font-semibold text-black tracking-widest text-center lg:py-64">
          Who are we?
        </h1>
      </div>

      <div className="container">
        <div className="pt-4">
          <motion.h2
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="text-3xl font-semibold text-center lg:p-10 lg:text-5xl"
          >
            We have great idea & Interior Design
          </motion.h2>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={desVariants}
            className="text-2xl text-center font-medium lg:pb-10 mt-5"
          >
            Our interior design services are tailored to our client&apos;s
            specific needs and budget requirements. We offer a full range of
            interior design services, from concept through to completion. Our
            services include interior design, interior decorating, colour
            consulting, furniture selection, window treatments, kitchen and
            bathroom design, space planning, and project management.
          </motion.p>
        </div>

        <div className="items-center lg:flex gap-x-8">
          <motion.div style={{ scale }} ref={ref} className="w-full">
            <Image
              src="/assets/image/gallery1123.jpg"
              width={700}
              height={700}
              alt="about"
            />
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
          >
            <p className="pb-8 tracking-wide mt-6">
              We are an international Architects. We believe that today it is
              fundamental to totally rethink the way we live, work and play. We
              are a team of architects, designers, and thinkers who value the
              transformative role of ideas and the capacity for architecture to
              inspire. We are committed to creating environments that are a joy
              to inhabit, and that are also sustainable and respectful of the
              environment. We are passionate about design and the power of
              architecture to shape the world around us. <br /> <br />
              Our work is diverse and includes residential, commercial, and
              public projects. We are committed to creating environments that
              are a joy to inhabit, and that are also sustainable and respectful
              of the environment. We are passionate about design and the power
              of architecture to shape the world around us.
              <br /> <br />
              <span className="text-xl font-extrabold tracking-tight">
                At backARCH, we share a belief in the transformational power of
                people united in a common purpose.
              </span>
            </p>
            <Button className="inline-flex items-center px-8 py-3">
              Read More
              <TbArrowUpRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        <div className="lg:py-20">
          <div className="pt-8 pb-4">
            <motion.h1
              initial="offscreen"
              whileInView="onscreen"
              variants={titleVariants}
              className="text-4xl font-bold tracking-wider text-center uppercase"
            >
              Team
            </motion.h1>
          </div>
          <div className="grid py-8 gap-20 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}