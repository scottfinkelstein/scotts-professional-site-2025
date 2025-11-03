export default function About() {
  return (
    <section id="about" className="py-16 scroll-mt-16">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <div className="flex-shrink-0">
            <img 
              src="/images/scott-finkelstein.jpg" 
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
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100 mb-2">
                Leadership
              </h3>
              <p className="text-blue-700 dark:text-blue-200 text-sm">
                Building and scaling high-performance DevOps and enterprise application support teams
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h3 className="font-semibold text-lg text-green-900 dark:text-green-100 mb-2">
                Strategy
              </h3>
              <p className="text-green-700 dark:text-green-200 text-sm">
                Aligning technology initiatives with business objectives to drive measurable outcomes
              </p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold text-lg text-purple-900 dark:text-purple-100 mb-2">
                Innovation
              </h3>
              <p className="text-purple-700 dark:text-purple-200 text-sm">
                Leveraging emerging technologies to create competitive advantages and market opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
