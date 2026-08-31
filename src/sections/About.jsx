import { profile } from '../data/profile';
import SectionTitle from '../components/common/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <img
              src={profile.image}
              alt={`${profile.name} about`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:col-span-2 space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {profile.description}
            </p>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Current Focus</h3>
              <p className="text-gray-600 dark:text-gray-300">{profile.currentFocus}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}