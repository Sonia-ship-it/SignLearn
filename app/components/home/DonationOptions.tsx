export default function DonationOptions() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer flexible donation options to support Deaf education and
            accessibility initiatives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Supporter */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-sm text-teal-700 font-semibold mb-2">
              Supporter
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$25</div>
            <div className="text-gray-600 text-sm mb-6">/one-time</div>
            <p className="text-gray-600 mb-6">
              Help one student access learning materials for a month.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">One-time donation</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">Impact certificate</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">Email updates</span>
              </li>
            </ul>
            <button className="w-full border-2 border-teal-700 text-teal-700 py-3 rounded-full hover:bg-teal-50 transition">
              Select Plan
            </button>
          </div>

          {/* Champion - Featured */}
          <div className="bg-teal-700 rounded-3xl p-8 shadow-2xl transform scale-105">
            <div className="text-sm text-cyan-200 font-semibold mb-2">
              Champion
            </div>
            <div className="text-4xl font-bold text-white mb-1">$100</div>
            <div className="text-cyan-200 text-sm mb-6">/monthly</div>
            <p className="text-white mb-6">
              Sustain a full scholarship for one student each month.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-cyan-200 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-white">Monthly giving</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-cyan-200 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-white">
                  Quarterly impact reports
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-cyan-200 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-white">Exclusive updates</span>
              </li>
            </ul>
            <button className="w-full bg-white text-teal-700 py-3 rounded-full hover:bg-gray-100 transition font-semibold">
              Choose Plan
            </button>
          </div>

          {/* Advocate */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="text-sm text-teal-700 font-semibold mb-2">
              Advocate
            </div>
            <div className="text-4xl font-bold text-gray-900 mb-1">$50</div>
            <div className="text-gray-600 text-sm mb-6">/one-time</div>
            <p className="text-gray-600 mb-6">
              Give two students access to premium learning tools.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  One-time or monthly
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">Impact stories</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-teal-700 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-600">Recognition badge</span>
              </li>
            </ul>
            <button className="w-full border-2 border-teal-700 text-teal-700 py-3 rounded-full hover:bg-teal-50 transition">
              Select Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
