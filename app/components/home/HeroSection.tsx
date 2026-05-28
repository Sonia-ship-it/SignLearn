import Link from "next/link";
import { DotPattern } from "../DecorativeElements";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <DotPattern className="top-10 left-10 text-teal-400 opacity-40" />
      <DotPattern className="bottom-20 right-20 text-cyan-400 opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <div className="bg-teal-700 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/donate.png"
                alt="Support education"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
