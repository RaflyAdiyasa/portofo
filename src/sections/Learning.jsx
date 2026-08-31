import { learning } from '../data/learning';
import SectionTitle from '../components/common/SectionTitle';
import { FaBook, FaCode, FaTrophy } from 'react-icons/fa';

export default function Learning() {
  const getIcon = (type) => {
    switch (type.toLowerCase()) {
      case 'course':
        return <FaBook className="h-5 w-5 text-blue-600 dark:text-blue-400" />;
      case 'certification':
        return <FaTrophy className="h-5 w-5 text-green-600 dark:text-green-400" />;
      default:
        return <FaCode className="h-5 w-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in progress':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planning':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <section id="learning" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Training & Learning" 
          subtitle="Continuous learning and professional development" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learning.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  {getIcon(item.type)}
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {item.provider}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Type: {item.type}
              </p>
              {item.description && (
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}