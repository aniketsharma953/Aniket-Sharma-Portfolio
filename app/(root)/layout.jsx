"use client";
import { useState, useEffect } from "react";
import SIdeNav from "../components/SIdeNav";

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#141516]">
      <SIdeNav />
      <main className={`flex-1 overflow-y-auto ${isMobile ? 'mt-16' : ''}`}>
        {children}
      </main>
    </div>
  );
}