"use client";
import { useState } from "react";

export default function CourseCatalog() {
  const [activeFilter, setActiveFilter] = useState("all");

  const courses = [
    {
      id: 1,
      title: "ASL 101",
      description:
        "Learn the alphabet, basic greetings, & essential vocabulary to start your ASL journey.",
      price: "Free",
      duration: "6 weeks",
      level: "Beginner",
      badge: "Beginner",
      badgeColor: "bg-teal-700",
      emoji: "👋",
      bgColor: "from-orange-200 to-pink-200",
    },
    {
      id: 2,
      title: "Deaf Culture & History",
      description:
        "Explore the rich heritage, traditions, and evolution of the Deaf community.",
      price: "$49",
      duration: "4 weeks",
      level: "Cultural",
      badge: "Cultural",
      badgeColor: "bg-yellow-500",
      emoji: "✊",
      bgColor: "teal-700",
    },
    {
      id: 3,
      title: "Business Signing",
      description:
        "Advance your career with specialized vocabulary for professional environments.",
      price: "$120",
      duration: "8 weeks",
      level: "Professional",
      badge: "Professional",
      badgeColor: "bg-purple-600",
      emoji: "💼",
      bgColor: "from-teal-600 to-teal-800",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Course Catalog
          </h2>
          <p className="text-gray-600 mb-8">
            Explore different levels and specializations
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === "all"
                  ? "bg-teal-700 text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-teal-700 hover:text-teal-700"
              }`}
            >
              All Levels
            </button>
            <button
              onClick={() => setActiveFilter("beginner")}
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === "beginner"
                  ? "bg-teal-700 text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-teal-700 hover:text-teal-700"
              }`}
            >
              Beginner
            </button>
            <button
              onClick={() => setActiveFilter("intermediate")}
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === "intermediate"
                  ? "bg-teal-700 text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-teal-700 hover:text-teal-700"
              }`}
            >
              Intermediate
            </button>
            <button
              onClick={() => setActiveFilter("advanced")}
              className={`px-6 py-2 rounded-full transition ${
                activeFilter === "advanced"
                  ? "bg-teal-700 text-white"
                  : "border-2 border-gray-300 text-gray-700 hover:border-teal-700 hover:text-teal-700"
              }`}
            >
              Advanced
            </button>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              <div className="relative">
                <div
                  className={`aspect-video ${
                    course.bgColor.includes("from")
                      ? `bg-gradient-to-br ${course.bgColor}`
                      : `bg-${course.bgColor}`
                  } flex items-center justify-center`}
                >
                  <span className="text-6xl">{course.emoji}</span>
                </div>
                <span
                  className={`absolute top-4 left-4 ${course.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {course.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {course.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {course.price}
                  </span>
                  <span className="text-sm text-gray-500">
                    {course.duration}
                  </span>
                </div>
                <button className="w-full border-2 border-teal-700 text-teal-700 py-2 rounded-full hover:bg-teal-50 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
