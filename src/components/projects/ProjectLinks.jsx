import Button from '../common/Button';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectLinks({ project, className = "" }) {
  return (
    <div className={`flex gap-4 ${className}`}>
      {project.github && (
        <Button href={project.github} variant="primary">
          <FaGithub className="h-4 w-4" /> View on GitHub
        </Button>
      )}
      {project.demo && (
        <Button href={project.demo} variant="outline">
          <FaExternalLinkAlt className="h-4 w-4" /> Live Demo
        </Button>
      )}
    </div>
  );
}