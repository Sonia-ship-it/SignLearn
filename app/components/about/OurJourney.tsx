export default function OurJourney() {
  const milestones = [
    {
      year: "2018",
      title: "Founding a dream of ASL",
      description:
        "Pioneering a program in a community-based Deaf education with a hope for digital reach.",
      emoji: "🌱",
      bgColor: "bg-teal-100",
    },
    {
      year: "2021",
      title: "Launching our first emergency educational course",
      description:
        "Reaching 10,000 Deaf learners from over 50 countries during the pandemic.",
      emoji: "💻",
      bgColor: "bg-cyan-100",
    },
    {
      year: "2024",
      title: "Building a global community of 85K users",
      description:
        "With 140+ countries and 1M+ completed sign language courses.",
      emoji: "🎓",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section id="journey" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-teal-700 font-semibold mb-2">OUR JOURNEY</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From grassroots to a global platform.
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            SignLearn began in 2018 as a small community project in a local
            library. Over time, a simple idea evolved into a global educational
            movement. Here's how the Deaf voice echoes around the world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 ${milestone.bgColor} rounded-2xl flex items-center justify-center`}
                  >
                    <span className="text-2xl">{milestone.emoji}</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-teal-700 font-semibold mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-teal-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
              <span className="text-6xl">👥</span>
            </div>
            <div className="bg-cyan-100 rounded-2xl p-6 aspect-square flex items-center justify-center">
              <span className="text-6xl">💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
