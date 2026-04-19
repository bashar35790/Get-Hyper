"use client";

import FadeInWrapper from "./FadeInWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Social strategy",
    subtitle: "Slimme strategie. Sterke start.",
    description:
      "We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die écht impact maken. Zo weet je precies waarom het werkt.",
    linkText: "Meer over social strategie",
    bgColor: "bg-gh-blue",
    textColor: "text-white",
    image: "/hero_aesthetic.png",
  },
  {
    id: "02",
    title: "Content creation",
    subtitle: "Content die opvalt en raakt.",
    description:
      "We maken content die opvalt. Blijft hangen. En jouw doelgroep raakt. Creatief, snel en energiek. Altijd met het doel voor ogen.",
    linkText: "Meer over content creatie",
    bgColor: "bg-gh-pink",
    textColor: "text-black",
    image: "/hero_aesthetic.png",
  },
  {
    id: "03",
    title: "Activation",
    subtitle: "Zichtbaar waar en wanneer het telt.",
    description:
      "De juiste content verdient het om gezien te worden. We verspreiden de content waar jouw doelgroep is. Zo raakt jouw merk de juiste mensen, precies waar en wanneer het telt.",
    linkText: "Meer over activatie",
    bgColor: "bg-gh-orange",
    textColor: "text-white",
    image: "/hero_aesthetic.png",
  },
  {
    id: "04",
    title: "Data",
    subtitle: "Inzichten die impact maken.",
    description:
      "We duiken in de cijfers om te snappen wat écht werkt. En sturen jouw content scherp bij.",
    linkText: "Meer over data",
    bgColor: "bg-gh-green",
    textColor: "text-white",
    image: "/hero_aesthetic.png",
  },
];

const ServiceCard = ({ 
  service, 
  idx, 
  total,
  progress 
}: { 
  service: any; 
  idx: number; 
  total: number;
  progress: MotionValue<number>;
}) => {
  // Start scaling down when its own sticky position reaches the top (approx idx / total)
  const targetScale = 1 - ((total - idx) * 0.05); 
  const startPoint = idx / total;
  
  // Transform values relative to container scroll progress
  const scale = useTransform(progress, [startPoint, 1], [1, targetScale]);
  const y = useTransform(progress, [startPoint, 1], [0, -50]);
  const opacity = useTransform(progress, [startPoint, 1], [1, 0.5]);

  return (
    <div className="h-[100vh] flex items-center justify-center sticky top-0 w-full px-4 md:px-8">
      <motion.div
        style={{ 
          scale, 
          y, 
          opacity, 
          top: `calc(10vh + ${idx * 30}px)` 
        }}
        className={clsx(
          "rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 md:gap-20 overflow-hidden relative group max-w-7xl mx-auto shadow-2xl w-full",
          service.bgColor,
          service.textColor
        )}
      >
        <div className="flex-1 w-full space-y-6 md:space-y-8 z-10">
          <span className="inline-block px-4 py-1 border-2 rounded-full font-bold text-sm tracking-widest border-current opacity-80 mb-4">
            {service.id}
          </span>
          <h3 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
            {service.title}
          </h3>
          <div className="space-y-4 max-w-xl">
            <h4 className="text-2xl font-bold">{service.subtitle}</h4>
            <p className="text-lg font-medium opacity-90 leading-relaxed">
              {service.description}
            </p>
          </div>
          <Link
            href="#"
            className={clsx(
              "inline-flex items-center gap-3 font-extrabold uppercase tracking-wider mt-6 group-hover:gap-5 transition-all",
              service.textColor
            )}
          >
            <span className="underline underline-offset-8 decoration-2">{service.linkText}</span>
            <ArrowRight size={24} />
          </Link>
        </div>

        <div className="flex-1 w-full relative z-10 h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-700">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section className="w-full relative pb-24">
      <div className="w-full py-24 px-4 md:px-8 bg-gh-cream relative z-20">
        <div className="max-w-7xl mx-auto md:mb-12">
          <FadeInWrapper direction="up">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter leading-tight max-w-5xl">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep
              raakt en jouw merk in beweging brengt.{" "}
              <span className="text-gray-400">Snel, krachtig en energiek.</span>
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2} direction="up" className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <p className="text-xl md:text-2xl text-gray-800 font-medium max-w-2xl leading-snug">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content zonder resultaat.
            </p>
            <Link
              href="#"
              className="flex-shrink-0 bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
            >
              <span>Leer ons kennen</span>
            </Link>
          </FadeInWrapper>
        </div>
      </div>

      <div ref={containerRef} className="w-full relative">
        {services.map((service, idx) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            idx={idx} 
            total={services.length} 
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
