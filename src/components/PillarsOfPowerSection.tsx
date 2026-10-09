
import React, { useState } from 'react';
import CubeFlipButton from './CubeFlipButton';
import {
  Shield,
  Sparkles,
  Scale,
  Anchor,
  AlertTriangle,
  Eye,
} from 'lucide-react';

import telagaBatuImg from '../assets/images/telaga_batu_inscribed_stone_1791336953716.jpg';

const pillars = [
  {
    id: 'naval',
    number: '01',
    title: 'Naval Supremacy & The Orang Laut Alliance',
    shortTitle: 'Naval Might',
    cubeTitle: 'MARITIME POWER',
    subtitle: 'The Strength of the Sea',
    icon: Anchor,
    accent: '#77b9d0',
    description:
      'Srivijaya developed its power through strategic control of maritime routes and alliances with the Orang Laut, skilled seafaring communities who helped protect waterways and support the movement of trade.',
    significance:
      'Maritime power helped Srivijaya secure important straits, protect shipping, and strengthen its position as a regional trading center.',
    facts: [
      'Control of strategic maritime routes',
      'Alliance with the Orang Laut',
      'Protection of regional shipping',
    ],
  },
  {
    id: 'spiritual',
    number: '02',
    title: 'Buddhist Epistemic Hegemony',
    shortTitle: 'Buddhism',
    cubeTitle: 'BUDDHIST LEARNING',
    subtitle: 'A Center of Buddhist Scholarship',
    icon: Sparkles,
    accent: '#d8bd79',
    description:
      'Srivijaya became an important center of Buddhist learning. The account of the Chinese monk Yijing describes his stay in Srivijaya to study Buddhist teachings and Sanskrit before continuing his journey to India.',
    significance:
      'Religious scholarship strengthened Srivijaya’s cultural prestige and connected its intellectual community with wider Buddhist networks across Asia.',
    facts: [
      'A center for Buddhist studies',
      'Connections with scholars from abroad',
      'Cultural links with India and China',
    ],
  },
  {
    id: 'trade',
    number: '03',
    title: 'Royal Trade Monopoly & The Syahbandar System',
    shortTitle: 'Trade Monopoly',
    cubeTitle: 'ROYAL TRADE',
    subtitle: 'Wealth Through Maritime Exchange',
    icon: Scale,
    accent: '#c7a16a',
    description:
      'Srivijaya benefited from its location along major maritime trade routes. Ports and rulers played important roles in facilitating commerce, managing access to waterways, and collecting revenue from trade.',
    significance:
      'The combination of strategic geography and port administration helped support the wealth and influence of the Srivijayan political center.',
    facts: [
      'Strategic position along trade routes',
      'Port administration and customs',
      'Regional and international commerce',
    ],
  },
  {
    id: 'sacral',
    number: '04',
    title: 'Sacral Legitimacy & Inscribed Curse Oaths',
    shortTitle: 'Sacral Oaths',
    cubeTitle: 'ROYAL AUTHORITY',
    subtitle: 'Faith, Loyalty, and Political Power',
    icon: Shield,
    accent: '#c68d79',
    description:
      'Srivijayan inscriptions, including the Telaga Batu inscription, provide evidence of political authority and loyalty rituals. Inscribed curses were used to express the consequences of disloyalty toward the ruler.',
    significance:
      'Religious ideas and ritualized oaths helped communicate royal authority and reinforce relationships between the ruler and those under his power.',
    facts: [
      'Royal authority expressed through inscriptions',
      'Ritualized loyalty and allegiance',
      'Political messages preserved in stone',
    ],
  },
];

