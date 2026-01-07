"use client";
import React from "react";
import "../work.css";
// import "../header.css"; // Assuming header styles are global or imported by Header component, but WorkPage imported it explicitly.
import "@/app/header.css";
import FullpageProviderCertificates from "@/components/fullpageProviderCertificates";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { CertificateSection } from "@/components/certificatesPage/certificateSection";

const certificatesData = [
    {
        title: (
            <>
                Learn AI <br /> Basics
            </>
        ),
        description: "Foundational knowledge in Artificial Intelligence concepts.",
        link: "/pdf/learn_ai_basics_cert.pdf",
        image: "/img/certificates/learn_ai_basics_cert/learn_ai_basics_cert_page-0001.jpg",
    },
    {
        title: (
            <>
                Machine Learning <br /> for Beginners
            </>
        ),
        description: "Core principles of Machine Learning and algorithms.",
        link: "/pdf/learn_machine_learning_for_beginner_cert.pdf",
        image: "/img/certificates/learn_machine_learning_for_beginner_cert/learn_machine_learning_for_beginner_cert_page-0001.jpg",
    },
    {
        title: (
            <>
                Prompt Engineering <br /> for Developers
            </>
        ),
        description: "Advanced techniques in prompting for software development.",
        link: "/pdf/prompt_engineering_for_software_developer_cert.pdf",
        image: "/img/certificates/prompt_engineering_for_software_developer_cert/prompt_engineering_for_software_developer_cert_page-0001.jpg",
    },
    {
        title: (
            <>
                Start Programming <br /> with Python
            </>
        ),
        description: "Comprehensive introduction to Python programming language.",
        link: "/pdf/start_programming_with_python_cert.pdf",
        image: "/img/certificates/start_programming_with_python_cert/start_programming_with_python_cert_page-0001.jpg",
    },
];

export default function CertificatesPage() {
    return (
        <>
            <Cursor />
            <HeaderNavigation />
            <FullpageProviderCertificates>
                <div id="fullpage">
                    {/* Optional Background Text similar to Work Page */}
                    <div className="background" style={{ opacity: 0.05, fontSize: "15vw" }}>
                        CERTIFIED
                        <br />
                        SKILLS
                    </div>

                    {certificatesData.map((item, index) => (
                        <CertificateSection
                            key={item.link}
                            item={item}
                            index={index}
                            length={certificatesData.length}
                            color={index % 2 !== 0 ? "Light" : "Dark"}
                        />
                    ))}
                </div>
            </FullpageProviderCertificates>
        </>
    );
}
