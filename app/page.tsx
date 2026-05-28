import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { DotPattern } from "./components/DecorativeElements";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-white py-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-10 left-10 text-teal-400 opacity-50" />
          <DotPattern className="bottom-20 right-20 text-teal-500 opacity-50" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  COMMUNICATION MADE EASY
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Unlock the World of Visual Language
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Discover a new world of communication with professional courses
                  designed for the Deaf community. From basic ASL to advanced
                  level fluency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/courses"
                    className="bg-teal-700 text-white px-8 py-3.5 rounded-full hover:bg-teal-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    Start Learning Now
                  </Link>
                  <Link
                    href="#intro"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full hover:border-teal-700 hover:text-teal-700 transition-all duration-300 font-semibold hover:shadow-md"
                  >
                    Watch Intro
                  </Link>
                </div>
              </div>
              <div className="relative flex justify-center">
                {/* Phone Mockup */}
                <div className="relative">
                  <div className="w-[280px] h-[560px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-800 overflow-hidden">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10"></div>
                    
                    {/* Phone content */}
                    <div className="h-full bg-gradient-to-br from-teal-50 to-white p-4 pt-8">
                      {/* Header badge */}
                      <div className="bg-teal-700 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block">
                        Bridge your gap
                      </div>
                      
                      {/* Video area */}
                      <div className="bg-teal-700 rounded-2xl p-4 mb-4 aspect-video flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-5xl mb-2">👩‍🏫</div>
                          <p className="text-xs">Live ASL Session</p>
                        </div>
                      </div>
                      
                      {/* Stats cards */}
                      <div className="space-y-3">
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                              <span className="text-lg">📚</span>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Lessons</div>
                              <div className="text-sm font-bold text-gray-900">24/50</div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                              <span className="text-lg">⭐</span>
                            </div>
                            <div>
                              <div className="text-xs text-gray-500">Progress</div>
                              <div className="text-sm font-bold text-gray-900">48%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-700">85K+</div>
                      <div className="text-xs text-gray-600">Learners</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication is a Human Right */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-10 right-10 text-teal-400 opacity-30" />
          <DotPattern className="bottom-10 left-10 text-cyan-400 opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Communication is a Human Right
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At SignLearn, we believe language should never be a barrier to
                connection. Our mission is to bridge the gap between the hearing
                and the Deaf community by providing accessible, high-quality ASL
                education for everyone, everywhere.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-teal-700 mx-auto"
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
                  Inclusive Design
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built from the ground up with the Deaf community for authentic
                  learning. Every course is designed with input from Deaf educators
                  to ensure genuine representation and effective teaching methods.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-teal-700 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Led
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Learn from certified CODA and Deaf instructors with decades of
                  experience. Our teaching team brings real-world experience and
                  cultural knowledge to every lesson.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="mb-6">
                  <svg
                    className="w-12 h-12 text-teal-700 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Global Access
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Affordable and free tiers to ensure no one is left behind in
                  communication. We offer scholarships and free foundational courses
                  so financial barriers never prevent learning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-20 left-10 text-teal-400 opacity-30" />
          <DotPattern className="bottom-20 right-10 text-cyan-400 opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Popular Courses
              </h2>
              <p className="text-lg text-gray-600">
                Start your ASL journey with our most loved courses
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* ASL Basics */}
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-md hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src="/sign.jpg"
                    alt="ASL Basics"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase">
                    Beginner
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ASL Basics
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Master the alphabet, numbers, and common phrases to start
                    your signing journey.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">Free</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition-all duration-300 text-sm font-semibold hover:shadow-md"
                    >
                      Start Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Conversational ASL */}
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-md hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src="/p3.jpg"
                    alt="Conversational ASL"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase">
                    Intermediate
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Conversational ASL
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Build fluency with everyday conversations and practical
                    signing scenarios.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">$79</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition-all duration-300 text-sm font-semibold hover:shadow-md"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>

              {/* ASL Mastery */}
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 shadow-md hover:-translate-y-1">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src="/w.png"
                    alt="ASL Mastery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase">
                    Advanced
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ASL Mastery
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Perfect your skills with advanced grammar, idioms, and
                    cultural nuances.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">$149</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition-all duration-300 text-sm font-semibold hover:shadow-md"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Future of ASL Learning */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-10 right-20 text-teal-400 opacity-30" />
          <DotPattern className="bottom-10 left-20 text-cyan-400 opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Future of ASL Learning
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Live Interaction Card - Large */}
              <div className="bg-teal-800 rounded-3xl p-10 text-white relative overflow-hidden min-h-[450px] flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-6">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Live Now
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Live Interaction</h3>
                  <p className="text-teal-100 leading-relaxed text-lg">
                    Practice real-time with native signers in our high-definition virtual classrooms. Get instant feedback on your hand placement and facial expressions.
                  </p>
                </div>
                {/* Large background icon/illustration */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <svg
                    className="w-64 h-64 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Progress Tracking Card */}
              <div className="bg-gray-200 rounded-3xl p-10 relative overflow-hidden min-h-[450px] flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg
                      className="w-7 h-7 text-teal-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Progress Tracking
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    Visualize your learning journey with daily streaks and skill-level analytics.
                  </p>
                </div>
                {/* Progress bar at bottom */}
                <div className="w-full h-2 bg-white rounded-full overflow-hidden shadow-inner">
                  <div className="w-3/4 h-full bg-teal-700 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stories */}
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-10 right-10 text-teal-400 opacity-30" />
          <DotPattern className="bottom-10 left-10 text-cyan-400 opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Community Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="flex gap-6 group cursor-pointer">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <img
                      src="/p1.jpg"
                      alt="Sarah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase tracking-wide">
                    Success Story
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-teal-700 transition-colors">
                    How Sarah bridged the gap at her tech firm
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "SignLearn gave me the tools to finally communicate directly
                    with my Deaf colleagues. The confidence I gained transformed my
                    career."
                  </p>
                  <Link
                    href="/blog"
                    className="text-teal-700 font-semibold text-sm hover:text-teal-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read Story
                    <svg
                      className="w-4 h-4"
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
              </div>

              {/* Story 2 */}
              <div className="flex gap-6 group cursor-pointer">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300 shadow-lg">
                    <img
                      src="/p2.jpg"
                      alt="Learning tips"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 uppercase tracking-wide">
                    Learning Tips
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 text-xl group-hover:text-teal-700 transition-colors">
                    5 Tips for remembering fluid signs
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Muscle memory is key. Discover the best drills to make your
                    signs feel natural and effortless.
                  </p>
                  <Link
                    href="/blog"
                    className="text-teal-700 font-semibold text-sm hover:text-teal-800 inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Read Article
                    <svg
                      className="w-4 h-4"
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-teal-800 relative overflow-hidden">
          <DotPattern className="top-10 right-10 text-teal-600 opacity-20" />
          <DotPattern className="bottom-10 left-10 text-teal-600 opacity-20" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Support Our Mission
              </h2>
              <p className="text-lg text-teal-100 mb-8 leading-relaxed">
                Help us keep our fundamental courses free for everyone. Your donation supports
                content creation, accessibility research, and scholarship programs for low-income
                learners.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/donate"
                  className="bg-white text-teal-800 px-10 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Donate Now
                </Link>
                <div className="text-teal-200 text-sm">
                  Total Raised This Month: <span className="font-bold text-white text-base">$42,500</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
