"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeInWrapper from "./FadeInWrapper";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-20 px-4">
      {/* Background Shapes / Cards */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 md:opacity-100">
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.8, x: -100, y: 50 }}
          animate={{ opacity: 1, rotate: -10, scale: 1, x: -150, y: 20 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="hidden md:block absolute left-[10%] top-[25%] w-64 h-80 rounded-2xl overflow-hidden shadow-2xl brightness-75 bg-gray-200"
        >
          <Image
            src="/hero_aesthetic.png"
            alt="Content creation setup"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, rotate: 15, scale: 0.8, x: 100, y: -50 }}
          animate={{ opacity: 1, rotate: 8, scale: 1, x: 150, y: -20 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="hidden md:block absolute right-[10%] top-[30%] w-72 h-96 rounded-2xl overflow-hidden shadow-2xl brightness-90 bg-gray-300 z-10"
        >
          <Image
            src="/hero_aesthetic.png"
            alt="Dynamic trendy content"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        <FadeInWrapper delay={0.1} direction="up">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-extrabold tracking-tighter leading-[0.9] text-foreground mix-blend-difference mb-8">
            <span className="block">Get Hyped.</span>
            <span className="block text-gh-orange">Get Noticed.</span>
            <span className="block">Get Results.</span>
          </h1>
        </FadeInWrapper>

        <FadeInWrapper delay={0.3} direction="up">
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto mb-10 leading-snug">
            Klaar met gokken op content die niets oplevert? Wij maken content
            die opvalt. Blijft hangen. En jouw doelgroep raakt.
          </p>
        </FadeInWrapper>

        <FadeInWrapper delay={0.5} direction="up">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#"
              className="bg-gh-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,84,54,0.3)]"
            >
              <span>Leer ons kennen</span>
              <span className="bg-white text-gh-orange rounded-full w-8 h-8 flex items-center justify-center">
                <ArrowRight size={18} strokeWidth={3} />
              </span>
            </Link>
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}
