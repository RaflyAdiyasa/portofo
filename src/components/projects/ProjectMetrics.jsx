export default function ProjectMetrics({ metrics }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Results</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{metric.value}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}