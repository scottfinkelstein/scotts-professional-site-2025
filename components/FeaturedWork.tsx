"use client";

import { useState } from "react";
import ScrollFadeIn from "./ScrollFadeIn";

type Category = "All" | "iOS" | "Web" | "Experiments";

const projects = [
  {
    title: "Serenescape",
    type: "iOS App",
    status: "Live" as const,
    description:
      "A meditation and mindfulness application designed to elevate your wellness journey with customizable themes and ambient soundscapes.",
    technologies: ["Swift", "SwiftUI", "WidgetKit"],
    highlights: [
      "Choose between various color and sound themes",
      "Home screen widgets to quickly launch your favorite meditation",
    ],
    image: "/images/serenescape-banner.png",
    link: "https://scottfinkelstein.com/serenescape",
    category: "iOS" as Category,
    newWindow: true,
  },
  {
    title: "This Portfolio",
    type: "Web App",
    status: "Live" as const,
    description:
      "A single-page portfolio built with Next.js 16, React 19, and Tailwind CSS. Designed dark-first with scroll animations and a focus on clean, fast UI.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "App Router with React 19 and server components",
      "Scroll-driven animations via IntersectionObserver",
    ],
    image: "",
    link: "#about",
    category: "Web" as Category,
    newWindow: false,
  },
  {
    title: "AI Experiments",
    type: "Claude API",
    status: "In Dev" as const,
    description:
      "A sandbox for exploring the Claude API — prompt engineering, tool use, multi-turn conversations, and lightweight agent workflows.",
    technologies: ["Claude API", "TypeScript", "Node.js", "Next.js"],
    highlights: [
      "Prompt chaining and multi-turn conversation patterns",
      "Tool use and function calling explorations",
    ],
    image: "",
    link: "#",
    category: "Experiments" as Category,
    newWindow: false,
  },
  {
    title: "Swift UI Lab",
    type: "iOS Experiments",
    status: "Experiment" as const,
    description:
      "A collection of SwiftUI component explorations — custom animations, view modifiers, and interaction patterns that push what&apos;s possible in the Apple ecosystem.",
    technologies: ["Swift", "SwiftUI", "Xcode"],
    highlights: [
      "Custom transition and animation experiments",
      "Reusable view modifier patterns",
    ],
    image: "",
    link: "#",
    category: "Experiments" as Category,
    newWindow: false,
  },
];

const statusStyles: Record<string, string> = {
  Live: "bg-green-500/20 text-green-300 border border-green-500/30",
  "In Dev": "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30",
  Experiment: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
};

const statusDot: Record<string, string> = {
  Live: "bg-green-400",
  "In Dev": "bg-yellow-400",
  Experiment: "bg-purple-400",
};

const categories: Category[] = ["All", "iOS", "Web", "Experiments"];

export default function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <ScrollFadeIn delay={100}>
      <section id="featured-work" className="py-8 scroll-mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              App Lab
            </h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-10">
            {filtered.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target={project.newWindow ? "_blank" : "_self"}
                rel={project.newWindow ? "noopener noreferrer" : undefined}
                className="block bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:-translate-y-1.5 transition-all duration-300 group"
              >
                {project.image ? (
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-5xl opacity-20 select-none">
                      {project.category === "iOS" ? "📱" : project.category === "Web" ? "🌐" : "🧪"}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[project.status]}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[project.status]}`} />
                      {project.status}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.highlights.map((h, idx) => (
                      <li key={idx} className="text-gray-600 dark:text-gray-400 flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-1">iOS + Web</div>
              <div className="text-sm opacity-90">Platforms</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-1">Always</div>
              <div className="text-sm opacity-90">Building Something New</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-1">Open</div>
              <div className="text-sm opacity-90">To Collaborate</div>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
