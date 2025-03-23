
import React from "react";

interface FunBackgroundProps {
  className?: string;
}

const FunBackground: React.FC<FunBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="sketch" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" />
          </filter>
          <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40">
            <circle cx="20" cy="20" r="1" fill="currentColor" fillOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" opacity="0.5" />
        <g filter="url(#sketch)">
          <path d="M0,0 Q50,50 100,0 Q150,50 200,0 Q250,50 300,0 V100 H0 Z" 
                fill="none" 
                stroke="currentColor" 
                strokeOpacity="0.1" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="5,10" 
                transform="translate(0, -80)" />
          <path d="M0,50 Q50,0 100,50 Q150,100 200,50 Q250,0 300,50" 
                fill="none" 
                stroke="currentColor" 
                strokeOpacity="0.1" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeDasharray="5,10" 
                transform="translate(0, 20)" />
        </g>
      </svg>
    </div>
  );
};

export default FunBackground;
