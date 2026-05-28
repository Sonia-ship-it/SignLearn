import { DotPattern } from "../DecorativeElements";

export default function OurValues() {
  return (
    <section id="values" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <DotPattern className="top-10 right-20 text-teal-400 opacity-30" />
      <DotPattern className="bottom-10 left-20 text-cyan-400 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Values That Guide Us
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our principles are the heartbeat of SignLearn, ensuring every feature we build serves our community first.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-10 text-center min-h-[400px] flex flex-col items-center justify-start shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-teal-700"
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
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Accessibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Education is a human right. We design everything with "Deaf-first" principles, ensuring zero barriers to entry.
            </p>
          </div>

          <div className="bg-teal-700 rounded-3xl p-10 text-center min-h-[400px] flex flex-col items-center justify-start shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community</h3>
            <p className="text-teal-50 leading-relaxed">
              We aren't just a platform; we are a family. Our roadmaps are shaped by feedback from the Deaf community.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 text-center min-h-[400px] flex flex-col items-center justify-start shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-teal-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600 leading-relaxed">
              Harnessing cutting-edge AI and motion capture to make learning signs as natural as speaking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
