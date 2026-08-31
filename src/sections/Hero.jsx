import { profile } from '../data/profile';
import Button from '../components/common/Button';
import { FaGithub, FaLinkedin, FaArrowRight, FaFileAlt } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="hero" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Hi, I'm {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-blue-600 dark:text-blue-400">
              {profile.role}
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href="#projects" variant="primary">
                View Projects <FaArrowRight className="h-4 w-4" />
              </Button>
              <Button href={profile.resume} variant="outline">
                <FaFileAlt className="h-4 w-4" /> Resume
              </Button>
              <Button href={profile.github} variant="outline">
                <FaGithub className="h-4 w-4" /> GitHub
              </Button>
              {profile.linkedin && (
                <Button href={profile.linkedin} variant="outline">
                  <FaLinkedin className="h-4 w-4" /> LinkedIn
                </Button>
              )}
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src={profile.image}
              alt={`${profile.name} profile`}
              className="w-64 h-64 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}