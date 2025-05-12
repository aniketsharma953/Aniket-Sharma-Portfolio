"use client";
import React from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Shayar Portfolio",
      description: "A poetry showcase platform with interactive features",
      tags: ["React", "Next.js", "CSS"],
      image: "/shayari.png",
      link: "https://www.varunanand.in/",
      github: "https://github.com/Anmolashish/Varun-Anand-s-website.git",
    },
    {
      id: 2,
      title: "Your-Lie-In-April",
      description: "An interactive anime music experience page created during the Hakatahon task.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "/your-lie-april.png",
      link: "https://your-lie-in-april.vercel.app/",
      github: "https://github.com/Anmolashish/Your-lie-in-april.git",
    },
    {
      id: 3,
      title: "Season-Based-Anime",
      description: "A project built as the second task during the Hakatahon, offering anime suggestions based on seasonal themes.",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "/season.png",
      link: "https://season-based-anime-recommendation.vercel.app/",
      github: "https://github.com/Anmolashish/season-based-anime-recommendation.git",
    },
    {
      id: 4,
      title: "Travel Vista",
      description: "A dummy travel website project created during a four-week training program.",
      tags: ["HTML", "CSS", "BOOTSRAP"],
      image: "/travel-vista.png",
      link: "https://aniketsharma953.github.io/Travel-vista-/",
      github: "https://github.com/aniketsharma953/Travel-vista-.git",
    },
    {
      id: 5,
      title: "Calorie-counter",
      description: "A practice project designed to track daily calorie intake and promote healthy eating habits",
      tags: ["HTML", "CSS", "Javascript"],
      image: "/calorie.png",
      link: "https://aniketsharma953.github.io/Calorie-counter/",
      github: "https://github.com/aniketsharma953/Calorie-counter.git",
    },
    {
      id: 6,
      title: " Personal Portfolio",
      description: "My first portfolio website design",
      tags: ["React", "Next.js", "Tailwind CSS"],
      image: "/portfolio.png",
      link: "https://aniket-sharma-portfolio-orpin.vercel.app/",
      github: "https://github.com/aniketsharma953/Aniket-Sharma-Portfolio",
    },
  ];

  return (
    <div className="min-h-screen bg-[#141516] text-white p-8">
           
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className={`${outfit.className} text-4xl md:text-5xl font-bold mb-4`}
          >
            My <span className="text-[#7942C0]">Projects</span>
          </h1>
          <p
            className={`${outfit.className} text-xl text-[#D1D1D1] max-w-2xl mx-auto`}
          >
            Here are some of my recent projects showcasing my skills and
            expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1F1F1F] rounded-xl overflow-hidden border border-[#292A2B] hover:border-[#7942C0]/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 bg-[#292A2B] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`${outfit.className} text-xl font-bold mb-2 group-hover:text-[#7942C0] transition-colors`}
                >
                  {project.title}
                </h3>
                <p className="text-[#D1D1D1] mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#292A2B] rounded-full text-sm text-[#D1D1D1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#7942C0] rounded-lg text-sm font-medium hover:bg-[#A45DEC] transition-colors"
                  >
                    Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-[#7942C0] rounded-lg text-sm font-medium hover:bg-[#7942C0]/20 transition-colors"
                  >
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2
            className={`${outfit.className} text-2xl md:text-3xl font-bold mb-4`}
          >
            Want to see more of my work?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#7942C0] rounded-lg font-medium hover:bg-[#A45DEC] transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
