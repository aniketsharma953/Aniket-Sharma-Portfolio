"use client";
import React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

const skills = [
  { name: "HTML5", level: 95, icon: "/html5.png" },
  { name: "CSS3", level: 90, icon: "/css3.png" },
  { name: "JavaScript", level: 85, icon: "/javascript.png" },
  { name: "React.js", level: 88, icon: "/react.png" },
  { name: "Next.js", level: 83, icon: "/next.png" },
  { name: "Tailwind CSS", level: 87, icon: "/tailwind.png" },
  { name: "Bootstrap", level: 80, icon: "/bootstrap.png" },
  { name: "Git", level: 78, icon: "/git.png" },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[#141516] text-white p-8 md:p-12">
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1
            className={`${outfit.className} text-4xl md:text-5xl font-bold mb-4`}
          >
            MY <span className="text-[#7942C0]">SKILLS</span>
          </h1>
          <p
            className={`${outfit.className} text-xl text-[#D1D1D1] max-w-2xl mx-auto`}
          >
            Technologies I work with and my proficiency in each
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] rounded-xl p-6 hover:bg-[#292A2B] transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#292A2B] flex items-center justify-center group-hover:bg-[#7942C0] transition-all duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 object-contain 
                grayscale-[70%]         
                group-hover:grayscale-0  
                transition-all duration-300
                border border-[#333333]/30  
                hover:border-[#7942C0]/50   
                rounded-sm"
                  />
                </div>
                <h3 className={`${outfit.className} text-xl font-semibold`}>
                  {skill.name}
                </h3>
              </div>

              <div className="w-full bg-[#292A2B] rounded-full h-2.5">
                <div
                  className="bg-gradient-to-r from-[#7942C0] to-[#A45DEC] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-[#D1D1D1]">
                <span>Beginner</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-[#1F1F1F] rounded-xl p-8">
          <h2 className={`${outfit.className} text-2xl font-bold mb-4`}>
            Continuous <span className="text-[#7942C0]">Learning</span>
          </h2>
          <p className="text-[#D1D1D1] leading-relaxed">
            I&apos;m constantly expanding my skill set and staying updated with the
            latest web technologies. Currently exploring advanced Next.js
            features and TypeScript to build more robust applications.
          </p>
        </div>
      </div>
    </div>
  );
}
