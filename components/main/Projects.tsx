

import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12 md:py-20">
        My Projects
      </h1>
      <div className="grid w-full max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-10">
        <ProjectCard
          src="/tarnished-compendium-home.png"
          images={["/tarnished-compendium-home.png", "/tarnished-compendium-bosses.png"]}
          title="Tarnished Compendium"
          description="Dark fantasy companion with searchable Elden Ring data, boss records, equipment, areas, and guides powered by an API."
          url="https://eldeneingapp.vercel.app/"
        />
        <ProjectCard
          src="/pokedex.png"
          title="Pokédex"
          description="Interactive Pokédex application featuring Pokémon search, species navigation, detailed statistics, and a responsive interface."
          url="https://pokedex-six-sandy-82.vercel.app/"
        />
        <ProjectCard
          src="/tumusico.png"
          title="TuMusAh"
          description="Web Application for musicians develop using ReactJS, JavaScript, CSS, MongoDB, NodeJS, Express, HTML, CSS and Bootstrap."
          url="https://music-app-front-end.vercel.app"
        />
        <ProjectCard
          src="/form-builder.png"
          title="React Form Builder"
          description="Interactive form builder with dynamic fields, real-time preview, validation controls, and submission feedback."
          url="https://challenge-k.vercel.app/"
        />
        <ProjectCard
          src="/dev-community.png"
          title="DEV Community Clone"
          description="Community platform clone with publications, tags, navigation, and local persistence built with React and Vite."
          url="https://react-devto-clon.vercel.app"
        />
      </div>
    </div>
  );
};

export default Projects;
