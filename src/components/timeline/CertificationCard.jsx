import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

export default function CertificationCard({ certification }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
          <FaCertificate className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {certification.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            {certification.issuer}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            {certification.date}
          </p>
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              View Credential <FaExternalLinkAlt className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}