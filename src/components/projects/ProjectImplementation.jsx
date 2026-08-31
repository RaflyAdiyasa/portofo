import { useState, useEffect } from 'react';
import { FaTerminal } from 'react-icons/fa';

export default function ProjectImplementation({ implementation }) {
  const [activeTab, setActiveTab] = useState(null);

  // Get all keys from implementation object
  const implementationKeys = Object.keys(implementation || {});
  
  // Map keys to readable labels
  const getTabLabel = (key) => {
    const labels = {
      cicd: 'CI/CD',
      kubernetes: 'Kubernetes',
      security: 'Security',
      observability: 'Observability',
      infrastructure: 'Infrastructure',
      backend: 'Backend',
      containerization: 'Containerization',
      health: 'Health Check',
      storage: 'Object Storage',
      dhcp: 'DHCP',
      multiVendor: 'Multi-Vendor',
      simulation: 'Simulation',
      database: 'Database',
      frontend: 'Frontend',
      testing: 'Testing',
      deployment: 'Deployment',
    };
    return labels[key] || key.charAt(0).toUpperCase() + key.slice(1);
  };

  // Set initial active tab to first key
  useEffect(() => {
    if (implementationKeys.length > 0 && !activeTab) {
      setActiveTab(implementationKeys[0]);
    }
  }, [implementationKeys, activeTab]);

  // Handle case where implementation is empty or undefined
  if (!implementation || Object.keys(implementation).length === 0) {
    return null;
  }

  const data = implementation[activeTab];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Engineering Implementation
      </h2>
      
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200 dark:border-gray-700">
        {implementationKeys.map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg border-b-2 transition-colors ${
              activeTab === key
                ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
          >
            {getTabLabel(key)}
          </button>
        ))}
      </div>

      {/* Content */}
      {data && (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {data.title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">{data.content}</p>
          
          {data.commands && data.commands.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Example commands/snippets:
              </p>
              {data.commands.map((cmd, idx) => (
                <pre key={idx} className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm overflow-x-auto">
                  <code className="flex items-start gap-2">
                    <FaTerminal className="h-4 w-4 mt-0.5 text-gray-500" />
                    {cmd}
                  </code>
                </pre>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}