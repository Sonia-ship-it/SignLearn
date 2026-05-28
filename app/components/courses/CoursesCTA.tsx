import Link from "next/link";

export default function CoursesCTA() {
  return (
    <section className="py-20 bg-teal-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to start signing?
        </h2>
        <p className="text-xl text-cyan-100 mb-8">
          Join over 85,000 students studying the sign language around the globe.
        </p>
        <Link
          href="/get-started"
          className="inline-block bg-white text-teal-700 px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold"
        >
          Get Started for Free
        </Link>
      </div>
    </section>
  );
}
