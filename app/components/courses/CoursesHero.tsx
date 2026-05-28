import Link from "next/link";

export default function CoursesHero() {
  return (
    <section className="bg-gradient-to-br from-cyan-50 to-teal-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
              Level Up Your Skills
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Master the Language of Connection
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore a new world of communication with professional courses
              designed for the Deaf community. From basic ASL to advanced level
              fluency.
            </p>
            <div className="flex gap-4">
              <Link
                href="#courses"
                className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
              >
                Explore Catalog
              </Link>
              <Link
                href="#intro"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition"
              >
                Watch Intro
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 rounded-2xl p-6 mb-4">
                <div className="aspect-video bg-teal-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">🎓</div>
                    <p className="text-sm">Interactive Learning</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center gap-4">
                <div className="bg-teal-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-teal-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Live Workshops in Progress
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
