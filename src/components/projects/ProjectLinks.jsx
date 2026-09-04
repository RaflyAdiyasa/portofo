import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt, FaBook, FaDocker, FaFileAlt, FaPlay, FaGlobe } from 'react-icons/fa';

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

export default function ProjectLinks({ project, className = "" }) {
  // Use links array if available, otherwise fallback to github/demo
  const links = project.links || [
    ...(project.github ? [{ type: 'github', url: project.github }] : []),
    ...(project.demo ? [{ type: 'demo', url: project.demo }] : []),
  ];

  if (!links || links.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {links.map((link, index) => {
        const config = linkTypeConfig[link.type] || linkTypeConfig.external;
        const IconComponent = config.icon;
        const label = link.label || config.defaultLabel;
        
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
  );
}