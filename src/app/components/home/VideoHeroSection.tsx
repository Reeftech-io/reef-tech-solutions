"use client";
import { MotionFade } from '../anim/MotionFade';

import { useState, useEffect } from 'react';
import {
  WrenchScrewdriverIcon,
  BoltIcon,
  FireIcon,
  LockClosedIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import Link from 'next/link';

export default function VideoHeroSection() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    setVideoSrc("/videos/Hero.mp4");
  }, []);

  const services = [
    { name: "Electrical", Icon: BoltIcon, href: "/electrical-services" },
    { name: "Plumbing", Icon: WrenchScrewdriverIcon, href: "/plumbing-services" },
    { name: "Access Control", Icon: LockClosedIcon, href: "/lock-locksmith-services" },
    { name: "Fire Alarms", Icon: FireIcon, href: "/fire-alarm-support-waimea" },
    { name: "Spa & Sauna", Icon: BeakerIcon, href: "/pool-spa-sauna" },
  ];

  return (
    <section className="relative h-screen min-h-[780px] overflow-hidden bg-gray-900">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {videoSrc ? <source src={videoSrc} type="video/mp4" /> : null}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div
          className="absolute inset-y-0 left-0 hidden md:block"
          style={{
            width: "min(60vw, 70rem)",
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.83) 0%, rgba(0,0,0,0.88) 30%, rgba(0,0,0,0.50) 66%, rgba(0,0,0,0.00) 100%)",
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.66) 0%, rgba(0,0,0,0.66) 45%, rgba(0,0,0,0.66) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-48"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.20) 45%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-30 flex items-center">
        <div className="w-full max-w-[720px] xl:max-w-[920px] px-4 sm:px-10 md:px-14 lg:px-20 xl:px-36 pt-20">
          <div className="relative w-full text-white max-sm:text-center">
            <MotionFade delay={0.08}>
              <motion.img
                src="/photos/logoOpt.webp"
                alt="ReefTech Solutions logo"
                initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mb-5 h-28 w-28 rounded-full max-sm:mx-auto sm:relative sm:-left-4"
                style={{ filter: "drop-shadow(0 8px 22px rgba(0,0,0,0.55))" }}
              />
            </MotionFade>

            <MotionFade
              as="h1"
              delay={0.1}
              className="mb-4 font-tan-headline text-[clamp(2.5rem,5.4vw,4.8rem)] leading-[1.15] tracking-[-0.01em]"
            >
              <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-lime-600 bg-clip-text text-transparent">
                ReefTech Solutions
              </span>
            </MotionFade>

            <MotionFade
              delay={0.2}
              className="mb-4 max-w-[760px] text-[clamp(1.12rem,2.2vw,1.75rem)] leading-[1.2] text-white/86 max-sm:max-w-full"
            >
              Your One-Stop Shop for All Property Repairs & Maintenance
            </MotionFade>

            <MotionFade
              delay={0.3}
              className="mb-6 max-w-[900px] text-[clamp(0.95rem,1.35vw,1.15rem)] leading-[1.45] text-white/72 max-sm:max-w-full"
            >
              Professional facility maintenance, emergency repairs, and advanced technical solutions for Hawaii&apos;s Big Island property managers and vacation rentals.
            </MotionFade>

            <MotionFade delay={0.4} className="mb-8 flex max-w-[980px] flex-wrap gap-2 max-sm:max-w-full max-sm:justify-center">
              {services.map(({ name, Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-gradient-to-r from-black/45 via-black/35 to-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/80 transition-all duration-300 hover:bg-gradient-to-r hover:from-black/60 hover:via-black/50 hover:to-black/40"
                >
                  <Icon className="h-3 w-3 text-white/70" />
                  {name}
                </Link>
              ))}
            </MotionFade>

            <MotionFade delay={0.5} className="flex flex-wrap items-center gap-4 max-sm:justify-center">
              <a
                href="#request-form"
                className="inline-flex h-[46px] min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-7 text-[clamp(0.95rem,1.1vw,1.25rem)] font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                aria-label="Get Started Today"
              >
                Get Started Today
              </a>
              <a
                href="tel:+1-808-303-4627"
                className="inline-flex h-[46px] min-w-[200px] items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500 px-7 text-[clamp(0.92rem,1vw,1.2rem)] font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                aria-label="Call (808) 303-4627"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a2 2 0 01-2 2H7a6 6 0 01-6-6V5a2 2 0 012-2z" /></svg>
                Call (808) 303-4627
              </a>
            </MotionFade>
          </div>
        </div>
      </div>
    </section>
  );
}
