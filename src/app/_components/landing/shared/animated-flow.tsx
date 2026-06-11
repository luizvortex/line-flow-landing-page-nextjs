"use client";

import { useEffect, useState } from "react";

export function AnimatedFlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <style>{`
        @keyframes flow-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-flow-wave {
          animation: flow-wave 25s linear infinite;
        }
        .animate-flow-wave-slow {
          animation: flow-wave 40s linear infinite reverse;
        }
        .animate-flow-wave-fast {
          animation: flow-wave 15s linear infinite;
        }
      `}</style>

      {/* Soft gradient flow background */}
      <div 
        className="absolute top-1/2 left-1/2 w-[800px] h-[400px] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #77aca2 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div 
        className="absolute top-[40%] right-[-10%] w-[600px] h-[300px] opacity-20 mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, #468189 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      {/* SVG Container width 200% so we can translate -50% and perfectly loop */}
      <div className="absolute top-[20%] left-0 w-[200%] md:w-[200vw] h-[350px] opacity-7">
        {/* Layer 1 - Deepest wave */}
        <div className="absolute inset-0 animate-flow-wave-slow opacity-50">
          <svg viewBox="0 0 2400 200" preserveAspectRatio="none" className="w-full h-full">
            <path 
              d="M0,100 C200,200 400,0 600,100 C800,200 1000,0 1200,100 C1400,200 1600,0 1800,100 C2000,200 2200,0 2400,100" 
              fill="none" 
              stroke="#5d9990" 
              strokeWidth="2" 
            />
          </svg>
        </div>

        {/* Layer 2 - Middle wave */}
        <div className="absolute inset-0 animate-flow-wave opacity-70 mt-4">
          <svg viewBox="0 0 2400 200" preserveAspectRatio="none" className="w-full h-full">
            <path 
              d="M0,100 C150,0 450,200 600,100 C750,0 1050,200 1200,100 C1350,0 1650,200 1800,100 C1950,0 2250,200 2400,100" 
              fill="none" 
              stroke="#77aca2" 
              strokeWidth="3" 
            />
          </svg>
        </div>
      </div>
      
      {/* Top mask */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#031926] to-transparent z-10" />
      {/* Bottom mask */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#031926] to-transparent z-10" />
    </div>
  );
}
