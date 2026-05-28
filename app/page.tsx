import Header from "./components/Header";
import Footer from "./components/Footer";
import Link from "next/link";
import { WavePattern, DotPattern, CirclePattern } from "./components/DecorativeElements";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-white py-20 relative overflow-hidden">
          {/* Decorative Elements */}
          <WavePattern className="top-10 left-10 text-teal-400 opacity-60" />
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
                <p className="text-lg text-gray-600 mb-8">
                  Discover a new world of communication with professional courses
                  designed for the Deaf community. From basic ASL to advanced
                  level fluency.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/courses"
                    className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition font-semibold"
                  >
                    Start Learning Now
                  </Link>
                  <Link
                    href="#intro"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition font-semibold"
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
          <CirclePattern className="top-10 right-10 text-cyan-200 opacity-20" />
          <WavePattern className="bottom-10 left-10 text-teal-200 opacity-30 transform rotate-180" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Communication is a Human Right
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ASL is not just a language—it's a vibrant culture and a powerful
                tool for connection. Join us in breaking down barriers and
                building bridges through accessible education for the Deaf
                community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inclusive Range
                </h3>
                <p className="text-gray-600">
                  Courses designed for all skill levels, from absolute beginners
                  to advanced signers.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Expert-Led
                </h3>
                <p className="text-gray-600">
                  Learn from native signers and certified ASL instructors with
                  years of experience.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Flexible Access
                </h3>
                <p className="text-gray-600">
                  Learn at your own pace with 24/7 access to video lessons and
                  practice materials.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Courses */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-20 left-10 text-teal-300 opacity-25" />
          <DotPattern className="bottom-20 right-10 text-cyan-300 opacity-25" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  Popular Courses
                </h2>
                <p className="text-gray-600">
                  Start your ASL journey with our most loved courses
                </p>
              </div>
              <Link
                href="/courses"
                className="text-teal-700 font-semibold hover:text-teal-800 flex items-center gap-2"
              >
                View all courses
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

            <div className="grid md:grid-cols-3 gap-8">
              {/* ASL 101 */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center">
                  <span className="text-6xl">👋</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Beginner
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ASL Basics
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Master the alphabet, numbers, and common phrases to start
                    your signing journey.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">Free</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm font-semibold"
                    >
                      Start Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Conversational ASL */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-gradient-to-br from-cyan-200 to-blue-200 flex items-center justify-center">
                  <span className="text-6xl">💬</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Intermediate
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Conversational ASL
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Build fluency with everyday conversations and practical
                    signing scenarios.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">$79</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm font-semibold"
                    >
                      Enroll
                    </Link>
                  </div>
                </div>
              </div>

              {/* ASL Mastery */}
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition">
                <div className="aspect-video bg-teal-700 flex items-center justify-center">
                  <span className="text-6xl">🎓</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    Advanced
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ASL Mastery
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Perfect your skills with advanced grammar, idioms, and
                    cultural nuances.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">$149</span>
                    <Link
                      href="/courses"
                      className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm font-semibold"
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
          <WavePattern className="top-10 right-20 text-teal-200 opacity-30" />
          <CirclePattern className="bottom-10 left-20 text-cyan-200 opacity-20" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The Future of ASL Learning
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Live Interaction Card */}
              <div className="bg-teal-700 rounded-3xl p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Live Interaction</h3>
                <p className="text-cyan-100 mb-6">
                  Practice with live instructors and get instant feedback on your
                  signing. Join real-time sessions with certified ASL teachers and
                  connect with fellow learners.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-200 mt-0.5 flex-shrink-0"
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
                    <span className="text-cyan-100">Real-time feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-200 mt-0.5 flex-shrink-0"
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
                    <span className="text-cyan-100">Interactive practice sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg
                      className="w-5 h-5 text-cyan-200 mt-0.5 flex-shrink-0"
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
                    <span className="text-cyan-100">Community support</span>
                  </li>
                </ul>
              </div>

              {/* AI Tracking Card */}
              <div className="bg-white rounded-3xl p-10 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">AI Tracking</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Harness AI to track your signing accuracy and get personalized
                  recommendations for improvement.
                </p>
              </div>
            </div>

            {/* Real-time Captions */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center">
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Real-time Captions
                    </h3>
                    <p className="text-gray-600">
                      AI-powered captioning helps you learn at your own pace with
                      instant translations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                    English
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                    Spanish
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
                    French
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stories */}
        <section className="py-20 bg-white relative overflow-hidden">
          {/* Decorative Elements */}
          <DotPattern className="top-10 right-10 text-teal-300 opacity-20" />
          <WavePattern className="bottom-10 left-10 text-cyan-200 opacity-25" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Community Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Story 1 */}
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">👩</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    "How SignLearn helped me get on the path to ASL fluency"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    I was always shy about the gap in my ASL skills. SignLearn gave
                    me the confidence and tools to communicate fluently with my Deaf
                    family members. The interactive lessons made all the difference.
                  </p>
                  <Link
                    href="/blog"
                    className="text-teal-700 font-semibold text-sm hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    Read full story
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
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">🏢</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">
                    "5 Tips for Interpreting ASL in Professional Settings"
                  </h3>
                  <p className="text-gray-600 mb-3">
                    As a professional interpreter, I've learned valuable lessons
                    about bridging communication gaps in corporate environments.
                    Here are my top tips for success.
                  </p>
                  <Link
                    href="/blog"
                    className="text-teal-700 font-semibold text-sm hover:text-teal-800 inline-flex items-center gap-1"
                  >
                    Read full story
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
        <section className="py-20 bg-teal-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Support Our Mission
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Your donation helps us provide free ASL education to thousands of
              learners worldwide. Join us in breaking barriers and building
              bridges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/donate"
                className="bg-white text-teal-700 px-8 py-3 rounded-full hover:bg-gray-100 transition font-semibold"
              >
                Donate Now
              </Link>
              <Link
                href="/courses"
                className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition font-semibold"
              >
                Explore All Courses
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
