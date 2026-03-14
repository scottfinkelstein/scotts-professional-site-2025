"use client";

import { useState, useEffect } from "react";
import ScrollFadeIn from "./ScrollFadeIn";

const techStack = [
  { label: "Swift", color: "bg-orange-900/70 text-orange-50 border-orange-700/80" },
  { label: "SwiftUI", color: "bg-orange-900/70 text-orange-50 border-orange-700/80" },
  { label: "React", color: "bg-cyan-900/70 text-cyan-50 border-cyan-700/80" },
  { label: "Next.js", color: "bg-gray-700/70 text-gray-50 border-gray-600/80" },
  { label: "TypeScript", color: "bg-blue-900/70 text-blue-50 border-blue-700/80" },
  { label: "Node.js", color: "bg-green-900/70 text-green-50 border-green-700/80" },
  { label: "Python", color: "bg-yellow-900/70 text-yellow-50 border-yellow-700/80" },
  { label: "Tailwind CSS", color: "bg-teal-900/70 text-teal-50 border-teal-700/80" },
  { label: "Claude API", color: "bg-purple-900/70 text-purple-50 border-purple-700/80" },
  { label: "Xcode", color: "bg-blue-900/70 text-blue-50 border-blue-700/80" },
  { label: "Git", color: "bg-red-900/70 text-red-50 border-red-700/80" },
  { label: "Vercel", color: "bg-gray-700/70 text-gray-50 border-gray-600/80" },
];

export default function About() {
  const [visibleTech, setVisibleTech] = useState<number[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Show all tech items immediately
      setVisibleTech(techStack.map((_, i) => i));
      return;
    }

    // Original staggered animation
    techStack.forEach((_, i) => {
      setTimeout(() => {
        setVisibleTech((prev) => [...prev, i]);
      }, 600 + i * 80);
    });
  }, []);

  return (
    <ScrollFadeIn>
      <section id="about" className="py-8 scroll-mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="flex-shrink-0">
              <img
                src="/images/scott-finkelstein.jpg"
                alt="Scott Finkelstein"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg ring-4 ring-blue-500/30"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Scott Finkelstein
              </h1>
              <h2 className="text-2xl text-blue-600 dark:text-blue-400 mb-2">
                Technology Leader & App Developer
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                Building things with code — from enterprise platforms to weekend experiments.
              </p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Experienced technology leader with a deep passion for building — whether that&apos;s
              leading engineering teams at scale or shipping a side-project app at midnight.
              I combine strategic thinking with hands-on craftsmanship, from architecture decisions
              to writing the actual code.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Outside of my leadership roles, I spend time experimenting with new technologies,
              building iOS apps, and exploring what&apos;s possible at the intersection of great UX
              and emerging tech.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8 mb-10">
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="text-2xl mb-2" aria-hidden="true">🏗️</div>
                <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-2">
                  Builder
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-sm">
                  Shipping iOS apps, web tools, and prototypes — turning ideas into working software
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
                <div className="text-2xl mb-2" aria-hidden="true">🧪</div>
                <h3 className="font-semibold text-lg text-green-900 dark:text-green-100 mb-2">
                  Experimenter
                </h3>
                <p className="text-green-700 dark:text-green-200 text-sm">
                  Constantly tinkering with new frameworks, APIs, and dev tools to find what&apos;s next
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="text-2xl mb-2" aria-hidden="true">⚡</div>
                <h3 className="font-semibold text-lg text-purple-900 dark:text-purple-100 mb-2">
                  Leader
                </h3>
                <p className="text-purple-700 dark:text-purple-200 text-sm">
                  15+ years growing engineering teams and driving technology strategy at scale
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                Tech I work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={tech.label}
                    className={`
                      border text-xs font-medium px-3 py-1.5 rounded-full
                      transition-all duration-500
                      ${tech.color}
                      ${visibleTech.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                    `}
                  >
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
