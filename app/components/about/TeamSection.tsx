import Link from "next/link";

export default function TeamSection() {
  const team = [
    {
      name: "Marcus Chen",
      role: "Founder & CEO",
      emoji: "👨",
      gradient: "from-teal-400 to-teal-600",
    },
    {
      name: "Sarah Jessica",
      role: "Director of Education",
      emoji: "👩",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      name: "David Okoro",
      role: "Chief Technology Officer",
      emoji: "👨",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Experience Officer",
      emoji: "👩",
      gradient: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Meet Our Visionaries
            </h2>
            <p className="text-gray-600">
              Our leadership team of educators, technologists, and Deaf advocates
              driving our mission forward.
            </p>
          </div>
          <Link
            href="/team"
            className="text-teal-700 font-semibold hover:text-teal-800 flex items-center gap-2"
          >
            See the Team
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                <div
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${member.gradient}`}
                >
                  <span className="text-6xl">{member.emoji}</span>
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
