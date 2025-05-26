import { useState, useEffect, useRef } from 'react';
import { Star, GitBranch, ExternalLink, Code, Search } from 'lucide-react';

// Mock data for repositories
const repositories = [
  {
    id: 1,
    name: 'api-gateway',
    description: 'Microservices API gateway with authentication, rate limiting, and service discovery.',
    stars: 154,
    forks: 32,
    language: 'TypeScript',
    languageColor: '#2b7489',
    lastUpdated: '2 days ago',
    isPublic: true,
  },
  {
    id: 2,
    name: 'data-pipeline',
    description: 'Scalable data processing pipeline for real-time analytics and ETL operations.',
    stars: 87,
    forks: 21,
    language: 'Python',
    languageColor: '#3572A5',
    lastUpdated: '5 days ago',
    isPublic: true,
  },
  {
    id: 3,
    name: 'ui-component-library',
    description: 'Reusable UI component library with accessibility built-in.',
    stars: 213,
    forks: 45,
    language: 'JavaScript',
    languageColor: '#f1e05a',
    lastUpdated: '1 week ago',
    isPublic: true,
  },
  {
    id: 4,
    name: 'blockchain-tools',
    description: 'Collection of tools for blockchain development and interaction.',
    stars: 76,
    forks: 18,
    language: 'Solidity',
    languageColor: '#AA6746',
    lastUpdated: '3 days ago',
    isPublic: true,
  },
  {
    id: 5,
    name: 'ml-model-deployment',
    description: 'Framework for deploying ML models to production with monitoring.',
    stars: 128,
    forks: 27,
    language: 'Python',
    languageColor: '#3572A5',
    lastUpdated: '1 day ago',
    isPublic: true,
  },
  {
    id: 6,
    name: 'serverless-architecture',
    description: 'Reference architecture for serverless applications and functions.',
    stars: 95,
    forks: 23,
    language: 'TypeScript',
    languageColor: '#2b7489',
    lastUpdated: '4 days ago',
    isPublic: true,
  },
];

const RepositoriesSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [sortBy, setSortBy] = useState('stars');
  const [animatedCards, setAnimatedCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  // Extract unique languages for the filter
  const languages = Array.from(new Set(repositories.map(repo => repo.language)));

  // Filter and sort repositories
  const filteredRepositories = repositories
    .filter(repo => {
      const matchesSearch = repo.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          repo.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesLanguage = selectedLanguage === '' || repo.language === selectedLanguage;
      return matchesSearch && matchesLanguage;
    })
    .sort((a, b) => {
      if (sortBy === 'stars') return b.stars - a.stars;
      if (sortBy === 'forks') return b.forks - a.forks;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Start animation for the first few cards immediately
        const initialBatch = repositories.slice(0, 3).map(repo => repo.id);
        setAnimatedCards(initialBatch);
        
        // Animate the rest with a delay
        setTimeout(() => {
          setAnimatedCards(repositories.map(repo => repo.id));
        }, 300);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="repositories" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Repositories
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Discover our open-source code, libraries, and tools
          </p>
        </div>
        
        {/* Filters */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-1 sm:col-span-2 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search repositories..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="col-span-1">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
            >
              <option value="">All Languages</option>
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
          
          <div className="col-span-1">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block w-full py-2 px-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-100"
            >
              <option value="stars">Most Stars</option>
              <option value="forks">Most Forks</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        
        {/* Repository grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepositories.map((repo) => (
            <div 
              key={repo.id}
              className={`bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm hover:shadow-md transition-all duration-300 transform ${
                animatedCards.includes(repo.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${(animatedCards.includes(repo.id) ? 100 * (repo.id % 3) : 0)}ms` 
              }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                    <Code className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    {repo.name}
                  </h3>
                  <div className="flex items-center">
                    {repo.isPublic && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        Public
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm h-12 line-clamp-2">
                  {repo.description}
                </p>
                
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span 
                        className="w-3 h-3 rounded-full mr-1.5" 
                        style={{ backgroundColor: repo.languageColor }}
                      ></span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{repo.language}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-xs">{repo.stars}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <GitBranch className="h-4 w-4 mr-1" />
                      <span className="text-xs">{repo.forks}</span>
                    </div>
                  </div>
                  
                  <a
                    href={`https://github.com/etib-corp/${repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    View <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredRepositories.length === 0 && (
          <div className="text-center py-12">
            <Code className="h-12 w-12 mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">No repositories found</h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        )}
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/etib-corp?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition-colors duration-200"
          >
            View All on GitHub <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RepositoriesSection;