"use client";
import React from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function HomePage() {
  const projects = [
    {
      title: "Live Project",
      description: "A poetry showcase platform with interactive features ",
      tags: ["React", "Next.js", "CSS"],
      image: "/shayari.png",
      link: "/projects"
    },
    {
      title: "Your-Lie-In-April",
      description: "An interactive anime music experience page created during the Hakatahon task.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "/your-lie-april.png",
       link: "/projects"
    },
    {
      title: "Season-Based-Anime",
      description: "A project built as the second task during the Hakatahon .",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "/season.png",
       link: "/projects"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141516] text-white">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1
                className={`${outfit.className} text-5xl md:text-6xl font-bold mb-6`}
              >
                Hi, I&apos;m <span className="text-[#7942C0]">Aniket</span>
              </h1>
              <h2
                className={`${outfit.className} text-2xl md:text-3xl text-[#D1D1D1] mb-8`}
              >
                Front-End Developer
              </h2>
              <p className="text-lg text-[#D1D1D1] mb-8 leading-relaxed">
                I build exceptional digital experiences with modern web
                technologies. Currently specializing in React, Next.js, and
                interactive UI design.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-[#7942C0] rounded-lg font-medium hover:bg-[#A45DEC] transition-colors"
                >
                  View My Work
                </Link>
                <Link
                  href="/Resume2131267.pdf"
                  className="px-6 py-3 border border-[#7942C0] rounded-lg font-medium hover:bg-[#7942C0]/20 transition-colors"
                >
                  Resume
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative group w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-[#7942C0] rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src="/aniket.jpg"
                  alt="Aniket Sharma"
                  className="relative w-full h-full rounded-full object-cover border-4 border-[#7942C0] group-hover:border-white transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-24">
          <h2
            className={`${outfit.className} text-3xl md:text-4xl font-bold mb-12`}
          >
            Featured <span className="text-[#7942C0]">Projects</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link key={index} href={project.link}>
              <div
                
                className="bg-[#1F1F1F] rounded-xl p-6 border border-[#292A2B] hover:border-[#7942C0]/50 transition-all group overflow-hidden"
              >
                <div className="mb-4 h-48 bg-[#292A2B] rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#7942C0]/10 to-[#141516] flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#7942C0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#D1D1D1] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#292A2B] rounded-full text-sm text-[#D1D1D1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Skills Preview */}
        <section className="mb-24">
          <h2
            className={`${outfit.className} text-3xl md:text-4xl font-bold mb-12`}
          >
            My <span className="text-[#7942C0]">Expertise</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", icon: "/react.png" },
              { name: "Next.js", icon: "/next.png" },
              { name: "JavaScript", icon: "/javascript.png" },
              { name: "Tailwind", icon: "/tailwind.png" },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#1F1F1F] rounded-xl p-6 flex flex-col items-center hover:bg-[#292A2B] transition-colors"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
