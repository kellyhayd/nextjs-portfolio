"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Publicidade e Propaganda [Universidade Católica Dom Bosco/MS]</li>
        <li>MBA em Cinema [Latin American Film Institute/SP]</li>
        <li>Direção de Arte [Ateliê Bucareste/SP]</li>
        <li>Ferramentas para Direção de Cinema com Simon Phillips [Lugar de Cinema/MG]</li>
      </ul>
    ),
  },
  {
    title: "award",
    id: "award",
    content: (
      <ul className="list-disc pl-2">
        <li>Leão de Prata - Film Cannes [True Colors - 2018]</li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SketchUp</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Premiere</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Atuo como Diretora de Arte para publicidade e cinema, com foco no desenvolvimento 
          da linguagem visual, liderança de equipe de filmagem e de produção de objetos, composição e orquestração de cenas.
          O ambiente da publicidade me permitiu ganhar experiência em gerenciamento de orçamento de custo/tempo para atingir
          metas de negócios em um ambiente altamente criativo.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("award")}
              active={tab === "award"}
            >
              {" "}
              Prêmiação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
