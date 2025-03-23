
import React from "react";
import { motion } from "@/lib/motion";

interface FunIconProps {
  name: string;
  className?: string;
}

const FunIcon: React.FC<FunIconProps> = ({ name, className = "" }) => {
  const getIcon = () => {
    switch (name) {
      case "star":
        return (
          <svg viewBox="0 0 24 24" className={`w-full h-full ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" 
                  style={{ 
                    strokeDasharray: "70",
                    strokeDashoffset: "0", 
                    animation: "dash 3s linear infinite",
                    filter: "url(#rough)"
                  }} />
            <defs>
              <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
              </filter>
            </defs>
          </svg>
        );
      case "juggle":
        return (
          <svg viewBox="0 0 24 24" className={`w-full h-full ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="8" r="3" style={{ filter: "url(#rough)" }} />
            <circle cx="16" cy="6" r="3" style={{ filter: "url(#rough)" }} />
            <circle cx="12" cy="16" r="3" style={{ filter: "url(#rough)" }} />
            <path d="M8 8 L12 16 M12 16 L16 6 M16 6 L8 8" style={{ filter: "url(#rough)" }} />
            <defs>
              <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>
          </svg>
        );
      case "unicycle":
        return (
          <svg viewBox="0 0 24 24" className={`w-full h-full ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="16" r="6" style={{ filter: "url(#rough)" }} />
            <line x1="12" y1="10" x2="12" y2="4" style={{ filter: "url(#rough)" }} />
            <line x1="10" y1="4" x2="14" y2="4" style={{ filter: "url(#rough)" }} />
            <defs>
              <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>
          </svg>
        );
      case "fire":
        return (
          <svg viewBox="0 0 24 24" className={`w-full h-full ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3s.5-2 1.5-2c1 0 1.5 1 1.5 2" style={{ filter: "url(#rough)" }} />
            <path d="M9 2C4 7.5 4 11 4 19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2c0-8 0-11.5-5-17" style={{ filter: "url(#rough)" }} />
            <defs>
              <filter id="rough" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" result="noise"/>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
              </filter>
            </defs>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      className={`${className} flex items-center justify-center`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ stiffness: 500, damping: 10 }}
    >
      {getIcon()}
    </motion.div>
  );
};

export default FunIcon;
