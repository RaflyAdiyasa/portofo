import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export default function ProjectGallery({ images }) {
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
    <div className="relative">
      <div
        className="relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="w-full h-[400px] md:h-[500px] object-contain"
          loading="lazy"
          onClick={() => setIsFullscreen(true)}
        />
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 shadow"
          aria-label="Previous image"
        >
          <FaChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-gray-900/80 hover:bg-white dark:hover:bg-gray-900 shadow"
          aria-label="Next image"
        >
          <FaChevronRight className="h-6 w-6" />
        </button>
        {currentImage.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-sm p-3 text-center">
            {currentImage.caption}
          </div>
        )}
      </div>
      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`flex-shrink-0 rounded-md overflow-hidden border-2 ${
              idx === currentIndex ? 'border-blue-500' : 'border-transparent'
            }`}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} className="w-20 h-16 object-cover" />
          </button>
        ))}
      </div>
      {/* Dots */}
      <div className="mt-2 flex justify-center gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <img src={currentImage.src} alt={currentImage.alt} className="max-h-full max-w-full object-contain" />
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