export default function PillarsOfPowerSection() {
  const [selectedPillarId, setSelectedPillarId] = useState('naval');

  const selectedPillar =
    pillars.find((pillar) => pillar.id === selectedPillarId) ?? pillars[0];

  const SelectedIcon = selectedPillar.icon;

  return (
    <section
      id="pillars-of-power"
      className="relative overflow-hidden bg-[#080e16] px-5 py-20 text-[#ede4d3] md:px-10 lg:px-16"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(199,161,106,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(199,161,106,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c7a16a]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c7a16a]">
              Foundations of an Empire
            </span>
          </div>

          <h2 className="font-serif text-3xl leading-tight text-[#ede4d3] sm:text-4xl md:text-5xl">
            The Four Pillars
            <span className="block italic text-[#c7a16a]">
              of Srivijaya’s Power
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#aab4c0] md:text-base">
            Explore the maritime, intellectual, economic, and political forces
            that helped shape the Srivijayan sphere of influence. Hover over
            each button or select a pillar to explore its significance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: Telaga Batu image */}
          <div className="flex flex-col">
            <div className="relative min-h-[300px] flex-1 overflow-hidden border border-[#c7a16a]/30 bg-[#101923] sm:min-h-[420px]">
              <img
                src={telagaBatuImg}
                alt="Telaga Batu inscription associated with Srivijayan royal authority"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-75"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080e16] via-[#080e16]/25 to-transparent" />

              <div className="absolute left-5 top-5 flex items-center gap-2 border border-[#c7a16a]/40 bg-[#080e16]/80 px-3 py-2 backdrop-blur-sm">
                <Eye size={14} className="text-[#c7a16a]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ede4d3]">
                  Epigraphic Evidence
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <span className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#c7a16a]">
                  Archaeology & Royal Power
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl">
                  The Telaga Batu Inscription
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-[#d0d5db]">
                  An important source for understanding royal authority,
                  loyalty, and political relationships in the Srivijayan world.
                </p>
              </div>
            </div>

            {/* Historical note */}
            <div className="mt-4 flex gap-3 border border-[#c7a16a]/20 bg-[#0d1520] p-4">
              <AlertTriangle
                size={17}
                className="mt-0.5 shrink-0 text-[#c7a16a]"
              />

              <p className="text-xs leading-6 text-[#aab4c0]">
                Inscriptions provide valuable evidence of political ideas and
                royal practices. Their interpretation should be considered
                alongside other archaeological and historical sources.
              </p>
            </div>
          </div>

          {/* Right: Four flat flip-navigation buttons */}
          <div className="flex flex-col">
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 className="font-serif text-xl text-[#ede4d3]">
                Select a Pillar
              </h3>

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8b98a7]">
                4 Foundations
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {pillars.map((pillar) => {
                const isSelected = selectedPillarId === pillar.id;
                const Icon = pillar.icon;

                return (
                  <CubeFlipButton
                    key={pillar.id}
                    selected={isSelected}
                    onClick={() => setSelectedPillarId(pillar.id)}
                    className="w-full"
                  >
                    <span className="flex w-full items-center gap-3">
                      <span
                        className="shrink-0 font-mono text-xs"
                        style={{ color: pillar.accent }}
                      >
                        {pillar.number}
                      </span>

                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        style={{ color: pillar.accent }}
                      />

                      <span className="min-w-0 truncate text-[10px] font-semibold uppercase tracking-wide">
                      {pillar.shortTitle}
                    </span>
                    </span>
                  </CubeFlipButton>
                );
              })}
            </div>

            {/* Selected pillar details */}
            <div className="mt-6 border border-[#c7a16a]/30 bg-[#0d1520] p-5 sm:p-7">
              <div className="mb-5 flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center border"
                  style={{
                    borderColor: `${selectedPillar.accent}65`,
                    backgroundColor: `${selectedPillar.accent}12`,
                  }}
                >
                  <SelectedIcon
                    size={23}
                    strokeWidth={1.4}
                    style={{ color: selectedPillar.accent }}
                  />
                </div>

                <div className="min-w-0">
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: selectedPillar.accent }}
                  >
                    Pillar {selectedPillar.number}
                  </span>

                  <h3 className="mt-2 font-serif text-xl leading-snug text-[#ede4d3] sm:text-2xl">
                    {selectedPillar.title}
                  </h3>
                </div>
              </div>

              <div
                className="mb-5 h-px w-full"
                style={{
                  background: `linear-gradient(to right, ${selectedPillar.accent}90, transparent)`,
                }}
              />

              <p className="text-sm leading-7 text-[#bdc5ce]">
                {selectedPillar.description}
              </p>

              <div
                className="mt-6 border-l-2 pl-4"
                style={{ borderColor: selectedPillar.accent }}
              >
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: selectedPillar.accent }}
                >
                  Historical Significance
                </span>

                <p className="mt-2 text-sm leading-7 text-[#aab4c0]">
                  {selectedPillar.significance}
                </p>
              </div>

              <div className="mt-6">
                <h4 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c7a16a]">
                  Key Characteristics
                </h4>

                <ul className="space-y-3">
                  {selectedPillar.facts.map((fact) => (
                    <li
                      key={fact}
                      className="flex items-start gap-3 text-sm leading-6 text-[#bdc5ce]"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: selectedPillar.accent }}
                      />

                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-[#c7a16a]/20 pt-5 sm:flex-row sm:items-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#788595]">
            Maritime · Intellectual · Economic · Political
          </p>

          <p className="text-xs text-[#788595]">
            The enduring foundations of Srivijayan influence
          </p>
        </div>
      </div>
    </section>
  );
}