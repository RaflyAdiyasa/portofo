export default function ProjectArchitecture({ architecture }) {
  if (!architecture) return null;
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Architecture</h2>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-sm p-4">
        <img
          src={architecture.image}
          alt="Architecture diagram"
          className="w-full h-auto rounded"
          loading="lazy"
        />
        {architecture.description && (
          <p className="mt-4 text-gray-600 dark:text-gray-300">{architecture.description}</p>
        )}
      </div>
    </section>
  );
}