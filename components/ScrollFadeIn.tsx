"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollFadeIn({ children, className = "", delay = 0 }: ScrollFadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mediaQuery.matches;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationDelay = prefersReducedMotion.current ? 0 : delay;
            timeoutId = setTimeout(() => {
              element.classList.add("animate-fade-in");
              observer.unobserve(element);
            }, animationDelay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      observer.disconnect();
    };
  }, [delay]);

  const animationStyle = prefersReducedMotion.current
    ? {}
    : {
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      };

  return (
    <div
      ref={elementRef}
      className={`opacity-0 ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
}
