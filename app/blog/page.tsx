"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Sign Language: From Origins to Digital Future",
      excerpt:
        "Explore the fascinating journey of sign language from ancient times to modern digital platforms...",
      category: "History",
      categoryColor: "bg-teal-100 text-teal-700",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "🌍",
      bgColor: "from-teal-200 to-cyan-200",
    },
    {
      id: 2,
      title: "How ASL Changed My Career Path in Tech",
      excerpt:
        "A personal story of discovering the power of accessibility and how learning ASL opened new career opportunities...",
      category: "Career",
      categoryColor: "bg-purple-100 text-purple-700",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "💼",
      bgColor: "from-purple-200 to-pink-200",
    },
    {
      id: 3,
      title: "Local Sign Centers: Why They Still Matter in a Digital World",
      excerpt:
        "Exploring the continued importance of in-person Deaf community centers alongside online learning...",
      category: "Community",
      categoryColor: "bg-blue-100 text-blue-700",
      date: "March 5, 2024",
      readTime: "5 min read",
      image: "🏢",
      bgColor: "from-blue-200 to-cyan-200",
    },
    {
      id: 4,
      title: "Top 5 Tips for New Learners Navigating the First 90 Days",
      excerpt:
        "Essential advice for beginners starting their ASL journey, from practice routines to community engagement...",
      category: "Learning Tips",
      categoryColor: "bg-yellow-100 text-yellow-700",
      date: "February 28, 2024",
      readTime: "7 min read",
      image: "📚",
      bgColor: "from-yellow-200 to-orange-200",
    },
    {
      id: 5,
      title: "Empowering the Next Generation of Interpreters",
      excerpt:
        "How modern technology and training programs are shaping the future of sign language interpretation...",
      category: "Education",
      categoryColor: "bg-green-100 text-green-700",
      date: "February 20, 2024",
      readTime: "9 min read",
      image: "🎓",
      bgColor: "from-green-200 to-teal-200",
    },
    {
      id: 6,
      title: "The Future of Remote Sign Language Interpretation",
      excerpt:
        "Examining how video technology is revolutionizing access to interpretation services worldwide...",
      category: "Technology",
      categoryColor: "bg-indigo-100 text-indigo-700",
      date: "February 15, 2024",
      readTime: "6 min read",
      image: "💻",
      bgColor: "from-indigo-200 to-purple-200",
    },
  ];

  const categories = [
    "All Posts",
    "Success Stories",
    "Learning Tips",
    "Latest News",
    "Events",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-cyan-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-4">
                  COMMUNITY BLOG
                </div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Voices of the Community
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Stories, insights, and experiences from the Deaf community and
                  those shaping the future of Deaf education and accessibility.
                  Discover the human side of sign language.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#stories"
                    className="bg-teal-700 text-white px-8 py-3 rounded-full hover:bg-teal-800 transition"
                  >
                    Explore Stories
                  </Link>
                  <Link
                    href="#submit"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-teal-700 hover:text-teal-700 transition"
                  >
                    Submit a Story
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="bg-teal-700 rounded-3xl overflow-hidden shadow-2xl max-h-[400px]">
                  <img
                    src="/blog.png"
                    alt="Blog stories"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-700 font-medium">Filter by:</span>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2 rounded-full transition ${
                      index === 0
                        ? "bg-teal-700 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Large Featured Story */}
              <div className="md:col-span-2">
                <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-3xl overflow-hidden h-full relative min-h-[400px]">
                  {/* Background Illustration */}
                  <div className="absolute inset-0">
                    <img
                      src="/people.png"
                      alt="People in office"
                      className="w-full h-full object-cover opacity-60"
                    />
                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-700/80 via-teal-600/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10 flex flex-col justify-end h-full">
                    <div className="mb-6">
                      <span className="inline-block bg-yellow-600 text-white px-4 py-1.5 rounded text-xs font-bold mb-4 uppercase tracking-wide">
                        FEATURED STORY
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight max-w-2xl">
                        The Evolution of Sign Language: From Origins to Digital
                        Future
                      </h2>
                      <p className="text-white/95 mb-0 max-w-2xl">
                        Explore how technology is bridging the gap and how visual
                        languages have adapted for the remote-work era.
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                        <span className="text-2xl">👤</span>
                      </div>
                      <div>
                        <div className="text-white font-bold text-base">
                          Dr. Elena Fisher
                        </div>
                        <div className="text-white/90 text-sm">
                          Linguistics Researcher • 8 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side Cards */}
              <div className="space-y-6">
                {/* Career Hub Card */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img
                      src="/sign.jpg"
                      alt="Career story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      CAREER HUB
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      How ASL Changed My Career Path in Tech
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      James shares his journey of integrating accessibility into
                      product design through...
                    </p>
                    <Link
                      href="/blog/2"
                      className="text-teal-700 font-semibold text-sm hover:text-teal-800 flex items-center gap-1"
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

                {/* New Guide Card */}
                <div className="bg-teal-700 rounded-2xl p-6 text-white">
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                    NEW GUIDE
                  </span>
                  <h3 className="text-xl font-bold mb-4">
                    Top 5 Tips for New Learners: Navigating the First 30 Days
                  </h3>
                  <Link
                    href="/blog/3"
                    className="text-white font-semibold text-sm hover:text-cyan-100 flex items-center gap-2"
                  >
                    Read full guide
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section id="stories" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.slice(0, 6).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition group"
                >
                  <div
                    className={`aspect-video bg-gradient-to-br ${post.bgColor} flex items-center justify-center relative overflow-hidden`}
                  >
                    <span className="text-6xl relative z-10">{post.image}</span>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`${post.categoryColor} px-3 py-1 rounded-full text-xs font-semibold uppercase`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-teal-700 transition">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-500">{post.date}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-teal-700 font-semibold text-sm hover:text-teal-800 flex items-center gap-1"
                      >
                        Read More
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
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="border-2 border-teal-700 text-teal-700 px-8 py-3 rounded-full hover:bg-teal-50 transition font-semibold inline-flex items-center gap-2">
                Load More Stories
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-700 rounded-3xl p-12 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Informed and Inspired
              </h2>
              <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                Get the latest stories, exciting resources, and community news
                delivered directly to your inbox every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white placeholder-white/60"
                />
                <button className="bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-cyan-200 mt-4">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
