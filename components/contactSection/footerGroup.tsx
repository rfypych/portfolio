import { cn } from "@/lib/utils";
import React from "react";
import Magentic from "@/components/ui/magentic";
export function FooterGroup({
  title,
  links,
  isMagnetic = false,
  className,
}: FooterGroupProps) {
  return (
    <div
      className={cn(
        "flex grow flex-col items-center justify-center pb-6 text-[clamp(20px,_1vw_+_14px,_24px)] text-[#ffffffbf] md:block md:grow-0 md:py-6",
        className,
      )}
    >
      <h3 className="text-[0.6em]">{title}</h3>
      <ul className="mt-[0.4em] flex w-full flex-wrap justify-between gap-x-5 gap-y-2 md:mt-[0.1em] md:w-auto md:justify-normal">
        {links.map((link, index) => (
          <li key={index} className="whitespace-nowrap">
            {isMagnetic ? (
              <Magentic
                strength={50}
                className="mask relative inline-block text-[0.8em] text-[#ffffffd9]"
                scrambleParams={{
                  text: link.text,
                  chars: "-xx",
                }}
                href={link.href}
                target="_blank"
                hoverUnderline
              >
                <span className="scrambleText inline-block">
                  {link.text}
                </span>
              </Magentic>
            ) : (
              <span className="mask text-[0.8em] text-[#ffffffd9]">{link.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface FooterGroupProps {
  title: string;
  links: { href: string; text: string }[];
  isMagnetic?: boolean;
  className?: string;
}
