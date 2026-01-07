"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Project <br /> Ephemeris 
      </>
    ),
    description: "Conversational AI powered by NASA & Mistral APIs",
    link: "https://ephemeris-pi.vercel.app/",
    imageLink: "/img/projects/1.png",
  },
  {
    title: (
      <>
        Neural <br /> Odyssey (WIP)
      </>
    ),
    description: "An AI-Powered, Multi-Backend Text RPG",
    link: "https://llm-text-rpg.vercel.app/",
    imageLink: "/img/projects/2.png",
  },
  {
    title: (
      <>
        X TKJ <br /> Axioo
      </>
    ),
    description: "Static Website for Class Information",
    link: "https://rfypych.github.io/xtkjaxioo/",
    imageLink: "/img/projects/3.png",
  },
  {
    title: (
      <>
        Orchestra <br /> AI
      </>
    ),
    description: "Orchestrates AI models for automation and creativity",
    link: "https://orchestra-ai.vercel.app/",
    imageLink: "/img/projects/4.png",
  },

  {
    title: (
      <>
        Project <br /> SAFE - T
      </>
    ),
    description: "Real-Time Violation Detection using YOLO",
    link: "https://inovasi-grisa.my.canva.site/safe-t/",
    imageLink: "/img/projects/5.png",
  },
  {
    title: (
      <>
        Project <br /> Listify
      </>
    ),
    description: "To‑do and Pomodoro timer in one app",
    link: "https://listify-rfiklz.vercel.app/",
    imageLink: "/img/projects/6.png",
  },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
