"use client";
import React, { useState, useEffect } from "react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700"] });

export default function SideNav() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { icon: "home", path: "/", label: "Home" },
    { icon: "folder", path: "/projects", label: "Projects" },
    { icon: "skills", path: "/skills", label: "Skills" },
    { icon: "experince", path: "/experience", label: "Experience" },
    { icon: "mail", path: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    return pathname === path || (path === "/" && pathname === "/");
  };

  return (
    <>
      {/* Mobile Top Navigation */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#141516] border-b border-[#292A2B]">
          <div className="flex justify-around items-center p-3">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`flex flex-col items-center p-2 rounded-lg transition-all duration-300 ${
                  isActive(item.path) ? "bg-purple-600" : "hover:bg-[#292A2B]"
                }`}
              >
                <img
                  src={`/${item.icon}.webp`}
                  alt={item.label}
                  className="h-6 w-6"
                />
                <span className="text-xs text-[#D1D1D1] mt-1">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Side Navigation */}
      {!isMobile && (
        <div className="sticky top-0 h-screen w-[25vw] min-w-[300px] max-w-[400px] flex flex-col items-center gap-8 py-10 px-6 bg-[#141516] border-r border-[#292A2B]">
          {/* Profile Section */}
          <div className="flex flex-col items-center gap-4 w-full">
            <div className="relative group w-[180px] h-[180px]">
              <img
                src="/aniket.webp"
                alt="Profile"
                format="webp"
                className="w-full h-full rounded-full object-cover border-4 border-[#7942C0] group-hover:border-white transition-all duration-300"
              />
            </div>

            <div className="text-center w-full">
              <h1
                className={`${outfit.className} font-bold text-white text-3xl truncate`}
              >
                ANIKET SHARMA
              </h1>
              <p className={`${outfit.className} text-[#D1D1D1] text-xl`}>
                Front-End Developer
              </p>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex justify-between items-center w-full bg-[#292A2B] p-4 rounded-2xl">
            {navItems.map((item) => (
              <Link
                href={item.path}
                key={item.path}
                className={`group flex flex-col items-center pt-1 rounded-lg transition-all duration-300 min-w-[50px] ${
                  isActive(item.path)
                    ? "bg-purple-600 scale-105"
                    : "hover:bg-[#292A2B]"
                }`}
              >
                <img
                  src={`/${item.icon}.webp`}
                  alt={item.label}
                  className="h-6 w-6 transition-all duration-300 group-hover:scale-125"
                />
                <span className="text-xs font-bold text-[#D1D1D1] mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="mt-auto w-full">
            <div className="bg-[#292A2B] rounded-2xl p-6 space-y-4">
              <h3
                className={`${outfit.className} text-white font-bold text-lg`}
              >
                Contact Info
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: "contact",
                    text: "+91-7888346624",
                    link: "tel:7888346624",
                  },
                  {
                    icon: "mail",
                    text: "aniketsharma090503@gmail.com",
                    link: "mailto:aniketsharma090503@gmail.com",
                  },
                  {
                    icon: "linked",
                    text: "Aniket Sharma",
                    link: "https://in.linkedin.com/in/aniket-sharma-558038252",
                  },
                  {
                    icon: "git1",
                    text: "aniketsharma953",
                    link: "https://github.com/aniketsharma953",
                  },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <img
                      src={`/${item.icon}.webp`}
                      alt={item.icon}
                      className="h-5 w-5"
                    />
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-sm truncate hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-white text-sm truncate">
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
