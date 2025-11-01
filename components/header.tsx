import React, { useEffect, useRef } from "react";
import Magentic from "./ui/magentic";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Image from 'next/image';
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";
import { cn } from "@/lib/utils";
import { links } from "@/data/data";
import "@/app/header.css";

const ease = CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 ");

type HeaderProps = {
  color: "Dark" | "Light";
  className?: string;
  mode?: "hamburger" | "cross";
};

export function Header({ color, className, mode = "hamburger" }: HeaderProps) {
  const dispatch = useAppDispatch();
  
  return (
    <header className={cn("nav__container anime px-paddingX", className)}>
      <nav className="nav__bar">
        <div className="max-w-maxWidth w-full flex justify-between items-center">
          {/* Logo dan Teks */}
          <Magentic
            href={links.home}
            strength={50}
            className={`nav__item font-bold text-color${color} before:bg-color${color}`}
          >
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 relative">
                <Image
                  src="/svg/Logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-2xl font-dm-sans font-semibold tracking-wide">Rofikul Huda</span>
            </div>
          </Magentic>

          {/* Menu Button */}
          <Magentic
            strength={50}
            className={`nav__item h-8 w-8 cursor-pointer`}
            onClick={() => {
              if (mode === "cross") {
                dispatch(toggleMenu({ isMenuOpen: false }));
              } else {
                dispatch(toggleMenu({ isMenuOpen: true, color: color }));
              }
            }}
          >
            <div className={cn(
              "flex flex-col justify-between h-full w-full",
              { "justify-center": mode === "cross" }
            )}>
              <div className={cn(
                `h-[0.15rem] w-full bg-color${color} transition-transform duration-300`,
                { "rotate-45 translate-y-1": mode === "cross" }
              )}></div>
              <div className={cn(
                `h-[0.15rem] w-full bg-color${color} transition-opacity duration-300`,
                { "opacity-0": mode === "cross" }
              )}></div>
              <div className={cn(
                `h-[0.15rem] w-full bg-color${color} transition-transform duration-300`,
                { "-rotate-45 -translate-y-1": mode === "cross" }
              )}></div>
            </div>
          </Magentic>
        </div>
      </nav>
    </header>
  );
}
