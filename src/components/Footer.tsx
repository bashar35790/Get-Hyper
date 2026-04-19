"use client";

import Link from "next/link";
import FadeInWrapper from "./FadeInWrapper";
import { ArrowUpRight } from "lucide-react";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-24 pb-8 px-4 md:px-8 border-t border-gray-800 rounded-t-[3rem] md:rounded-t-[5rem] mt-[-2rem] relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Top Huge CTA */}
        <div className="flex flex-col items-center text-center">
          <FadeInWrapper direction="up">
            <h2 className="text-6xl md:text-[8rem] font-extrabold tracking-tighter mb-12">
              Let’s Get <span className="text-gh-orange">Hyped!</span>
            </h2>
          </FadeInWrapper>

          <FadeInWrapper delay={0.2} direction="up" className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <Link
              href="mailto:info@gethyped.nl"
              className="bg-white text-black px-10 py-5 rounded-full font-bold uppercase tracking-wide text-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <span>Mail ons direct</span>
              <ArrowUpRight size={24} strokeWidth={3} />
            </Link>

            <Link
              href="#"
              className="bg-gh-orange text-white px-10 py-5 rounded-full font-bold uppercase tracking-wide text-xl hover:bg-[#ff4220] transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,84,54,0.3)] w-full sm:w-auto"
            >
              <span>Get Results</span>
              <span className="bg-white text-gh-orange rounded-full w-8 h-8 flex items-center justify-center">
                &rarr;
              </span>
            </Link>
          </FadeInWrapper>
        </div>

        {/* Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-16 border-t border-white/10">
          <FadeInWrapper delay={0.3} direction="up" className="md:col-span-2">
            <Link href="/" className="font-extrabold text-3xl tracking-tighter mb-6 inline-block">
              GETHYPED
            </Link>
            <p className="text-gray-400 max-w-sm text-lg font-medium">
              We maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt.
            </p>
          </FadeInWrapper>

          <FadeInWrapper delay={0.4} direction="up">
            <h4 className="font-bold text-xl mb-6 text-gray-200 uppercase tracking-widest">Explore</h4>
            <ul className="flex flex-col space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">Expertises</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">Work</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">Contact</Link></li>
            </ul>
          </FadeInWrapper>

          <FadeInWrapper delay={0.5} direction="up">
            <h4 className="font-bold text-xl mb-6 text-gray-200 uppercase tracking-widest">Connect</h4>
            <ul className="flex flex-col space-y-4">
              <li><a href="mailto:info@gethyped.nl" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">info@gethyped.nl</a></li>
              <li><a href="tel:+31615337496" className="text-gray-400 hover:text-white transition-colors text-lg font-medium">+31 6 1533 7496</a></li>
              <li>
                <div className="flex space-x-4 mt-6">
                  <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/25 transition-colors">
                    <Instagram size={24} />
                  </Link>
                  <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/25 transition-colors">
                    <Linkedin size={24} />
                  </Link>
                  <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/25 transition-colors">
                    <Twitter size={24} />
                  </Link>
                </div>
              </li>
            </ul>
          </FadeInWrapper>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/10 flex-col md:flex-row gap-4 mb-4">
          <p className="text-gray-500 font-medium">
            © {new Date().getFullYear()} Get Hyped. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors font-medium">Privacyvoorwaarden</Link>
            <Link href="https://dylanbrouwer.design/" className="text-gray-500 hover:text-white transition-colors font-medium">© Design by Dylan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
