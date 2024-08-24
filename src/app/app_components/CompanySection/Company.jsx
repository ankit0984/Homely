'use client'
import Badge from '@/components/ui/Badge'
import { motion } from 'framer-motion'
import {
  desVariants,
  tagVariants,
  titleVariants,
} from '../../../../utils/animate'
export default function Company() {
  return (
    <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl flex-col gap-y-4">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {/*badge 1*/}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7">Transaction every 24 hours</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={44} endCountText=" million" />
            </dd>
          </motion.div>
          {/*badge 2*/}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={tagVariants}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-white leading-7">Assets Under Running</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={119} endCountText=" million" />
            </dd>
          </motion.div>
          {/*badge 3*/}
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-white leading-7">New Users Annually</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              <Badge endCountNum={11990} endCountText=" +" />
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
