import Hero from '../components/home/Hero';
import ProjectsSection from '../components/home/ProjectsSection';
import RepositoriesSection from '../components/home/RepositoriesSection';
import ReleasesSection from '../components/home/ReleasesSection';
import TeamSection from '../components/home/TeamSection';
import ContributeSection from '../components/home/ContributeSection';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <ProjectsSection />
      <RepositoriesSection />
      <ReleasesSection />
      <TeamSection />
      <ContributeSection />
    </div>
  );
};

export default Home;