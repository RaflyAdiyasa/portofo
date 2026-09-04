import { useState, useEffect, useCallback } from 'react';
// import StackIcon from '../common/StackIcon';
import Button from '../common/Button';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaBook, 
  FaDocker, 
  FaFileAlt, 
  FaPlay, 
  FaGlobe, 
  FaRocket,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaExpand,
  FaCompress
} from 'react-icons/fa';

const linkTypeConfig = {
  github: {
    icon: FaGithub,
    variant: 'primary',
    defaultLabel: 'View on GitHub',
  },
  demo: {
    icon: FaPlay,
    variant: 'primary',
    defaultLabel: 'Live Demo',
  },
  documentation: {
    icon: FaBook,
    variant: 'outline',
    defaultLabel: 'Documentation',
  },
  docker: {
    icon: FaDocker,
    variant: 'outline',
    defaultLabel: 'Docker Hub',
  },
  external: {
    icon: FaExternalLinkAlt,
    variant: 'outline',
    defaultLabel: 'External Link',
  },
  file: {
    icon: FaFileAlt,
    variant: 'outline',
    defaultLabel: 'View File',
  },
  website: {
    icon: FaGlobe,
    variant: 'outline',
    defaultLabel: 'Website',
  },
};

// Deployment Image Gallery Component
function DeploymentGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback((index) => {
    setCurrentIndex((index + images.length) % images.length);
  }, [images.length]);

  const next = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const prev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [next, prev]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    e.currentTarget.dataset.startX = touch.clientX;
  };

  const handleTouchEnd = (e) => {
    const startX = parseFloat(e.currentTarget.dataset.startX);
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="relative mb-6">
      <div
        className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-[300px] md:h-[400px] object-contain cursor-pointer"
          loading="lazy"
          onClick={() => setIsFullscreen(true)}
        />
        
        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 shadow"
              aria-label="Previous deployment image"
            >
              <FaChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 shadow"
              aria-label="Next deployment image"
            >
              <FaChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Expand button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 shadow"
          aria-label="Expand deployment image"
        >
          <FaExpand className="h-4 w-4" />
        </button>

        {/* Caption */}
        {currentImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-sm p-3 text-center">
            {currentImage.caption}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
                idx === currentIndex ? 'border-blue-500' : 'border-transparent'
              }`}
              aria-label={`View deployment image ${idx + 1}`}
            >
              <img src={img.src} alt={img.alt} className="w-16 h-12 object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Dots */}
      {images.length > 1 && (
        <div className="mt-2 flex justify-center gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
              aria-label={`Go to deployment slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <img 
            src={currentImage.src} 
            alt={currentImage.alt} 
            className="max-h-full max-w-full object-contain" 
          />
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
            aria-label="Close fullscreen"
          >
            <FaTimes className="h-8 w-8" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectDeployment({ deployment }) {
  if (!deployment) return null;

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <FaRocket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        Deployment
      </h2>
      
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
        {/* Description */}
        {deployment.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            {deployment.description}
          </p>
        )}

        {/* Deployment Images */}
        {deployment.images && deployment.images.length > 0 && (
          <DeploymentGallery images={deployment.images} />
        )}

        {/* Tech Stack Labels */}
        {deployment.stack && deployment.stack.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Deployment Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {deployment.stack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-sm font-medium text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                >
                  {/* <StackIcon name={tech} className="h-4 w-4" /> */}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Deployment Links */}
        {deployment.links && deployment.links.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Deployment Resources
            </h3>
            <div className="flex flex-wrap gap-3">
              {deployment.links.map((link, index) => {
                const config = linkTypeConfig[link.type] || linkTypeConfig.external;
                const IconComponent = config.icon;
                const label = link.label || config.defaultLabel;
                
                return (
                  <Button
                    key={index}
                    href={link.url}
                    variant={config.variant}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-4 w-4" />
                    {label}
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}