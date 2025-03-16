
import React, { useEffect, useRef } from 'react';

interface DiamondProps {
  size: 'small' | 'medium' | 'large';
  layer: 1 | 2 | 3 | 4;
  top: string;
  left: string;
  delay?: number;
}

const Diamond: React.FC<DiamondProps> = ({ size, layer, top, left, delay = 0 }) => {
  const diamondRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const diamond = diamondRef.current;
    if (!diamond) return;
    
    // Add animation with delay
    setTimeout(() => {
      diamond.style.animation = `fadeInUp 1s forwards, float ${6 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`;
    }, delay);
  }, [delay]);
  
  return (
    <div 
      ref={diamondRef}
      className={`parallax-diamond ${size} parallax-layer-${layer}`}
      style={{ 
        top, 
        left,
        opacity: 0, // Start invisible for fade in effect
      }}
    />
  );
};

const ParallaxDiamonds: React.FC = () => {
  useEffect(() => {
    // Parallax scrolling effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply different movement speeds to different layers
      document.querySelectorAll('.parallax-layer-1').forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${scrollY * 0.1}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-2').forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${scrollY * 0.05}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-3').forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${scrollY * 0.03}px)`;
      });
      
      document.querySelectorAll('.parallax-layer-4').forEach(element => {
        (element as HTMLElement).style.transform = `translateY(${scrollY * 0.02}px)`;
      });
    };
    
    // Add click event to create glowing diamonds
    const handleClick = (e: MouseEvent) => {
      const diamondGlow = document.createElement('div');
      diamondGlow.className = 'diamond-glow';
      diamondGlow.style.left = `${e.clientX - 15}px`;
      diamondGlow.style.top = `${e.clientY - 15}px`;
      document.body.appendChild(diamondGlow);
      
      // Remove from DOM after animation completes
      setTimeout(() => {
        document.body.removeChild(diamondGlow);
      }, 1000);
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);
    };
  }, []);
  
  // Generate random diamonds with different sizes, positions, and layers
  const generateRandomDiamonds = () => {
    const diamonds = [];
    
    // Large background diamonds (fewer, more faded)
    for (let i = 0; i < 5; i++) {
      diamonds.push(
        <Diamond 
          key={`large-${i}`}
          size="large"
          layer={(Math.floor(Math.random() * 2) + 3) as 3 | 4}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          delay={i * 200}
        />
      );
    }
    
    // Medium diamonds
    for (let i = 0; i < 8; i++) {
      diamonds.push(
        <Diamond 
          key={`medium-${i}`}
          size="medium"
          layer={(Math.floor(Math.random() * 2) + 2) as 2 | 3}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          delay={i * 150}
        />
      );
    }
    
    // Small diamonds (more, closer to foreground)
    for (let i = 0; i < 12; i++) {
      diamonds.push(
        <Diamond 
          key={`small-${i}`}
          size="small"
          layer={(Math.floor(Math.random() * 2) + 1) as 1 | 2}
          top={`${Math.random() * 100}%`}
          left={`${Math.random() * 100}%`}
          delay={i * 100}
        />
      );
    }
    
    return diamonds;
  };
  
  return (
    <div className="parallax-container">
      {generateRandomDiamonds()}
    </div>
  );
};

export default ParallaxDiamonds;
