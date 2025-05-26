import { Code, Star, GitBranch, UserPlus } from 'lucide-react';

const ContributeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            Contribute to our projects and help us build the future of open source
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 mb-4">
              <Star className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Star Our Projects</h3>
            <p className="text-blue-100">
              Show your support by starring our repositories on GitHub
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 mb-4">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Submit PRs</h3>
            <p className="text-blue-100">
              Contribute code improvements, bug fixes, or new features
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 mb-4">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Fork Repositories</h3>
            <p className="text-blue-100">
              Create your own version and experiment with our codebase
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-300 hover:transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-500 mb-4">
              <UserPlus className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
            <p className="text-blue-100">
              Become a regular contributor and join our organization
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="https://github.com/etib-corp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:text-lg transition-colors duration-200"
          >
            Get Started on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;