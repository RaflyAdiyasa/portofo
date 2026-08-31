export default function SectionTitle({ title, subtitle, className = "" }) {
  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{subtitle}</p>}
    </div>
  );
}