import Link from "next/link";
import { DotPattern } from "../DecorativeElements";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-teal-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <DotPattern className="top-10 right-10 text-teal-600 opacity-20" />
      <DotPattern className="bottom-10 left-10 text-teal-600 opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Be Part of the Future.
        </h2>
        <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
          Whether you are a learner, an educator, or a donor, your contribution helps us bridge the gap between worlds.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/courses"
            className="bg-white text-teal-800 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Enroll Now
          </Link>
          <Link
            href="/donate"
            className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 font-semibold hover:shadow-lg"
          >
            Support Our Impact
          </Link>
        </div>
      </div>
    </section>
  );
}
