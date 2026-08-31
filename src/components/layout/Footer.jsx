import { profile } from '../../data/profile';
import Container from './Container';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-900 dark:text-white">{profile.name}</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">{profile.role}</p>
          </div>
          <div className="flex gap-4">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              aria-label="Email" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {profile.name}
        </div>
      </Container>
    </footer>
  );
}