

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";
import Button from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/tumusico.png"
          title="TuMusAh"
          description="Web Application for musicians develop using ReactJS, JavaScript, CSS, MongoDB, NodeJS, Express, HTML, CSS and Bootstrap."
          url="https://music-app-front-end.vercel.app"
        />
        <ProjectCard
          src="/chanllegek.png"
          title="Chanllege K"
          description="A simple Code Challenge"
          url=""
        />
        <ProjectCard
          src="/devtoClon.png"
          title="Clon DevTo"
          description="A simple clon from this incredible page"
          url="https://react-devto-clon.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
