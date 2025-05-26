import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Github, Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#" className="flex items-center space-x-2">
              <Github className="h-8 w-8 text-blue-600 dark:text-blue-500" />
              <span className="text-xl font-bold tracking-tight">ETIP Corp</span>
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-10">
            <a href="#projects" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Projects
            </a>
            <a href="#repositories" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Repositories
            </a>
            <a href="#releases" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Releases
            </a>
            <a href="#team" className="text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Team
            </a>
          </nav>
          
          {/* Right section */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <a
              href="https://github.com/etib-corp"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gray-500 bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 transition-opacity" 
              onClick={() => setIsMenuOpen(false)}
            ></div>

            <div className="fixed inset-y-0 right-0 max-w-full flex">
              <div className="relative w-screen max-w-md">
                <div className="h-full flex flex-col py-6 bg-white dark:bg-gray-800 shadow-xl overflow-y-auto">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <Github className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                        <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ETIP Corp</span>
                      </div>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 relative flex-1 px-4 sm:px-6">
                    <div className="flex flex-col space-y-6">
                      <a
                        href="#projects"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
                      >
                        Projects
                      </a>
                      <a
                        href="#repositories"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
                      >
                        Repositories
                      </a>
                      <a
                        href="#releases"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
                      >
                        Releases
                      </a>
                      <a
                        href="#team"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-500"
                      >
                        Team
                      </a>
                      <div className="pt-4 flex items-center">
                        <button
                          onClick={toggleTheme}
                          className="flex items-center justify-center p-2 rounded-full text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                        >
                          {theme === 'dark' ? (
                            <>
                              <Sun className="h-5 w-5 mr-2" />
                              <span>Light Mode</span>
                            </>
                          ) : (
                            <>
                              <Moon className="h-5 w-5 mr-2" />
                              <span>Dark Mode</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href="https://github.com/etib-corp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                      >
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;