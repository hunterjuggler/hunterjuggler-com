
import React, { useEffect, useRef } from 'react';

interface MotionProps {
  children: React.ReactNode;
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string;
  };
  viewport?: {
    once?: boolean;
    margin?: string;
  };
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void; // Add onClick handler support
}

export const motion = {
  div: ({
    children,
    initial,
    animate,
    whileInView,
    transition,
    viewport,
    className,
    style,
    onClick, // Add onClick to the destructured props
    ...props
  }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = ref.current;
      if (!element || !whileInView) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Apply the whileInView styles
              Object.entries(whileInView).forEach(([key, value]) => {
                if (key === 'opacity') element.style.opacity = value;
                if (key === 'y') element.style.transform = `translateY(${value}px)`;
                if (key === 'x') element.style.transform = `translateX(${value}px)`;
                if (key === 'scale') element.style.transform = `scale(${value})`;
              });

              // Apply transition
              if (transition) {
                element.style.transition = `all ${transition.duration || 0.3}s ${
                  transition.ease || 'ease'
                } ${transition.delay || 0}s`;
              }

              if (viewport?.once) {
                observer.disconnect();
              }
            }
          });
        },
        {
          rootMargin: viewport?.margin || '0px',
          threshold: 0.1,
        }
      );

      observer.observe(element);

      return () => observer.disconnect();
    }, [whileInView, transition, viewport]);

    useEffect(() => {
      const element = ref.current;
      if (!element || !animate) return;

      // Apply the animate styles
      Object.entries(animate).forEach(([key, value]) => {
        if (key === 'opacity') element.style.opacity = value;
        if (key === 'y') element.style.transform = `translateY(${value}px)`;
        if (key === 'x') element.style.transform = `translateX(${value}px)`;
        if (key === 'scale') element.style.transform = `scale(${value})`;
      });

      // Apply transition
      if (transition) {
        element.style.transition = `all ${transition.duration || 0.3}s ${
          transition.ease || 'ease'
        } ${transition.delay || 0}s`;
      }
    }, [animate, transition]);

    // Set initial styles
    const initialStyles: React.CSSProperties = {};
    if (initial) {
      Object.entries(initial).forEach(([key, value]) => {
        if (key === 'opacity') initialStyles.opacity = value;
        if (key === 'y') initialStyles.transform = `translateY(${value}px)`;
        if (key === 'x') initialStyles.transform = `translateX(${value}px)`;
        if (key === 'scale') initialStyles.transform = `scale(${value})`;
      });
    }

    return (
      <div
        ref={ref}
        className={className}
        style={{ ...initialStyles, ...style }}
        onClick={onClick} // Add onClick handler to the div
        {...props}
      >
        {children}
      </div>
    );
  },
};
