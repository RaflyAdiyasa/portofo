import { skills } from '../data/skills';
import SectionTitle from '../components/common/SectionTitle';
import StackIcon from 'tech-stack-icons';

function JenkinsIcon() {
  return (
    <img
      src="/icons/jenkins.svg"
      alt="Jenkins"
      className="w-6 h-6"
    />
  );
}

function ArgoCDIcon() {
  return (
    <img
      src="/icons/argocd.svg"
      alt="argocd"
      className="w-6 h-6"
    />
  );
}

function HelmIcon() {
  return (
    <img
      src="/icons/Helm.svg"
      alt="Helm"
      className="w-6 h-6"
    />
  );
}

function GCPIcon() {
  return (
    <img
      src="/icons/gcp.svg"
      alt="Helm"
      className="w-6 h-6"
    />
  );
}

function TrivyIcon() {
  return (
    <img
      src="/icons/trivy.png"
      alt="Helm"
      className="w-6 h-6"
    />
  );
}

function CICDIcon() {
  return (
    <img
      src="/icons/ci-cd-line.svg"
      alt="Helm"
      className="w-6 h-6"
    />
  );
}

function SkillIcon({ item }) {
  if (item.name === 'Jenkins') {
    return <JenkinsIcon />;
  } else if (item.name === 'Argo CD') {
    return <ArgoCDIcon />;
  } else if (item.name === 'Helm') {
    return <HelmIcon />;
  } else if (item.name === 'GCP') {
    return <GCPIcon />;
  } else if (item.name === 'Trivy') {
    return <TrivyIcon />;
  } else if (item.name === 'loki') {
    return <CICDIcon />;
  }

  return (
    <StackIcon
      name={item.icon}
      variant="light"
      className="w-6 h-6"
    />
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <SectionTitle
          title="Tech Stack"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skills.map((category) => (
            <div
              key={category.category}
              className="
                bg-white
                dark:bg-gray-900
                rounded-xl
                shadow-sm
                p-6
                border
                border-gray-100
                dark:border-gray-800
              "
            >

              <h3 className="
                text-lg
                font-semibold
                text-gray-900
                dark:text-white
                mb-5
              ">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">

                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="
                      inline-flex
                      items-center
                      gap-2
                      px-3
                      py-2
                      rounded-lg
                      bg-gray-100
                      dark:bg-gray-800
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-gray-300
                      border
                      border-transparent
                      hover:border-gray-300
                      dark:hover:border-gray-600
                      transition-all
                      duration-200
                    "
                  >

                    <SkillIcon item={item} />

                    <span>
                      {item.name}
                    </span>

                  </div>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

