"use client";
import React, { useState, useRef } from "react";
import Vimeo from "@u-wave/react-vimeo";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "True Colors",
    description: "\"GGB - Dia dos Pais\"\n Leão de Prata em Film Cannes 2018",
    image: "/images/projects/1.png",
    tag: ["Todos", "Publicidade"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Novela Mexicana",
    description: "Construtora Tenda",
    image: "/images/projects/2.png",
    tag: ["Todos", "Publicidade"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "A Arte de Ser Mulher",
    description: "Live: Protex",
    image: "/images/projects/3.png",
    tag: ["Todos", "Publicidade"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Sonhos",
    description: "Pijamas Marmari",
    image: "/images/projects/4.png",
    tag: ["Todos", "Publicidade"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["Todos", "Web"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["Todos", "Web"],
    vimeoUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Publicidade"
          isSelected={tag === "Publicidade"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Cinema"
          isSelected={tag === "Cinema"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              vimeoUrl={project.vimeoUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
