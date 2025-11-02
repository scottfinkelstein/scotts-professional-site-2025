export default function Work() {
  const experiences = [
    {
      role: "Chief Technology Officer",
      company: "Enterprise Tech Solutions",
      period: "2020 - Present",
      description: "Leading technology strategy and execution for a $500M enterprise software company. Oversee 200+ engineers across product development, platform engineering, and infrastructure teams.",
      achievements: [
        "Reduced infrastructure costs by 40% through cloud optimization and modernization",
        "Implemented DevOps practices reducing deployment time from weeks to hours",
        "Established data-driven decision making culture with comprehensive analytics platform",
      ],
    },
    {
      role: "VP of Engineering",
      company: "Innovation Labs Inc",
      period: "2017 - 2020",
      description: "Directed engineering operations for a fast-growing fintech startup through Series B funding and 10x user growth.",
      achievements: [
        "Scaled engineering team from 15 to 100+ while maintaining productivity and culture",
        "Architected microservices platform supporting 1M+ daily active users",
        "Led successful SOC 2 Type II and PCI DSS compliance initiatives",
      ],
    },
    {
      role: "Director of Software Engineering",
      company: "Global Systems Corp",
      period: "2014 - 2017",
      description: "Managed multiple product development teams delivering mission-critical enterprise applications.",
      achievements: [
        "Launched 3 major product releases generating $50M+ in new revenue",
        "Established Agile practices across 5 teams improving delivery predictability by 60%",
        "Mentored and developed 10+ engineers into senior leadership roles",
      ],
    },
  ];

  return (
    <section id="work" className="py-16 scroll-mt-16">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 pb-8 last:pb-0"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {exp.role}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 mt-1">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {exp.period}
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Years Experience</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">200+</div>
            <div className="text-sm opacity-90">Team Members Led</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">$100M+</div>
            <div className="text-sm opacity-90">Revenue Impact</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-90">Products Launched</div>
          </div>
        </div>
      </div>
    </section>
  );
}
