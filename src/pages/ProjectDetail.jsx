import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { FaArrowLeft, FaLink } from 'react-icons/fa';
import Button from '../components/common/Button';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectTechStack from '../components/projects/ProjectTechStack';
import ProjectArchitecture from '../components/projects/ProjectArchitecture';
// import ProjectImplementation from '../components/projects/ProjectImplementation';
// import ProjectChallenges from '../components/projects/ProjectChallenges';
// import ProjectMetrics from '../components/projects/ProjectMetrics';
import ProjectLinks from '../components/projects/ProjectLinks';
import ProjectDeployment from '../components/projects/ProjectDeployment';
import ProjectGrid from '../components/projects/ProjectGrid';
import Container from '../components/layout/Container';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - ${profile.name}`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', project.description);
      }
    }
    return () => {
      document.title = `${profile.name} - ${profile.role}`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'DevOps/SRE portfolio');
      }
    };
  }, [project]);

  if (!project) {
    return (
      <Container className="py-16">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <p className="mt-4">The project you're looking for doesn't exist.</p>
        <Button to="/" className="mt-6">
          <FaArrowLeft className="h-4 w-4" /> Back to Home
        </Button>
      </Container>
    );
  }

  const relatedProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article className="py-12">
      <Container>
        <Link 
          to="/#projects" 
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white mb-6"
        >
          <FaArrowLeft className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
        
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
            {project.subtitle}
          </p>
          <div className="mt-6">
            <ProjectLinks project={project} />
          </div>
        </header>

        {project.gallery && project.gallery.length > 0 && (
          <ProjectGallery images={project.gallery} />
        )}

        {project.technologies && project.technologies.length > 0 && (
          <ProjectTechStack technologies={project.technologies} />
        )}

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Overview
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {project.description}
          </p>
        </section>

        {project.architecture && (
          <ProjectArchitecture architecture={project.architecture} />
        )}

        {/* {project.implementation && (
          <ProjectImplementation implementation={project.implementation} />
        )} */}

        {project.deployment && (
          <ProjectDeployment deployment={project.deployment} />
        )}

        {/* {project.challenges && project.challenges.length > 0 && (
          <ProjectChallenges challenges={project.challenges} />
        )} */}

        {/* {project.metrics && project.metrics.length > 0 && (
          <ProjectMetrics metrics={project.metrics} />
        )} */}

        {/* Project Links Section at bottom */}
        {project.links && project.links.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FaLink className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              Project Links
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
              <ProjectLinks project={project} />
            </div>
          </section>
        )}

        {relatedProjects.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              More Projects
            </h2>
            <ProjectGrid projects={relatedProjects} />
          </section>
        )}
      </Container>
    </article>
  );
}