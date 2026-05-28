import { DotPattern } from "../DecorativeElements";

export default function OurJourney() {
  const milestones = [
    {
      year: "2018",
      title: "Founded by a group of ASL interpreters and Deaf educators with a vision for digital equity.",
    },
    {
      year: "2020",
      title: "Launched our first interactive video curriculum, reaching 50,000 learners across the country.",
    },
    {
      year: "2024",
      title: "Serving a global community of 2M+ users with AI-powered sign recognition tools.",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <DotPattern className="top-20 right-10 text-teal-400 opacity-25" />
      <DotPattern className="bottom-20 left-10 text-cyan-400 opacity-25" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-teal-600 rounded-3xl overflow-hidden shadow-lg aspect-square relative group cursor-pointer">
              <img
                src="/j1.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold z-10">
                SignLearn
              </div>
              <div className="absolute bottom-8 left-4 right-4 text-white text-xs z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Our Inclusive Multicultural Education
              </div>
            </div>
            <div className="bg-cyan-500 rounded-3xl overflow-hidden shadow-lg aspect-square relative group cursor-pointer mt-8">
              <img
                src="/j2.png"
                alt="Online learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-teal-600 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <p className="text-teal-700 font-semibold mb-4 text-sm uppercase tracking-wide">
              Our Journey
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              From grassroots to a global platform.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              SignLearn began in 2018 as a small community initiative in a local library, born from a simple observation: educational resources for the Deaf were scarce and often non-visual.
            </p>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex gap-4 p-6 rounded-full transition-colors duration-300 ${
                    index === 0 ? 'bg-gray-100 hover:bg-gray-200' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white border-4 border-teal-700 rounded-full flex items-center justify-center">
                      <span className="text-teal-700 font-bold text-sm">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
