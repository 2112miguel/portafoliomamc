"use client";

import React from 'react'
import { motion } from "framer-motion";

const FooterT = () => {
  return (
    <motion.article
        initial="hidden"
        animate="visible"
        className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] "
    >
        <motion.div>
            <motion.p>
                Footer
            </motion.p>
        </motion.div>
    </motion.article>
  )
}

export default FooterT