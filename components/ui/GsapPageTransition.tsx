"use client";

import React, { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { gsap } from "gsap";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { toggleMenu } from "@/redux/states/menuSlice";

export default function GsapPageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const isTransitioningRef = useRef(false);
  const pendingUrlRef = useRef<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    gsap.set(overlay, { yPercent: -100, display: "block", pointerEvents: "none" });

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      let target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");
      const rel = anchor.getAttribute("rel") || "";
      if (!href) return;

      if (href.startsWith("http") && !href.startsWith(window.location.origin)) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (href.startsWith("#")) return;
      if (targetAttr === "_blank") return;
      if (rel.includes("external")) return;

      const url = new URL(href, window.location.origin);
      const isSameRoute =
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash === "";

      e.preventDefault();
      if (isTransitioningRef.current) return;

      isTransitioningRef.current = true;
      pendingUrlRef.current = isSameRoute ? null : url.pathname + url.search + url.hash;

      gsap.killTweensOf(overlay);
      gsap.set(overlay, { yPercent: -100, pointerEvents: "auto" });
      dispatch(toggleMenu({ isMenuOpen: false }));
      gsap.to(overlay, {
        yPercent: 0,
        duration: 0.45,
        ease: "power3.out",
        force3D: true,
        overwrite: "auto",
        onComplete: () => {
          if (pendingUrlRef.current) {
            router.push(pendingUrlRef.current);
          } else {
            gsap.killTweensOf(overlay);
            gsap.set(overlay, { yPercent: 0, pointerEvents: "auto" });
            gsap.to(overlay, {
              yPercent: 100,
              duration: 0.55,
              ease: "power3.inOut",
              force3D: true,
              overwrite: "auto",
              onComplete: () => {
                gsap.set(overlay, { yPercent: -100, pointerEvents: "none" });
                isTransitioningRef.current = false;
                pendingUrlRef.current = null;
                dispatch(toggleMenu({ isMenuOpen: false }));
              },
            });
          }
        },
      });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (!isTransitioningRef.current) {
      gsap.set(overlay, { yPercent: -100, pointerEvents: "none" });
      return;
    }

    gsap.killTweensOf(overlay);
    const run = () => {
      gsap.set(overlay, { yPercent: 0, pointerEvents: "auto" });
      gsap.to(overlay, {
        yPercent: 100,
        duration: 0.55,
        ease: "power3.inOut",
        force3D: true,
        overwrite: "auto",
        onComplete: () => {
          gsap.set(overlay, { yPercent: -100, pointerEvents: "none" });
          isTransitioningRef.current = false;
          pendingUrlRef.current = null;
          dispatch(toggleMenu({ isMenuOpen: false }));
        },
      });
    };
    requestAnimationFrame(run);
  }, [pathname]);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--colorDark, #0e0d0c)",
        zIndex: 9999,
        pointerEvents: "none",
        willChange: "transform",
      }}
    />
  );
}
