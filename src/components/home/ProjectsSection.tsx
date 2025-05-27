import { useState, useEffect } from 'react';
import { ExternalLink, Star, GitBranch, Code, ArrowRight } from 'lucide-react';

// Mock data for featured projects
const featuredProjects = [
  {
    id: 1,
    name: 'Maverik',
    description: 'A library for building immersive XR applications with advanced features and performance optimizations.',
    stars: 256,
    forks: 58,
    language: 'C++, Vulkan and OpenXR',
    languageColor: '#3572A5',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'VUI',
    description: 'A versatile UI framework for building modern XR applications with a focus on accessibility and performance.',
    stars: 198,
    forks: 42,
    language: 'C++ and Maverik',
    languageColor: '#2b7489',
    image: 'https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'XIDER',
    description: 'An XR IDE that provides a comprehensive development environment for creating XR applications with advanced debugging and profiling tools.',
    stars: 324,
    forks: 89,
    language: 'JavaScript',
    languageColor: '#f1e05a',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  }
];

const ProjectsSection = () => {
  const [animatedProjects, setAnimatedProjects] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const projectId = Number(entry.target.getAttribute('data-project-id'));
          setAnimatedProjects(prev => [...prev, projectId]);
        }
      });
    }, { threshold: 0.2 });
    
    document.querySelectorAll('.project-card').forEach(card => {
      observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            Explore our flagship open-source initiatives and innovations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div 
              key={project.id}
              data-project-id={project.id}
              className={`project-card bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-700 transform ${
                animatedProjects.includes(project.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 mr-1" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <GitBranch className="h-4 w-4 mr-1" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <span className="flex items-center text-sm">
                    <span 
                      className="w-3 h-3 rounded-full mr-1" 
                      style={{ backgroundColor: project.languageColor }}
                    ></span>
                    <span className="text-gray-600 dark:text-gray-400">{project.language}</span>
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <a 
                  href={`https://github.com/etib-corp/${project.name.toLowerCase().replace(/\s/g, '-')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/orgs/etib-corp/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 dark:text-blue-500 hover:text-blue-800 dark:hover:text-blue-400 font-medium text-lg"
          >
            View All Projects <ArrowRight className="ml-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;