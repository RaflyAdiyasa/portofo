import { FaGraduationCap } from 'react-icons/fa';

export default function EducationCard({ education }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <FaGraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {education.institution}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
            {education.program}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {education.startYear} — {education.endYear}
          </p>
          {education.description && (
            <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
              {education.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}