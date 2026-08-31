import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectTechStack from '../components/projects/ProjectTechStack';
import ProjectArchitecture from '../components/projects/ProjectArchitecture';
import ProjectImplementation from '../components/projects/ProjectImplementation';
import ProjectChallenges from '../components/projects/ProjectChallenges';
import ProjectMetrics from '../components/projects/ProjectMetrics';
import ProjectLinks from '../components/projects/ProjectLinks';
import ProjectGrid from '../components/projects/ProjectGrid';
import Container from '../components/layout/Container';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
        <Button to="/projects" className="mt-6">
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Button>
      </Container>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="py-12">
      <Container>
        <Link to="/#projects" className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{project.subtitle}</p>
          <div className="mt-4 flex gap-4">
            <ProjectLinks project={project} />
          </div>
        </header>

        <ProjectGallery images={project.gallery} />

        <ProjectTechStack technologies={project.technologies} />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h2>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
        </section>

        <ProjectArchitecture architecture={project.architecture} />

        <ProjectImplementation implementation={project.implementation} />

        <ProjectChallenges challenges={project.challenges} />

        {project.metrics && project.metrics.length > 0 && (
          <ProjectMetrics metrics={project.metrics} />
        )}

        <ProjectLinks project={project} className="mt-12" />

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">More Projects</h2>
          <ProjectGrid projects={relatedProjects} />
        </section>
      </Container>
    </article>
  );
}