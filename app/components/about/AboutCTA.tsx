import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-teal-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Be Part of the Future.
        </h2>
        <p className="text-xl text-cyan-100 mb-8">
          Whether you want to learn, or volunteer, or donate, your contribution
          helps us bridge the gap between silence.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="bg-white text-teal-700 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
          >
            Join Now
          </Link>
          <Link
            href="/donate"
            className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-semibold"
          >
            Support Our Mission
          </Link>
        </div>
      </div>
    </section>
  );
}
