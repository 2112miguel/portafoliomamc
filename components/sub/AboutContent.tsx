"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import Image from "next/image";

const AboutContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-12 px-6 pt-32 md:flex-row md:px-12 lg:px-20 lg:pt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="profile-badge"
        >
          <span className="profile-badge__marker" aria-hidden="true" />
          <h1 className="profile-badge__text">
            Miguel Angel Moreno Contreras
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Full-Stack .NET
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Developer
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {">"} Full-Stack .NET Developer with 7+ years of experience building enterprise applications, RESTful APIs, and microservices with C#, ASP.NET Core, SQL Server, and JavaScript. I create responsive web experiences with Angular, React, and Vue.js, and deliver scalable solutions through Agile collaboration, Azure DevOps, and CI/CD practices.
        </motion.p>
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 bg-[#2d9fdd] text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full max-w-[650px] h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark3.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default AboutContent;
