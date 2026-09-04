import { Link } from 'react-router-dom';
import Badge from '../common/Badge';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaLink,
} from 'react-icons/fa';
// import { StackIcon } from 'tech-stack-icons';

export default function ProjectCard({ project }) {
  const links = project.links || [
    ...(project.github
      ? [{ type: 'github', url: project.github, label: 'GitHub' }]
      : []),
    ...(project.demo
      ? [{ type: 'demo', url: project.demo, label: 'Demo' }]
      : []),
  ];

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github':
        return <FaGithub className="h-4 w-4 mr-1" />;

      case 'demo':
        return <FaExternalLinkAlt className="h-4 w-4 mr-1" />;

      default:
        return <FaLink className="h-4 w-4 mr-1" />;
    }
  };

  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md">

      {/* Thumbnail */}
      <Link to={`/projects/${project.slug}`} className="block">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-5 flex flex-col flex-grow">

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          <Link
            to={`/projects/${project.slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech}>
              {/* <StackIcon
                name={tech.toLowerCase()}
                className="h-3 w-3 mr-1"
              /> */}
              {tech}
            </Badge>
          ))}

          {project.technologies.length > 4 && (
            <Badge>
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-3 flex-wrap">

          {links.slice(0, 2).map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {getLinkIcon(link.type)}

              {link.label ||
                (link.type === 'github' ? 'GitHub' : 'Link')}
            </a>
          ))}

          {links.length > 2 && (
            <span className="text-sm text-gray-500">
              +{links.length - 2} more
            </span>
          )}

          {/* Details */}
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 ml-auto"
          >
            Details
            <FaArrowRight className="h-4 w-4 ml-1" />
          </Link>

        </div>
      </div>
    </div>
  );
}