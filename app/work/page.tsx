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
        P2P <br /> AirNode
      </>
    ),
    description: "Secure P2P File Share. Transfer files instantly between devices.",
    link: "https://p2pairnode.vercel.app/",
    imageLink: "/img/projects/p2pairnode.png",
  },
  {
    title: (
      <>
        MulyoNode <br /> (Dynasty)
      </>
    ),
    description: "Satirical runtime parodying political architecture & nepotism",
    link: "https://rfypych.github.io/MulyoNode/",
    imageLink: "/img/projects/mulyonode.png",
  },
  {
    title: (
      <>
        Todatas <br /> Community
      </>
    ),
    description: "Minecraft clan website with Lore, Gallery, and Member roster",
    link: "https://todatas.vercel.app/",
    imageLink: "/img/projects/todatas.png",
  },
  {
    title: (
      <>
        SkyMind <br /> Weather AI
      </>
    ),
    description: "AI-powered weather intelligence using Google GenAI & Leaflet",
    link: "https://skymind-weather.vercel.app/",
    imageLink: "/img/projects/skymind.png",
  },
  {
    title: (
      <>
        Project <br /> Ephemeris
      </>
    ),
    description: "Conversational AI powered by NASA & Mistral APIs",
    link: "https://ephemeris-pi.vercel.app/",
    imageLink: "/img/projects/ephemeris.png",
  },
  {
    title: (
      <>
        Neural <br /> Odyssey (WIP)
      </>
    ),
    description: "An AI-Powered, Multi-Backend Text RPG",
    link: "https://llm-text-rpg.vercel.app/",
    imageLink: "/img/projects/neuralodyssey.png",
  },
  {
    title: (
      <>
        Orchestra <br /> AI
      </>
    ),
    description: "Orchestrates AI models for automation and creativity",
    link: "https://orchestra-ai.vercel.app/",
    imageLink: "/img/projects/orchestra.png",
  },
  {
    title: (
      <>
        Project <br /> SAFE - T
      </>
    ),
    description: "Real-Time Violation Detection using YOLO",
    link: "/work/safet",
    imageLink: "/img/projects/safet.png",
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
