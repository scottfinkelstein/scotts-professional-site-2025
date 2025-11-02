export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <img 
              src="/images/scott-finkelstein.jpeg" 
              alt="Scott Finkelstein"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Scott Finkelstein
            </h1>
            <h2 className="text-2xl text-blue-600 dark:text-blue-400">
              Driving Innovation & Digital Transformation
            </h2>
          </div>
        </div>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Experienced technology leader with a proven track record of leading high-performing teams, 
            architecting scalable solutions, and delivering transformative digital initiatives. Specializing 
            in strategic technology planning, enterprise architecture, service delivery, and organizational transformation.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            With over 15 years in technology leadership roles, I've guided organizations through complex 
            modernization efforts, established engineering excellence practices, and built cultures of 
            innovation that drive business value.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building and scaling high-performance engineering teams across global organizations
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Strategy
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Aligning technology initiatives with business objectives to drive measurable outcomes
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Leveraging emerging technologies to create competitive advantages and market opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
