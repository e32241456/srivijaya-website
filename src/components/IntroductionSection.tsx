import React, { useState } from 'react';
import { Compass, Ship, BookOpen, Landmark } from 'lucide-react';
import { AnimatedFrontVisual } from './AnimatedFrontVisual';

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  visualtype: 'geography' | 'maritime'
|'knowledge' | 'diplomacy'}

const FlipCard: React.FC<FlipCardProps> = ({
  icon,
  title,
  subtitle,
  description,
  visualtype,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="h-[300px] cursor-pointer [perspective:1200px] group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* FRONT */}
        <div className="absolute inset-0 [backface-visibility:hidden] border border-[#9e7d3b]/30 bg-[#141c28] p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-[#e9c176]/70 hover:shadow-[0_12px_35px_rgba(233,193,118,0.15)]">
          <div>
            <AnimatedFrontVisual type={visualtype} />
            <div className="w-11 h-11 border border-[#9e7d3b]/40 flex items-center justify-center mb-8">
              {icon}
            </div>

            <p className="text-[10px] tracking-[0.2em] uppercase text-[#9e7d3b] mb-3">
              {subtitle}
            </p>

            <h3 className="font-serif text-2xl text-[#ede4d3]">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#9a8f80]">
            <span>Explore</span>
            <span className="text-[#e9c176]">↗</span>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] border border-[#e9c176]/40 bg-[#0f232a] p-7 flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#e9c176]/80 group-hover:shadow-[0_12px_35px_rgba(233,193,118,0.15)]">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#e9c176] mb-4">
              {subtitle}
            </p>

            <h3 className="font-serif text-2xl text-[#ede4d3] mb-5">
              {title}
            </h3>

            <p className="font-sans text-sm leading-relaxed text-[#dbe3f4]/80">
              {description}
            </p>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-[#9a8f80]">
            Click to return
          </div>
        </div>
      </div>
    </div>
  );
};

export const IntroductionSection: React.FC = () => {
  return (
    <section
      id="introduction"
      className="py-24 border-b border-[#9e7d3b]/20 bg-[#0c1420] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* Header */}
        <div className="border-b border-[#9e7d3b]/20 pb-8 mb-12">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#e9c176] mb-3">
            The Maritime Hegemon of Southeast Asia
          </p>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-6xl text-[#ede4d3]">
              The Rise of Srivijaya
            </h2>

            <p className="max-w-xl font-serif italic text-lg text-[#b5cad3]/80">
              How a riverine delta in eastern Sumatra became a major maritime
              power in Southeast Asia.
            </p>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-3xl mb-14">
          <p className="font-sans text-base md:text-lg leading-relaxed text-[#dbe3f4]/80">
            Srivijaya emerged from the strategic waterways of Sumatra and
            developed its influence through maritime trade, political
            alliances, religious learning, and control of important sea routes.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          <FlipCard
            visualtype='geography'
            icon={<Compass className="w-5 h-5 text-[#e9c176]" />}
            subtitle="01 / Geography"
            title="Strategic Position"
            description="Palembang's position along the Musi River gave Srivijaya access to important maritime routes connecting the Indian Ocean and the South China Sea."
          />

          <FlipCard
            visualtype='maritime'
            icon={<Ship className="w-5 h-5 text-[#e9c176]" />}
            subtitle="02 / Maritime Power"
            title="People of the Sea"
            description="Srivijaya's influence was closely connected to maritime communities and the movement of ships, goods, and people across the archipelago."
          />

          <FlipCard
            visualtype='knowledge'
            icon={<BookOpen className="w-5 h-5 text-[#e9c176]" />}
            subtitle="03 / Knowledge"
            title="Buddhist Learning"
            description="Srivijaya became an important center of Buddhist learning. The Chinese monk Yijing recorded his stay in Srivijaya before continuing his journey to India."
          />

          <FlipCard
            visualtype='diplomacy'
            icon={<Landmark className="w-5 h-5 text-[#e9c176]" />}
            subtitle="04 / Diplomacy"
            title="Regional Connections"
            description="The kingdom maintained connections with neighboring regions and foreign powers through trade, diplomacy, and maritime networks."
          />

        </div>

        {/* Hint */}
        <div className="mt-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#9a8f80]">
            Hover or click a card to explore
          </span>
        </div>

      </div>
    </section>
  );
};