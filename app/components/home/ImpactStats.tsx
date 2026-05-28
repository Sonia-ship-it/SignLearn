import { DotPattern } from "../DecorativeElements";

export default function ImpactStats() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <DotPattern className="top-10 left-10 text-teal-400 opacity-30" />
      <DotPattern className="bottom-10 right-10 text-cyan-400 opacity-25" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-2">🎓</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">$1.2M+</div>
            <div className="text-gray-600">In scholarships</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-2">👥</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">85,000</div>
            <div className="text-gray-600">Deaf learners</div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-2">🌍</div>
            <div className="text-3xl font-bold text-gray-900 mb-2">140+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
}
