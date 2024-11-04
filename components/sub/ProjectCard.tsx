"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
}



const ProjectCard = ({ src, title, description, url }: Props) => {

  function onClickRedirectURL (){
    window.open(url, '_blank');
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <motion.div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2d9fdd]" >
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain cursor-pointer"
          onClick={onClickRedirectURL}
        />

        <motion.div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <motion.p className="mt-2 mb-2 text-gray-300">{description}</motion.p>
          <button className="p-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition" onClick={onClickRedirectURL}> View Project </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
