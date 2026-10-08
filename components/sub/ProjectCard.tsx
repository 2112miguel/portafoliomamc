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

  function onClickRedirectURL () {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-full z-[20]"
    >
      <motion.div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#2d9fdd] bg-black/40 shadow-lg">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className={`aspect-video w-full object-cover ${url ? "cursor-pointer" : "cursor-default"}`}
          onClick={onClickRedirectURL}
        />

        <motion.div className="relative flex flex-1 flex-col p-5">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <motion.p className="mt-2 mb-5 text-gray-300">{description}</motion.p>
          <button
            className="mt-auto w-fit rounded bg-cyan-500 px-4 py-2 text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!url}
            onClick={onClickRedirectURL}
          >
            {url ? "View Project" : "Coming Soon"}
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
