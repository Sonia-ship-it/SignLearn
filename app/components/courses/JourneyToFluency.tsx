import { DotPattern } from "../DecorativeElements";

export default function JourneyToFluency() {
  const steps = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-teal-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Zero",
      description:
        "No basics required. And no barriers. We teach from the ground up.",
      bgColor: "bg-teal-100",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-cyan-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Conversational",
      description: "Express feelings, ask questions, and form simple sentences.",
      bgColor: "bg-cyan-100",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      title: "Specialized",
      description: "Deep dives on career-focused, legal, or tech fields.",
      bgColor: "bg-blue-100",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-purple-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Fluent",
      description:
        "Professional signing and cultural nuances for total immersion.",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <DotPattern className="top-10 left-10 text-teal-400 opacity-30" />
      <DotPattern className="bottom-10 right-10 text-cyan-400 opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Journey to Fluency
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our structured learning path guides you from basic signs to complete
            conversational skills.
          </p>
        </div>

        <div className="relative">
          {/* Dotted connecting line through circles */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-1" style={{ width: 'calc(100% - 10rem)', marginLeft: '5rem' }}>
            <div className="w-full h-full border-t-4 border-dashed border-gray-300"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-4 border-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}
                >
                  {step.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
