"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

const opts = {
    autoScrolling: true,
    scrollOverflow: false,
    scrollHorizontally: false,
    navigation: false,
    navigationPosition: "left",
    scrollingSpeed: 1000,
    easingcss3: "cubic-bezier(.70,0,.30,1)",
    licenseKey: "gplv3-license",
    credits: {
        enabled: false,
    },
};

const FullpageProviderCertificates = ({ children }: { children: React.ReactNode }) => {
    const onLeave = function (index: any, nextIndex: any, direction: any) {
        // Animation Logic similar to Work page for consistency
        if (direction == "down") {
            gsap
                .timeline()
                .from(`.s${nextIndex.index} .anime`, {
                    duration: 0.3,
                })
                .fromTo(
                    `.s${nextIndex.index} .anime`,
                    {
                        y: "10vh",
                        opacity: 0,
                    },
                    {
                        y: "0vh",
                        opacity: 1,
                        duration: 1.1,
                        stagger: 0.1,
                        ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
                    },
                );
        } else {
            gsap
                .timeline()
                .from(`.s${nextIndex.index} .anime`, {
                    duration: 0.3,
                })
                .fromTo(
                    `.s${nextIndex.index} .anime`,
                    {
                        y: "-10vh",
                        opacity: 0,
                    },
                    {
                        y: "0vh",
                        opacity: 1,
                        duration: 1.1,
                        stagger: -0.1,
                        ease: CustomEase.create("custom", "M0,0 C0.52,0.01 0.16,1 1,1 "),
                    },
                );
        }
    };

    return (
        <ReactFullpage
            {...opts}
            onLeave={onLeave}
            render={() => {
                return <ReactFullpage.Wrapper>{children}</ReactFullpage.Wrapper>;
            }}
        />
    );
};

export default FullpageProviderCertificates;
