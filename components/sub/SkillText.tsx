"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
          variants={slideInFromTop}
          className="section-label"
        >
          <span className="section-label__marker" aria-hidden="true" />
          <h1 className="section-label__text">
            Core Technologies
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Enterprise full-stack development
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='max-w-2xl px-4 text-lg leading-relaxed text-gray-300 mb-10 mt-[10px] text-center sm:text-xl'
        >
          Building scalable, cloud-ready applications with .NET, Azure, REST APIs, and modern front-end frameworks.
        </motion.div>
    </div>
  )
}

export default SkillText
