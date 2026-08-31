import { education } from '../data/education';
import SectionTitle from '../components/common/SectionTitle';
import EducationCard from '../components/timeline/EducationCard';

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Education" 
          subtitle="Academic background and formal training" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}