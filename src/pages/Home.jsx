import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import ContactCTA from '../sections/ContactCTA';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Certifications from '../sections/Certifications';
import Learning from '../sections/Learning';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ContactCTA />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Learning />
      </main>
      <Footer />
    </div>
  );
}