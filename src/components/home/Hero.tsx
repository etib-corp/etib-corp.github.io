import { ArrowRight, Github, Code, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
      <div className="absolute inset-0 bg-grid-blue-500/[0.05] bg-[size:40px_40px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="text-center">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-8">
                <Github className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">ETIB Corporation on GitHub</span>
              </div>
            </div>

            <h1 className={`text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl transition-all duration-1000 delay-150 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="block">Shaping the Future of XR</span>
              <span className="block text-blue-600 dark:text-blue-500">With Open Source</span>
            </h1>

            <p className={`mt-6 max-w-lg mx-auto text-xl text-gray-600 dark:text-gray-300 sm:max-w-3xl transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Discover our repositories, explore cutting-edge projects, and stay up to date with our latest releases. Join a vibrant community of developers and contributors driving innovation together.
            </p>

            <div className={`mt-10 sm:flex sm:justify-center transition-all duration-1000 delay-450 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="rounded-md shadow">
                <a
                  href="https://github.com/etib-corp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Visit GitHub
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#repositories"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white dark:bg-gray-800 dark:text-blue-500 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                >
                  Explore Repositories <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className={`pb-16 transition-all duration-1000 delay-600 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-transparent"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white dark:bg-gray-800 shadow-lg sm:grid sm:grid-cols-3 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400 flex items-center justify-center">
                      <Code className="h-5 w-5 mr-1" /> Repositories
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-500">20+</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400 flex items-center justify-center">
                      <Github className="h-5 w-5 mr-1" /> Projects
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-500">10+</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 dark:border-gray-700 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500 dark:text-gray-400 flex items-center justify-center">
                      <Users className="h-5 w-5 mr-1" /> Contributors
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-blue-600 dark:text-blue-500">50+</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;