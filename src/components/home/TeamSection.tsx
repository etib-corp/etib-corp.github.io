import { useState, useEffect, useRef } from 'react';
import { Github, Twitter, Linkedin, Globe } from 'lucide-react';

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    contributions: 247,
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'UI/UX Designer',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    contributions: 186,
  },
  {
    id: 3,
    name: 'David Martinez',
    role: 'Backend Engineer',
    image: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: null,
    linkedin: 'https://linkedin.com',
    contributions: 215,
  },
  {
    id: 4,
    name: 'Emily Wang',
    role: 'DevOps Specialist',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    contributions: 178,
  },
  {
    id: 5,
    name: 'Robert Chen',
    role: 'Data Scientist',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: 'https://twitter.com',
    linkedin: null,
    contributions: 132,
  },
  {
    id: 6,
    name: 'Olivia Davis',
    role: 'Security Engineer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    github: 'https://github.com',
    twitter: null,
    linkedin: 'https://linkedin.com',
    contributions: 165,
  },
];

const TeamSection = () => {
  const [visibleMembers, setVisibleMembers] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const visibleMembersInterval = setInterval(() => {
          setVisibleMembers(prev => {
            if (prev.length >= teamMembers.length) {
              clearInterval(visibleMembersInterval);
              return prev;
            }
            const nextMemberId = teamMembers[prev.length].id;
            return [...prev, nextMemberId];
          });
        }, 150);
        
        return () => clearInterval(visibleMembersInterval);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400">
            The talented people behind our open-source projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className={`bg-white dark:bg-gray-700 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-600 transition-all duration-500 transform ${
                visibleMembers.includes(member.id) ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-300">{member.role}</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex space-x-3">
                    {member.github && (
                      <a 
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.twitter && (
                      <a 
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a 
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-300"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>{member.contributions} contributions</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our team is passionate about open source and committed to building innovative solutions. 
            We welcome contributors from around the world to join our mission.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;