import React from "react";
import Image from "next/image";
import Magentic from "@/components/ui/magentic";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

export function CertificateSection({
    index,
    item,
    color,
    length,
}: {
    index: number;
    item: {
        title: React.JSX.Element;
        description: string;
        link: string;
        image?: string;
    };
    color: "Dark" | "Light";
    length: number;
}) {
    return (
        <div
            className={`section s${index} ${color == "Dark" ? "lightGradient" : "darkGradient"
                }
      text-color${color} `}
            key={item.link}
        >
            <Header color={color} />

            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={cn(
                    "absolute -right-[5%] md:right-auto md:left-[5%] top-[20%] text-[40vh] font-bold opacity-5 select-none",
                    color === "Dark" ? "text-colorDark" : "text-colorLight"
                )}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </div>
            </div>

            <div className="flex h-[100dvh] w-full items-center px-paddingX relative z-10 pt-20 md:pt-0">
                <div className="mx-auto max-w-maxWidth w-full flex flex-col md:flex-row gap-8 md:gap-20 items-center justify-center h-full md:h-auto">

                    {/* Left/Top: Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col items-start justify-center order-2 md:order-1">
                        <div className="page-num mb-4 md:mb-6">
                            <p className={`text-xs md:text-base font-medium tracking-widest uppercase opacity-70 border-b pb-2 ${color === "Dark" ? "border-colorDark" : "border-colorLight"
                                }`}>
                                Certificate No. 0{index + 1}
                            </p>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
                            {item.title}
                        </h2>

                        <p className="text-base md:text-xl opacity-80 mb-6 md:mb-10 max-w-md line-clamp-3 md:line-clamp-none">
                            {item.description}
                        </p>

                        <div className="btn-wrap">
                            <Magentic
                                strength={50}
                                className={`btn px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-medium !flex !flex-row items-center gap-4 transition-all duration-300 !whitespace-nowrap w-auto
                            ${color === "Dark"
                                        ? "bg-colorDark text-colorLight hover:bg-opacity-90"
                                        : "bg-colorLight text-colorDark hover:bg-opacity-90"
                                    } mask`}
                                href={item.link}
                                target="_blank"
                                scrambleParams={{ text: "View PDF", chars: "-x" }}
                            >
                                <span className="scrambleText">View PDF</span>
                                <svg
                                    className="w-4 h-4 md:w-5 md:h-5 -rotate-[45deg]"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 12L12 2M12 2H4M12 2V10" />
                                </svg>
                            </Magentic>
                        </div>
                    </div>

                    {/* Right/Bottom: Visual Placeholder */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                        <a
                            href={item.link}
                            target="_blank"
                            className={`relative group aspect-[4/3] md:aspect-[16/11] w-full max-w-[280px] sm:max-w-sm md:max-w-xl bg-colorSecondary${color} rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]`}
                        >
                            {item.image ? (
                                <Image
                                    src={item.image}
                                    alt="Certificate Preview"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                                        <svg className="w-24 h-24 md:w-48 md:h-48" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.39z" />
                                        </svg>
                                    </div>
                                    <div className={`absolute inset-3 md:inset-4 border-2 border-dashed border-opacity-30 rounded-xl pointer-events-none ${color === "Dark" ? "border-colorDark" : "border-colorLight"
                                        }`}></div>
                                </>
                            )}
                        </a>
                    </div>
                </div>
            </div>

            <div className="anime absolute bottom-10 flex w-full items-end justify-center gap-6 z-20">
                {Array(length)
                    .fill(0)
                    .map((_, i) => {
                        return (
                            <div
                                key={i}
                                className={cn(
                                    `h-4 w-1 bg-colorSecondary${color} rounded-full transition-all duration-300`,
                                    ` ${i === index ? `h-10 bg-color${color}` : ""}`,
                                )}
                            ></div>
                        );
                    })}
            </div>
        </div>
    );
}
