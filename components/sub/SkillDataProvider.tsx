"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
  src: string;
  name: string;
  index: number;
}

const SkillDataProvider = ({ src, name, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.05
  return (
  <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom={index}
    transition={{delay: index * animationDelay, duration: 0.35}}
    className="group flex w-[88px] flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 sm:w-[104px]"
  >
    <Image
      src={src}
      width={56}
      height={56}
      alt={`${name} icon`}
      className="h-11 w-11 object-contain sm:h-14 sm:w-14"
    />
    <span className="text-center text-xs font-medium text-gray-200 group-hover:text-white">
      {name}
    </span>
  </motion.div>
  )
}

export default SkillDataProvider
