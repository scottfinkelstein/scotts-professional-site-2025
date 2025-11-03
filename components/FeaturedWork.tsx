"use client";

import ScrollFadeIn from "./ScrollFadeIn";

export default function FeaturedWork() {
  const featuredWork = [
    {
      title: "Enterprise Analytics Platform",
      type: "Web Application",
      description: "A comprehensive data analytics platform that processes 100M+ data points daily, providing real-time insights and predictive analytics for enterprise clients.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS"],
      highlights: [
        "Real-time data processing with sub-second latency",
        "Custom visualization engine with 20+ chart types",
        "Advanced machine learning algorithms for predictive analytics",
        "Scalable microservices architecture supporting 10K+ concurrent users"
      ],
      image: "https://picsum.photos/600/400?random=1",
      link: "#",
      category: "Enterprise Software"
    },
    {
      title: "Mobile Banking App",
      type: "Mobile Application",
      description: "Secure, user-friendly mobile banking application serving 500K+ active users with advanced financial management features.",
      technologies: ["React Native", "TypeScript", "Node.js", "MongoDB", "Stripe API"],
      highlights: [
        "Biometric authentication and end-to-end encryption",
        "Real-time transaction notifications and spending insights",
        "Integrated budgeting tools with AI-powered recommendations",
        "99.9% uptime with robust error handling and offline support"
      ],
      image: "https://picsum.photos/600/400?random=2",
      link: "#",
      category: "Fintech"
    },
    {
      title: "E-commerce Marketplace",
      type: "Website & Platform",
      description: "Multi-vendor e-commerce platform connecting buyers and sellers globally, with advanced search, payments, and logistics integration.",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "Vercel", "Algolia"],
      highlights: [
        "Advanced product search with AI-powered recommendations",
        "Multi-currency payment processing in 40+ countries",
        "Automated vendor onboarding and verification system",
        "Real-time inventory management and order tracking"
      ],
      image: "https://picsum.photos/600/400?random=3",
      link: "#",
      category: "E-commerce"
    },
    {
      title: "AI-Powered CRM System",
      type: "SaaS Platform",
      description: "Intelligent customer relationship management system with automated lead scoring, conversation analysis, and predictive sales forecasting.",
      technologies: ["Vue.js", "Python", "FastAPI", "TensorFlow", "PostgreSQL", "Docker"],
      highlights: [
        "Machine learning models for lead qualification and scoring",
        "Natural language processing for sentiment analysis",
        "Automated workflow engine with 100+ pre-built templates",
        "Comprehensive analytics dashboard with custom reporting"
      ],
      image: "https://picsum.photos/600/400?random=4",
      link: "#",
      category: "Business Tools"
    }
  ];

  return (
    <ScrollFadeIn delay={100}>
      <section id="featured-work" className="py-8 scroll-mt-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Work
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredWork.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {project.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-400 flex items-start text-sm"
                        >
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
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Projects Delivered</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">1M+</div>
              <div className="text-sm opacity-90">Users Served</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-sm opacity-90">Uptime Average</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Technologies Used</div>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  );
}