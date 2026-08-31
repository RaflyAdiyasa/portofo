import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">
      <Link to={`/projects/${project.slug}`} className="block">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <Link to={`/projects/${project.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.technologies.length > 4 && <Badge>+{project.technologies.length - 4}</Badge>}
        </div>
        <div className="mt-4 flex items-center gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="h-4 w-4 mr-1" /> GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaExternalLinkAlt className="h-4 w-4 mr-1" /> Live Demo
            </a>
          )}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-auto"
          >
            Details <FaArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}