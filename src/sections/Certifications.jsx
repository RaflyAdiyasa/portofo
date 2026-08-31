import { certifications } from '../data/certifications';
import SectionTitle from '../components/common/SectionTitle';
import CertificationCard from '../components/timeline/CertificationCard';

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Certifications" 
          subtitle="Professional certifications and credentials" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}