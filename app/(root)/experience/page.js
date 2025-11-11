"use client";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      role: "Trainee",
      company: "Ellen Infotech",
      duration: "July 2023 - August 2023",
      location: "Jalandhar, India",
      description: [
        "Completed intensive 4-week training program in web development",
        "Developed foundational skills in HTML, CSS, JavaScript, and Bootstrap",
        "Collaborated on project",
        "Participated in code reviews",
      ],
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      project: {
        name: "Travel Vista",
        description:
          "A responsive travel booking platform showcasing popular destinations of Jaipur with interactive features",
        responsibilities: [
          "Implemented responsive UI components using Bootstrap",
          "Developed interactive tour booking functionality",
          "Optimized page load performance for better user experience",
        ],
      },
    },
    {
      id: 2,
      role: "Frontend Developer",
      company: "Live Project - Shayar Portfolio",
      duration: "August 2024 - November 2024",
      location: "Remote",
      description: [
        "Developed an interactive poetry showcase platform using modern web technologies",
        "Implemented smooth page transitions",
        "Optimized application for SEO and performance",
      ],
      tags: ["React", "Next.js", "CSS"],
      project: {
        name: "Shayar Portfolio",
        description:
          "A dynamic platform for poets to showcase their work with animated transitions",
        responsibilities: [
          "Architected and implemented the frontend using Next.js",
          "Created reusable React components",
          "Implemented responsive design principles",
        ],
      },
    },
    {
      id: 3,
      role: "Front-End Developer Intern",
      company: "Future Finders",
      duration: "January 2025 - July 2025",
      location: "Mohali, India",
      description: [
        "Completed 6-month internship focused on front-end development",
        "Gained hands-on experience in React.js and Next.js",
        "Successfully developed and deployed a front-end project as part of the training",
        "Collaborated with back-end developers to resolve integration issues and enhance functionality",
      ],
      tags: ["React.js", "Next.js", "JavaScript", "HTML", "CSS"],
      project: {
        name: "Interactive Web Application",
        description:
          "A dynamic front-end project built using React.js and Next.js to demonstrate component-based architecture and seamless data integration.",
        responsibilities: [
          "Developed responsive UI components with reusable React.js elements",
          "Integrated APIs and optimized rendering performance",
          "Collaborated with back-end team to ensure smooth data communication",
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-[#141516] text-white p-6 md:p-12">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1
            className={`${outfit.className} text-4xl md:text-6xl font-bold mb-4`}
          >
            Professional <span className="text-[#7942C0]">Journey</span>
          </h1>
          <p
            className={`${outfit.className} text-xl text-[#D1D1D1] max-w-2xl mx-auto`}
          >
            My career path and the projects that shaped my development skills
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 md:left-6 top-2 w-4 h-4 rounded-full bg-[#7942C0] z-10" />

              {/* Timeline card */}
              <div className="relative bg-[#1F1F1F] border border-[#292A2B] rounded-xl p-6 md:p-8 shadow-lg overflow-hidden">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-[#7942C0]/10 rounded-xl blur-md" />

                <div className="relative">
                  {/* Role and Company */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h2 className={`${outfit.className} text-2xl font-bold`}>
                        {exp.role}
                      </h2>
                      <h3 className="text-xl text-[#7942C0]">{exp.company}</h3>
                    </div>
                    <div className="mt-2 md:mt-0 text-[#D1D1D1]">
                      <p>{exp.duration}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#7942C0] mr-2">•</span>
                        <span className="text-[#D1D1D1]">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#292A2B] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Highlight */}
                  <div className="bg-[#292A2B]/50 p-4 rounded-lg border border-[#292A2B]">
                    <h4
                      className={`${outfit.className} font-bold text-lg mb-2`}
                    >
                      Project: {exp.project.name}
                    </h4>
                    <p className="text-[#D1D1D1] mb-3">
                      {exp.project.description}
                    </p>

                    <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.project.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#7942C0] text-xs mt-1 mr-2">
                            ▹
                          </span>
                          <span className="text-[#D1D1D1] text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 bg-[#1F1F1F] border border-[#292A2B] rounded-xl p-8"
        >
          <h2 className={`${outfit.className} text-3xl font-bold mb-6`}>
            Skills <span className="text-[#7942C0]">Developed</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Bootstrap",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Git",
              "Responsive Design",
              "UI",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-2 p-3 bg-[#292A2B] rounded-lg hover:bg-[#7942C0]/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#7942C0]" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
