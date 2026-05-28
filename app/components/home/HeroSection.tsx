import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
              MAKE AN IMPACT
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Support Accessible Education
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Help us break barriers for the Deaf community. Your donation
              supports language education and builds a more inclusive world.
            </p>
            <div className="flex gap-4">
              <Link
                href="#donate"
                className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
              >
                Donate Now
              </Link>
              <Link
                href="#impact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition"
              >
                Our Impact
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-700 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white/10 rounded-2xl p-6 mb-4">
                <div className="aspect-video bg-teal-600 rounded-xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">👥</div>
                    <p className="text-sm">Empowering Communities</p>
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Students Supported</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
