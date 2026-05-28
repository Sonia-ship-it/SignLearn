import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function ASL() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-50 to-teal-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
                  LEARN ASL
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Unlock the World of Visual Language
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Discover the beauty and expressiveness of American Sign
                  Language. Whether you're a beginner or looking to advance your
                  skills, we have the perfect course for you.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#courses"
                    className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
                  >
                    Start Learning Now
                  </Link>
                  <Link
                    href="#intro"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition"
                  >
                    Watch Intro
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-3xl p-6 shadow-2xl">
                  <div className="aspect-[3/4] bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-8xl mb-4">👋</div>
                      <p className="text-lg font-semibold">
                        Bridge Your Communication
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communication is a Human Right */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Communication is a Human Right
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                ASL is not just a language—it's a vibrant culture and a powerful
                tool for connection. Join us in breaking down barriers and
                building bridges.
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
        <section id="courses" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      Free
                    </span>
                    <button className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm">
                      Start Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">$79</span>
                    <button className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      $149
                    </span>
                    <button className="border-2 border-teal-700 text-teal-700 px-6 py-2 rounded-full hover:bg-teal-50 transition text-sm">
                      Enroll
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Future of ASL Learning */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-700 rounded-3xl p-12 text-white">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-bold mb-6">
                  The Future of ASL Learning
                </h2>
                <p className="text-xl text-cyan-100 mb-8">
                  Experience interactive lessons with real-time feedback, AI-powered
                  sign recognition, and a supportive community of learners.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-cyan-200 mt-1"
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
                    <div>
                      <h3 className="font-bold text-lg mb-1">
                        Live Interaction
                      </h3>
                      <p className="text-cyan-100">
                        Practice with live instructors and get instant feedback on
                        your signing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Community Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👩</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      "ASL Changed My Life"
                    </h3>
                    <p className="text-sm text-gray-600">Sarah M., Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I was always shy about the gap in my ASL skills. SignLearn
                  gave me the confidence and tools to communicate fluently with
                  my Deaf family members."
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">👨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      "Best Investment I Made"
                    </h3>
                    <p className="text-sm text-gray-600">James K., Professional</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "As a teacher, learning ASL has opened doors to better serve my
                  Deaf students. The courses are comprehensive and easy to
                  follow."
                </p>
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
              learners worldwide.
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
