export default function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200 ${className}`}>
      {children}
    </span>
  );
}