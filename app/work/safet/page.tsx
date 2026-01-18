"use client";
import React from "react";
import Magentic from "@/components/ui/magentic";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import "@/app/work.css";
import "@/app/header.css";

export default function SafeTPage() {
    const color = "Dark";

    return (
        <>
            <Cursor />
            <HeaderNavigation />
            <div
                className={`section ${color === "Dark" ? "lightGradient" : "darkGradient"} text-color${color}`}
            >
                <Header color={color} />

                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div
                        className={cn(
                            "absolute -right-[5%] md:right-auto md:left-[5%] top-[15%] md:top-[20%] text-[20vh] md:text-[40vh] font-bold opacity-[0.03] select-none",
                            "text-colorDark"
                        )}
                    >
                        🏆
                    </div>
                </div>

                <div className="flex h-[100dvh] w-full items-center px-paddingX relative z-10">
                    <div className="mx-auto max-w-maxWidth w-full flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center">
                        {/* Left: Text Content */}
                        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center order-2 md:order-1 text-center md:text-left">
                            {/* Page indicator - hidden on mobile */}
                            <div className="hidden md:block mb-6">
                                <p className="text-base font-medium tracking-widest uppercase opacity-70 border-b pb-2 border-colorDark">
                                    Project Details
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2 md:mb-6 leading-tight">
                                Project <br className="hidden md:block" /> SAFE-T
                            </h2>

                            {/* Achievement Badge */}
                            <div className="inline-flex items-center gap-2 mb-3 md:mb-6 px-3 py-1.5 md:px-4 md:py-2 bg-colorSecondaryHalfLight rounded-full border border-colorSecondaryLight">
                                <span className="text-base md:text-xl">🏆</span>
                                <span className="text-xs md:text-sm font-semibold">
                                    2nd Place — MAHAVATION 2025
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm md:text-xl opacity-80 mb-4 md:mb-8 max-w-md">
                                Secure AI For Enforcement Traffic — Real-time traffic violation
                                detection system powered by YOLOv8 deep learning.
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-1.5 md:gap-2 mb-6 md:mb-8">
                                {["YOLOv8", "Python", "OpenCV", "Flask"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-colorSecondaryLight rounded-full text-[10px] md:text-sm font-medium text-colorDark"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Back Button - EXACT structure from aboutWrapper.tsx */}
                            <Magentic
                                strength={50}
                                href="/work"
                                scrambleParams={{
                                    text: "View all Work",
                                }}
                                className="mask group items-center justify-center rounded-full bg-colorDark p-4 md:p-5"
                            >
                                <p className="shapka !flex text-sm md:text-base text-colorLight items-center">
                                    <span className="scrambleText whitespace-nowrap">
                                        View all Work
                                    </span>
                                    <svg
                                        className="ml-4 w-[0.8em] -rotate-45 text-colorLight"
                                        viewBox="0 0 14 14"
                                        version="1.1"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>arrow-up-right</title>
                                        <g
                                            id="Page-1"
                                            stroke="none"
                                            strokeWidth="2.5"
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <g
                                                id="Artboard"
                                                transform="translate(-1019.000000, -279.000000)"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <g
                                                    id="arrow-up-right"
                                                    transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                                                >
                                                    <polyline
                                                        id="Path"
                                                        points="2.76923077 0 12 0 12 9.23076923"
                                                    ></polyline>
                                                    <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </p>
                            </Magentic>
                        </div>

                        {/* Right: Certificate Image */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                            <a
                                href="/img/certificates/mahavation2025/safetmahavation.jpg"
                                target="_blank"
                                className="relative group w-[200px] sm:w-[280px] md:w-full md:max-w-md rounded-xl md:rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-colorSecondaryDark"
                            >
                                <img
                                    src="/img/certificates/mahavation2025/safetmahavation.jpg"
                                    alt="MAHAVATION 2025 Certificate - SAFE-T Project 2nd Place"
                                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom indicator dot */}
                <div className="absolute bottom-6 md:bottom-10 flex w-full items-end justify-center gap-6 z-20">
                    <div className="h-10 w-1 bg-colorDark rounded-full opacity-30 md:opacity-100"></div>
                </div>
            </div>
        </>
    );
}
