export default function ExperienceTimeline({ experience }) {
  return (
    <div className="relative border-l border-gray-300 dark:border-gray-700 ml-4">
      {experience.map((exp) => (
        <div key={exp.id} className="mb-8 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full -left-3 ring-4 ring-white dark:ring-gray-900">
            <span className="w-2 h-2 bg-white rounded-full"></span>
          </span>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {exp.role}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {exp.year}
              </span>
            </div>
            <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
              {exp.company}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
            {exp.highlights && exp.highlights.length > 0 && (
              <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {exp.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}