import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../common/ThemeToggle';
import Container from './Container';
import { profile } from '../../data/profile';

const navLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Education', href: '/#education' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (href) => {
    const hash = href.split('#')[1];
    if (!hash) return false;
    return location.hash === `#${hash}`;
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all ${scrolled ? 'bg-white/95 shadow-sm dark:bg-gray-900/95' : 'bg-white dark:bg-gray-900'}`}>
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-bold text-gray-900 dark:text-white">
            {profile.name}
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </nav>
      </Container>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b">
          <Container className="py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}