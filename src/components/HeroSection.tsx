import React from 'react';
import { motion } from 'motion/react';
import { Compass, ChevronDown, Anchor, ShieldCheck } from 'lucide-react';
import heroStelaImg from '../assets/images/srivijaya_hero_stela_1791336903659.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section
    id="hero"
    className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between border-b border-[#9e7d3b]/20 bg-[#0c1420]"
  >
      <style>
        {`
          @keyframes textShine {
            0% {
              background-position: 100% 50%;
            }

            50% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e9c176]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0f232a]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Archival Specimen Top Bar */}
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 mb-8">
        <div className="flex flex-wrap items-center justify-between border-b border-[#9e7d3b]/25 pb-3 text-xs tracking-widest uppercase font-sans text-[#b5cad3]/75 gap-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[#e9c176] font-semibold">
              COLLECTION SRV-VII
            </span>

            <span aria-hidden="true" className="text-[#9e7d3b]">
              /
            </span>

            <span>EPIGRAPHIC ARCHIVE</span>

            <span aria-hidden="true" className="text-[#9e7d3b]">
              /
            </span>

            <span>THALASSOCRACY OF MALACCA & SUNDA</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] tabular-nums text-[#d1c5b4]/80">
            <span>COORD: 02°59′S 104°45′E (PALEMBANG)</span>

            <span aria-hidden="true" className="text-[#9e7d3b]">
              ·
            </span>

            <span>ERA: 683 – 1377 CE</span>
          </div>
        </div>
      </div>

      {/* Main Hero Grid Composition */}
      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* ===================================================== */}
        {/* LEFT COLUMN */}
        {/* ===================================================== */}

        <div className="lg:col-span-7 flex flex-col space-y-6">

          {/* Hero Title */}
          <div className="space-y-2">

            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="text-xs md:text-sm font-sans tracking-[0.2em] uppercase text-[#e9c176] flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#e9c176]" />

              The Maritime Thalassocracy of Suvarṇadvīpa
            </motion.p>

            {/* RULERS OF */}
            <motion.h1
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.6,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#f4ede0] leading-[1.05] [text-wrap:balance]"
            >
              RULERS OF
            </motion.h1>

            {/* SRIVIJAYA */}
            <motion.div
              initial={{ opacity: 0, y: 65 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05]"
            >
              <span className="inline-block italic font-normal text-transparent bg-clip-text bg-[linear-gradient(90deg,#e9c176_0%,#e9c176_35%,#fff4d6_50%,#e9c176_65%,#e9c176_100%)] bg-[length:250%_100%] animate-[textShine_5s_ease-in-out_infinite]">
                SRIVIJAYA
              </span>
            </motion.div>
          </div>

          {/* Gold Divider */}
          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
              transformOrigin: 'left',
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="h-[1px] w-36 bg-[#9e7d3b]/60"
          />

          {/* Curatorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.4,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="max-w-xl text-base md:text-lg text-[#ede4d3]/90 leading-relaxed font-sans font-light"
          >
            <p>
              From the freshwater estuaries of the Musi River arose the
              undisputed naval sovereign of the ancient Asian maritime trade.
              Commanding the chokepoints of the Malacca and Sunda straits,
              Srivijaya orchestrated seven centuries of trans-oceanic commerce,
              esoteric Buddhist scholarship, and sacral maritime power.
            </p>
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#biographical-record"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#c5a059] text-[#1a1412] text-xs font-semibold tracking-widest uppercase hover:bg-[#e9c176] transition-all hover:shadow-[0_0_20px_rgba(233,193,118,0.25)] focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <Anchor className="w-4 h-4 text-[#1a1412]" />

              <span>Begin Chronicle</span>
            </a>

            <button
              onClick={onExploreClick}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-3.5 border border-[#9e7d3b]/60 text-[#ede4d3] text-xs font-semibold tracking-widest uppercase hover:bg-[#0f232a] hover:border-[#e9c176] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e9c176]"
            >
              <span>Examine Sovereign Lineage</span>

              <span
                aria-hidden="true"
                className="text-[#e9c176]"
              >
                →
              </span>
            </button>
          </motion.div>

          {/* Archival Quote Plate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="pt-4 border-l-2 border-[#9e7d3b]/50 pl-4 text-xs font-serif italic text-[#d1c5b4]/80"
          >
            &ldquo;From the King of Kings, to whose port anchor a thousand
            ships of spice and gold...&rdquo;

            <span className="block mt-1 font-sans not-italic text-[11px] text-[#9a8f80]">
              — Diplomatic dispatch of Srivijaya, Damascus Archives (c. 718 CE)
            </span>
          </motion.div>

        </div>

        {/* ===================================================== */}
        {/* RIGHT COLUMN — IMAGE */}
        {/* ===================================================== */}

        <div className="lg:col-span-5">
          <div className="relative border border-[#9e7d3b]/30 bg-[#0f232a] p-3 shadow-2xl">

            {/* Corner Chamfer Marks */}
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#e9c176]" />
            <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#e9c176]" />
            <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#e9c176]" />
            <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#e9c176]" />

            {/* Specimen Header Metadata */}
            <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-2 mb-2 text-[11px] font-sans tracking-widest uppercase text-[#e9c176]">
              <span>SPECIMEN #SRV-683-STELA</span>
              <span className="text-[#b5cad3]/70">
                ANDESITE STONE EPIGRAPH
              </span>
            </div>

            {/* Artifact Image */}
            <div className="relative overflow-hidden bg-[#070e1a] aspect-[16/11]">
              <img
                src={heroStelaImg}
                alt="Ancient carved stone stela of Srivijaya inscribed in Pallava script"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1420] via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 p-2 bg-[#0c1420]/85 backdrop-blur-sm border border-[#9e7d3b]/30 flex items-center justify-between text-[11px] text-[#ede4d3]">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>Kedukan Bukit Archetype</span>
                </div>

                <span className="text-[#e9c176] font-mono tabular-nums">
                  23 APRIL 683 CE
                </span>
              </div>
            </div>

            {/* Curatorial Caption */}
            <div className="mt-3 text-xs text-[#b5cad3]/80 leading-relaxed font-sans font-light">
              Recovered near the Tatang River in South Sumatra, commemorating
              the foundational Siddhayatra expedition that birthed the empire.
            </div>

          </div>
        </div>

      </div>

      {/* ===================================================== */}
      {/* BOTTOM ARCHIVAL QUANTITATIVE BAR */}
      {/* ===================================================== */}

      <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 pt-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-[#9e7d3b]/25 pt-6 text-center md:text-left">

          <div className="space-y-1">
            <div className="font-serif text-2xl md:text-3xl text-[#e9c176] tabular-nums font-normal">
              700+
            </div>

            <div className="text-[11px] tracking-wider uppercase font-sans text-[#b5cad3]/70">
              Years Imperial Continuity
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-2xl md:text-3xl text-[#e9c176] tabular-nums font-normal">
              20,000+
            </div>

            <div className="text-[11px] tracking-wider uppercase font-sans text-[#b5cad3]/70">
              Siddhayatra War Galleys & Soldiers
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-2xl md:text-3xl text-[#e9c176] tabular-nums font-normal">
              1,000+
            </div>

            <div className="text-[11px] tracking-wider uppercase font-sans text-[#b5cad3]/70">
              Resident Monks & Epigraphers
            </div>
          </div>

          <div className="space-y-1">
            <div className="font-serif text-2xl md:text-3xl text-[#e9c176] tabular-nums font-normal">
              2 Straits
            </div>

            <div className="text-[11px] tracking-wider uppercase font-sans text-[#b5cad3]/70">
              Malacca & Sunda Chokepoints
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 flex justify-center">
          <a
            href="#biographical-record"
            aria-label="Scroll to biographical record"
            className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#9e7d3b] hover:text-[#e9c176] transition-colors"
          >
            <span>Scroll to Chronicle</span>

            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>
        </div>

      </div>
    </section>
  );
};