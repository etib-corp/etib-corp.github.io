import { useState, useEffect, useRef } from 'react';
import { Tag, Calendar, ExternalLink, ArrowRight } from 'lucide-react';

// Mock data for releases
const releases = [
  {
    id: 1,
    version: 'v2.3.0',
    repository: 'api-gateway',
    date: '2025-04-15',
    description: 'Added support for GraphQL endpoints and improved authentication mechanisms.',
    highlights: [
      'GraphQL integration with schema validation',
      'Enhanced JWT authentication',
      'Performance optimizations for high-traffic scenarios',
      'New monitoring dashboard'
    ],
    isStable: true
  },
  {
    id: 2,
    version: 'v1.8.5',
    repository: 'ui-component-library',
    date: '2025-04-10',
    description: 'Accessibility improvements and new components for data visualization.',
    highlights: [
      'ARIA compliance updates across all components',
      'New chart components with responsive design',
      'Dark mode enhancements',
      'Reduced bundle size by 15%'
    ],
    isStable: true
  },
  {
    id: 3,
    version: 'v0.9.0',
    repository: 'blockchain-tools',
    date: '2025-04-02',
    description: 'Beta release of our new smart contract testing framework.',
    highlights: [
      'Automated testing for ERC-20 and ERC-721 contracts',
      'Gas optimization analysis',
      'Security vulnerability scanner',
      'Integration with popular blockchain development environments'
    ],
    isStable: false
  }
];

const ReleasesSection = () => {
  const [visibleReleases, setVisibleReleases] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setTimeout(() => {
          setVisibleReleases(releases.map(release => release.id));
        }, 100);
        return () => clearTimeout(timer);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section 
      id="releases" 
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Latest Releases
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Stay up to date with our newest features and improvements
          </p>
        </div>
        
        <div className="space-y-12">
          {releases.map((release, index) => (
            <div 
              key={release.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-700 transform ${
                visibleReleases.includes(release.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-64 bg-gray-50 dark:bg-gray-700 p-6 flex flex-col justify-center items-center text-center border-r border-gray-100 dark:border-gray-600">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
                    <Tag className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {release.version}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {release.repository}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="h-4 w-4 mr-1.5" />
                    {formatDate(release.date)}
                  </div>
                  {release.isStable ? (
                    <span className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                      Stable
                    </span>
                  ) : (
                    <span className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100">
                      Beta
                    </span>
                  )}
                </div>
                <div className="p-8 flex-1">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    Release Notes
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {release.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-3">Highlights:</h4>
                    <ul className="space-y-2">
                      {release.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="h-5 w-5 text-blue-500 mr-2">•</span>
                          <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <a
                      href={`https://github.com/etib-corp/${release.repository}/releases/tag/${release.version}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                    >
                      View Release Details <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/orgs/etib-corp/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-lg"
          >
            View All Releases <ArrowRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReleasesSection;