"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface Props {
  src: string;
  title: string;
  description: string;
  url: string;
  images?: string[];
}

const ProjectCard = ({ src, title, description, url, images }: Props) => {
  const galleryImages = images?.length ? images : [src];
  const [activeImage, setActiveImage] = useState(0);

  function onClickRedirectURL () {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  function showImage(event: React.MouseEvent<HTMLButtonElement>, index: number) {
    event.stopPropagation();
    setActiveImage(index);
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full h-full z-[20]"
    >
      <motion.div className="flex h-full flex-col overflow-hidden rounded-lg border border-[#2d9fdd] bg-black/40 shadow-lg">
        <div className="relative">
          <Image
            src={galleryImages[activeImage]}
            alt={`${title} preview ${activeImage + 1}`}
            width={1000}
            height={1000}
            className={`aspect-video w-full object-cover ${url ? "cursor-pointer" : "cursor-default"}`}
            onClick={onClickRedirectURL}
          />
          {galleryImages.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-8">
              <button
                aria-label="Previous image"
                className="rounded-full bg-black/60 px-2.5 py-1 text-lg text-white transition hover:bg-cyan-500"
                onClick={(event) => showImage(event, (activeImage - 1 + galleryImages.length) % galleryImages.length)}
              >
                ‹
              </button>
              <div className="flex items-center gap-1.5">
                {galleryImages.map((image, index) => (
                  <button
                    aria-label={`Show image ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition ${index === activeImage ? "bg-cyan-300" : "bg-white/50 hover:bg-white"}`}
                    key={image}
                    onClick={(event) => showImage(event, index)}
                  />
                ))}
              </div>
              <button
                aria-label="Next image"
                className="rounded-full bg-black/60 px-2.5 py-1 text-lg text-white transition hover:bg-cyan-500"
                onClick={(event) => showImage(event, (activeImage + 1) % galleryImages.length)}
              >
                ›
              </button>
            </div>
          )}
        </div>

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
