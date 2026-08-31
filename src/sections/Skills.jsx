import { skills } from '../data/skills';
import SectionTitle from '../components/common/SectionTitle';
import { 
  FaDocker, 
  FaGitlab, 
  FaJenkins, 
  FaLinux,
  FaAws,
  FaGoogle,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaTerminal,
  FaCloud,
  FaBox,
  FaChartBar,
  FaNetworkWired,
  FaCode,
  FaFileCode,
  FaCogs,
  FaLayerGroup
} from 'react-icons/fa';

const iconMap = {
  'Docker': FaDocker,
  'Kubernetes': FaBox,
  'Helm': FaCogs,
  'Jenkins': FaJenkins,
  'GitHub Actions': FaGitlab,
  'AWS': FaAws,
  'GCP': FaGoogle,
  'Terraform': FaFileCode,
  'Ansible': FaCogs,
  'Prometheus': FaChartBar,
  'Grafana': FaChartBar,
  'Trivy': FaShieldAlt,
  'SonarQube': FaCode,
  'Python': FaPython,
  'Go': FaCode,
  'Bash': FaTerminal,
  'PostgreSQL': FaDatabase,
  'Redis': FaDatabase,
  'Linux': FaLinux,
  'Networking': FaNetworkWired,
  'Cloud': FaCloud,
  'Server': FaServer,
  'Container': FaDocker,
  'Code': FaCode,
  'Database': FaDatabase,
  'Terminal': FaTerminal,
  'Box': FaBox,
  'Workflow': FaCogs,
  'GitBranch': FaGitlab,
  'Activity': FaChartBar,
  'BarChart': FaChartBar,
  'FileCode': FaFileCode,
  'Settings': FaCogs,
  'Shield': FaShieldAlt,
  'Scan': FaCode,
  'Network': FaNetworkWired,
  'Anchor': FaBox,
  'Cloud': FaCloud,
  'Container': FaDocker,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tech Stack" subtitle="Tools and technologies I work with" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div key={category.category} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => {
                  const IconComponent = iconMap[item.name] || iconMap[item.icon] || FaCode;
                  return (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      <IconComponent className="h-4 w-4" />
                      {item.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}