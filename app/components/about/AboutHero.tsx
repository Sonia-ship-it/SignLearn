import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
              OUR MISSION
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Mission: Breaking Barriers.
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We are dedicated to building a world where every member of the Deaf
              community has access to quality education, technology, and
              resources. We empower learners and educators to connect and thrive
              in a world of equality and inclusion.
            </p>
            <div className="flex gap-4">
              <Link
                href="#journey"
                className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
              >
                View Our Journey
              </Link>
              <Link
                href="#values"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-700 rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] bg-teal-600 flex items-center justify-center p-8">
                <div className="text-white text-center">
                  <div className="text-8xl mb-4">🌍</div>
                  <p className="text-lg">Empowering Communities Worldwide</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    Mission Driven
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
