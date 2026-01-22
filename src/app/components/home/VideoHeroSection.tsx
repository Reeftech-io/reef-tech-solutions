"use client";
import { MotionFade } from '../anim/MotionFade';

import { useState, useEffect } from 'react';

export default function VideoHeroSection() {
  const [videoSrc, setVideoSrc] = useState<string>("");

  useEffect(() => {
    setVideoSrc("/videos/Hero.mp4");
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 flex items-center justify-center px-4 py-8 z-30">
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="transition-all duration-1000">
            <div className="mb-8 sm:mb-12">
              <MotionFade className="flex items-center justify-center mb-8 sm:mb-12" delay={0.05}>
                <img
                  src="/photos/logo.png"
                  alt="ReefTech Solutions Logo"
                  className="h-24 sm:h-32 md:h-40 lg:h-56 xl:h-64 w-auto"
                  style={{ filter: 'drop-shadow(0 0 20px rgba(0, 206, 209, 0.5))' }}
                />
              </MotionFade>
              <MotionFade as="h1" delay={0.15} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-lime-300 bg-clip-text text-transparent drop-shadow-2xl">
                  ReefTech Solutions
                </span>
              </MotionFade>
              <MotionFade delay={0.25} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mb-8 sm:mb-12 text-cyan-100 leading-relaxed">
                Your Property&apos;s Tech Department
              </MotionFade>
              <MotionFade delay={0.35} className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-200 mb-8 sm:mb-12">
                Smart home integration, vacation rental automation, and advanced technology solutions for Hawaii&apos;s Big Island.
              </MotionFade>
              <MotionFade delay={0.45} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="#request-form"
                  className="bg-gradient-to-r from-lime-400 to-cyan-400 text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:from-lime-300 hover:to-cyan-300 transition-all duration-300 hover:scale-105 shadow-2xl"
                  style={{ boxShadow: '0 0 30px rgba(50, 205, 50, 0.4)' }}
                >
                  Get Started Today
                </a>
                <a
                  href="tel:+1-808-303-4627"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call (808) 303-4627
                </a>
              </MotionFade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
