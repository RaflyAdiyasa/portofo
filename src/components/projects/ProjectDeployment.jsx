// import { StackIcon } from 'tech-stack-icons';
import Button from '../common/Button';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaBook,
  FaDocker,
  FaFileAlt,
  FaPlay,
  FaGlobe,
  FaRocket,
} from 'react-icons/fa';

const linkTypeConfig = {
  github: {
    icon: FaGithub,
    variant: 'primary',
    defaultLabel: 'View on GitHub',
  },
  demo: {
    icon: FaPlay,
    variant: 'primary',
    defaultLabel: 'Live Demo',
  },
  documentation: {
    icon: FaBook,
    variant: 'outline',
    defaultLabel: 'Documentation',
  },
  docker: {
    icon: FaDocker,
    variant: 'outline',
    defaultLabel: 'Docker Hub',
  },
  external: {
    icon: FaExternalLinkAlt,
    variant: 'outline',
    defaultLabel: 'External Link',
  },
  file: {
    icon: FaFileAlt,
    variant: 'outline',
    defaultLabel: 'View File',
  },
  website: {
    icon: FaGlobe,
    variant: 'outline',
    defaultLabel: 'Website',
  },
};

export default function ProjectDeployment({ deployment }) {
  if (!deployment) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <FaRocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        Deployment
      </h2>

      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">

        {/* Description */}
        {deployment.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {deployment.description}
          </p>
        )}

        {/* Deployment Stack */}
        {deployment.stack && deployment.stack.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Deployment Stack
            </h3>

            <div className="flex flex-wrap gap-2">
              {deployment.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                >
                  {/* <StackIcon
                    name={tech.toLowerCase()}
                    className="h-4 w-4"
                  /> */}

                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deployment Links */}
        {deployment.links && deployment.links.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Deployment Resources
            </h3>

            <div className="flex flex-wrap gap-3">
              {deployment.links.map((link, index) => {
                const config =
                  linkTypeConfig[link.type] ||
                  linkTypeConfig.external;

                const IconComponent = config.icon;
                const label =
                  link.label || config.defaultLabel;

                return (
                  <Button
                    key={index}
                    href={link.url}
                    variant={config.variant}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-4 w-4" />
                    {label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}