"use client";

import FadeInWrapper from "./FadeInWrapper";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WorkGrid() {
  const works = [
    {
      title: "Van nul naar vol, binnen 3 weken",
      client: "Bullit",
      image: "/hero_aesthetic.png",
      span: "md:col-span-2 md:row-span-2",
    },
    {
      title: "Zacht in smaak, sterk in beeld",
      client: "Roasta",
      image: "/hero_aesthetic.png",
      span: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Content die écht smaakt (en raakt)",
      client: "Loco Loco",
      image: "/hero_aesthetic.png",
      span: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section className="w-full py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
        <FadeInWrapper direction="left" className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Content dat scoort.
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-snug">
            Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
          </p>
        </FadeInWrapper>

        <FadeInWrapper direction="right">
          <Link
            href="#"
            className="inline-flex bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:bg-gray-800 transition-colors items-center gap-3"
          >
            <span>Bekijk al ons werk</span>
            <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
              <ArrowRight size={18} strokeWidth={3} />
            </span>
          </Link>
        </FadeInWrapper>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
        {works.map((work, idx) => (
          <FadeInWrapper
            key={idx}
            delay={idx * 0.2}
            direction="up"
            className={`${work.span} h-full w-full`}
          >
            <Link
              href="#"
              className="relative block w-full h-full rounded-[2rem] overflow-hidden group"
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none transition-opacity duration-500 opacity-80 group-hover:opacity-100" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gh-orange font-bold text-sm tracking-widest uppercase mb-2 block">
                  {work.client}
                </span>
                <h3 className="text-white text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                  {work.title}
                </h3>
              </div>
            </Link>
          </FadeInWrapper>
        ))}
      </div>
    </section>
  );
}
