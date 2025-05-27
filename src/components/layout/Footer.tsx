import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center mb-4">
              <Github className="h-8 w-8 text-blue-600 dark:text-blue-500 mr-2" />
              <span className="text-xl font-bold">ETIB Corporation</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Building innovative solutions through open source collaboration
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/etib-corp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href="mailto:contact@etib-corp.com" 
                className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#repositories" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                  Repositories
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#releases" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                  Releases
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500">
                  Team
                </a>
              </li>
            </ul>
          </div>
          
          {/* GitHub Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">
              GitHub Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://github.com/etib-corp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 flex items-center"
                >
                  Organization <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/etib-corp?tab=repositories" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 flex items-center"
                >
                  All Repositories <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/orgs/etib-corp/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 flex items-center"
                >
                  Discussions <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/orgs/etib-corp/projects" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 flex items-center"
                >
                  Project Boards <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} ETIB Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;