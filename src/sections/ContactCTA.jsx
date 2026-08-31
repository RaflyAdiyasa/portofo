import Button from '../components/common/Button';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { profile } from '../data/profile';

export default function ContactCTA() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Interested in building reliable systems?
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Let's discuss how I can help your team improve infrastructure, CI/CD, and observability.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button href={profile.github} variant="outline">
            <FaGithub className="h-4 w-4" /> GitHub
          </Button>
          <Button href={profile.linkedin} variant="outline">
            <FaLinkedin className="h-4 w-4" /> LinkedIn
          </Button>
          <Button href={`mailto:${profile.email}`} variant="primary">
            <FaEnvelope className="h-4 w-4" /> Email
          </Button>
          <Button href={profile.resume} variant="outline">
            <FaFileAlt className="h-4 w-4" /> Resume
          </Button>
        </div>
      </div>
    </section>
  );
}