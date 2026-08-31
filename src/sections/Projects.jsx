import { projects } from '../data/projects';
import SectionTitle from '../components/common/SectionTitle';
import ProjectGrid from '../components/projects/ProjectGrid';

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Selected engineering projects" />
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}