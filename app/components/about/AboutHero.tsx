import Link from "next/link";
import { DotPattern } from "../DecorativeElements";

export default function AboutHero() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <DotPattern className="top-10 left-10 text-teal-400 opacity-30" />
      <DotPattern className="bottom-10 right-10 text-cyan-400 opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-xs font-semibold mb-6 uppercase tracking-wide">
              • Our Purpose
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Mission: Breaking Barriers.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are dedicated to building a world where visual communication knows no bounds. By leveraging technology and empathy, we empower the Deaf community with high-quality, accessible education.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#impact"
                className="bg-teal-700 text-white px-8 py-3.5 rounded-full hover:bg-teal-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              >
                View Our Impact
              </Link>
              <Link
                href="#journey"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full hover:border-teal-700 hover:text-teal-700 transition-all duration-300 font-semibold hover:shadow-md"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-teal-600 rounded-3xl overflow-hidden shadow-2xl relative group">
              <img
                src="/about.png"
                alt="ASL Educator"
                className="w-full h-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-teal-600 opacity-20"></div>
            </div>
            {/* Floating icons */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
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
            <div className="absolute bottom-8 -left-4 bg-white rounded-2xl p-4 shadow-xl">
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
          </div>
        </div>
      </div>
    </section>
  );
}
