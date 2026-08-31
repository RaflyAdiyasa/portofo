import Badge from '../common/Badge';

export default function ProjectTechStack({ technologies }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => <Badge key={tech}>{tech}</Badge>)}
      </div>
    </div>
  );
}