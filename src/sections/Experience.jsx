import { experience } from '../data/experience';
import SectionTitle from '../components/common/SectionTitle';
import ExperienceTimeline from '../components/timeline/ExperienceTimeline';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Experience" 
          subtitle="Professional journey and engineering roles" 
        />
        <ExperienceTimeline experience={experience} />
      </div>
    </section>
  );
}