import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function ProjectChallenges({ challenges }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!challenges || challenges.length === 0) return null;

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Challenges & Solutions</h2>
      <div className="space-y-4">
        {challenges.map((challenge, idx) => (
          <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-expanded={openIndex === idx}
            >
              <span className="font-semibold text-gray-900 dark:text-white">
                Challenge #{String(idx + 1).padStart(2, '0')} - {challenge.title}
              </span>
              <FaChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}
              />
            </button>
            {openIndex === idx && (
              <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Problem</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.problem}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Investigation</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.investigation}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Root Cause</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.rootCause}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Solution</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.solution}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Result</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.result}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Lesson Learned</h4>
                  <p className="text-gray-600 dark:text-gray-300">{challenge.lessonLearned}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}