"use client";

import FadeInWrapper from "./FadeInWrapper";

export default function StatsSection() {
  const stats = [
    {
      title: "Organische views",
      description: "Groei door slimme content",
    },
    {
      title: "Merken geholpen",
      description: "Van start-up tot multinational",
    },
  ];

  return (
    <section className="w-full py-12 md:py-20 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {stats.map((stat, idx) => (
          <FadeInWrapper
            key={idx}
            delay={idx * 0.2}
            direction="up"
            className="flex flex-col items-center text-center pt-8 md:pt-0 pb-8 md:pb-0 px-4"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gh-orange mb-2">
              {idx === 0 ? "10M+" : "50+"}
            </h3>
            <h4 className="text-xl font-bold mb-1">{stat.title}</h4>
            <p className="text-gray-500 font-medium">{stat.description}</p>
          </FadeInWrapper>
        ))}
      </div>
    </section>
  );
}
