import React, { useState } from 'react';
import { Compass, Wind, Anchor, Layers, MapPin, Info, ArrowUpRight } from 'lucide-react';
import { MARITIME_PORTS, MaritimePort } from '../data/srivijayaData';

export const GeographySection: React.FC = () => {
  const [selectedPort, setSelectedPort] = useState<MaritimePort>(MARITIME_PORTS[0]);
  const [activeLayer, setActiveLayer] = useState<'all' | 'trade-routes' | 'monsoon' | 'hegemony'>('all');

  return (
    <section
      id="geography"
      className="py-24 border-b border-[#9e7d3b]/20 bg-[#070e1a] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Archival Catalog Header */}
        <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-3 mb-10 text-xs font-sans tracking-widest uppercase text-[#9e7d3b]">
          <div className="flex items-center gap-2">
            <span className="text-[#e9c176]">CARTOGRAPHIC SPECIMEN MAP-04</span>
            <span aria-hidden="true">·</span>
            <span>MARITIME SPHERE OF HEGEMONY & TRADE ARTERIES</span>
          </div>
          <span className="text-[#d1c5b4]/60 tabular-nums">7TH – 11TH CENTURY</span>
        </div>

        {/* Section Headline */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#e9c176] mb-2">
              Cartography of the Thalassocracy
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#ede4d3]">
              Maritime Geography & Trade Routes
            </h2>
            <p className="font-serif italic text-base md:text-lg text-[#b5cad3]/80 mt-2">
              The Straits of Malacca and Sunda as the fulcrum of Afro-Eurasian maritime commerce.
            </p>
          </div>

          {/* Interactive Layer Filter Buttons (Zero pills, sharp segmented tabs) */}
          <div className="flex flex-wrap items-center border border-[#9e7d3b]/40 bg-[#0c1420] p-1 gap-1">
            <button
              onClick={() => setActiveLayer('all')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors ${
                activeLayer === 'all'
                  ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                  : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
              }`}
            >
              All Layers
            </button>
            <button
              onClick={() => setActiveLayer('trade-routes')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors ${
                activeLayer === 'trade-routes'
                  ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                  : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
              }`}
            >
              Trade Arteries
            </button>
            <button
              onClick={() => setActiveLayer('monsoon')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors ${
                activeLayer === 'monsoon'
                  ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                  : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
              }`}
            >
              Monsoon Winds
            </button>
            <button
              onClick={() => setActiveLayer('hegemony')}
              type="button"
              className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors ${
                activeLayer === 'hegemony'
                  ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                  : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
              }`}
            >
              Hegemony Zones
            </button>
          </div>
        </div>

        {/* 12-Column Cartographic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Map Visual (8 cols) */}
          <div className="lg:col-span-8 border border-[#9e7d3b]/30 bg-[#0c1420] p-3 md:p-5 relative shadow-2xl">
            {/* Top Bar with Nautical Crosshairs & Latitude Indicator */}
            <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-2 mb-3 text-[11px] font-sans tracking-widest uppercase text-[#9a8f80]">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>CHART: NAUTICAL SECTOR SRI-MALACCA-01</span>
              </div>
              <span className="text-[#e9c176] tabular-nums">LAT 10°N – 08°S / LON 95°E – 110°E</span>
            </div>

            {/* Interactive SVG Nautical Chart */}
            <div className="relative w-full aspect-[16/10] bg-[#070e1a] border border-[#9e7d3b]/15 overflow-hidden">
              <svg
                viewBox="0 0 1000 600"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Subtle water bathymetry pattern */}
                  <pattern id="seaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(197, 160, 89, 0.05)" strokeWidth="0.5" />
                  </pattern>
                  {/* Glowing marker filter */}
                  <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#e9c176" floodOpacity="0.8" />
                  </filter>
                </defs>

                {/* Ocean Background */}
                <rect width="1000" height="600" fill="#08101a" />
                <rect width="1000" height="600" fill="url(#seaGrid)" />

                {/* Latitude & Longitude Gridlines */}
                <line x1="0" y1="150" x2="1000" y2="150" stroke="rgba(158, 125, 59, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="300" x2="1000" y2="300" stroke="rgba(233, 193, 118, 0.25)" strokeWidth="1" strokeDasharray="2 2" /> {/* Equator */}
                <line x1="0" y1="450" x2="1000" y2="450" stroke="rgba(158, 125, 59, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="250" y1="0" x2="250" y2="600" stroke="rgba(158, 125, 59, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="500" y1="0" x2="500" y2="600" stroke="rgba(158, 125, 59, 0.12)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="750" y1="0" x2="750" y2="600" stroke="rgba(158, 125, 59, 0.12)" strokeWidth="1" strokeDasharray="4 4" />

                <text x="20" y="295" fill="rgba(233, 193, 118, 0.6)" fontSize="9" fontFamily="sans-serif" letterSpacing="2">EQUATOR (KHATULISTIWA) 00°00′</text>
                <text x="20" y="145" fill="rgba(158, 125, 59, 0.5)" fontSize="9" fontFamily="sans-serif">LAT 05°00′ N</text>
                <text x="20" y="445" fill="rgba(158, 125, 59, 0.5)" fontSize="9" fontFamily="sans-serif">LAT 05°00′ S</text>

                {/* Hegemony Zone Polyfill (When Active) */}
                {(activeLayer === 'all' || activeLayer === 'hegemony') && (
                  <path
                    d="M 330 80 Q 420 70 470 140 Q 510 240 620 370 Q 640 450 540 480 Q 450 440 370 340 Q 280 230 330 80 Z"
                    fill="rgba(233, 193, 118, 0.07)"
                    stroke="rgba(233, 193, 118, 0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="6 3"
                  />
                )}

                {/* LANDMASS SHAPES (Stylized Historical Cartography) */}
                {/* 1. Malay Peninsula */}
                <path
                  d="M 370 30 C 390 60 410 100 420 150 C 430 200 460 250 475 280 L 460 290 C 430 260 400 230 380 180 C 365 140 360 80 350 40 Z"
                  fill="#141c28"
                  stroke="#9e7d3b"
                  strokeWidth="1.5"
                />
                <text x="430" y="160" fill="rgba(219, 227, 244, 0.4)" fontSize="10" fontFamily="serif" letterSpacing="2">MALAY PENINSULA</text>

                {/* 2. Sumatra (Suvarnadvipa) */}
                <path
                  d="M 270 180 C 310 160 360 190 400 240 C 450 300 520 370 560 440 C 580 470 570 500 540 520 C 490 530 430 460 380 390 C 330 320 280 240 270 180 Z"
                  fill="#18202c"
                  stroke="#c5a059"
                  strokeWidth="1.8"
                />
                <text x="370" y="360" fill="rgba(233, 193, 118, 0.6)" fontSize="13" fontFamily="serif" letterSpacing="4" transform="rotate(-35 370 360)">SUVARṆADVĪPA (SUMATRA)</text>

                {/* 3. Bangka Island */}
                <ellipse cx="585" cy="395" rx="20" ry="32" fill="#141c28" stroke="#9e7d3b" strokeWidth="1.2" transform="rotate(-25 585 395)" />
                <text x="590" y="445" fill="rgba(219, 227, 244, 0.4)" fontSize="8" fontFamily="sans-serif">BANGKA</text>

                {/* 4. Belitung Island */}
                <circle cx="635" cy="425" r="14" fill="#141c28" stroke="#9e7d3b" strokeWidth="1" />

                {/* 5. Western Java (Bhumi Jawa) */}
                <path
                  d="M 580 520 C 650 510 750 525 820 540 C 800 565 720 560 630 550 C 590 545 570 535 580 520 Z"
                  fill="#141c28"
                  stroke="#9e7d3b"
                  strokeWidth="1.5"
                />
                <text x="680" y="550" fill="rgba(219, 227, 244, 0.4)" fontSize="10" fontFamily="serif" letterSpacing="2">JAVA (BHUMI JAWA)</text>

                {/* 6. Western Borneo (Kalimantan) */}
                <path
                  d="M 680 260 C 720 220 780 230 830 280 C 850 330 840 390 800 420 C 750 430 700 380 670 340 Z"
                  fill="#141c28"
                  stroke="rgba(158, 125, 59, 0.6)"
                  strokeWidth="1.2"
                />
                <text x="740" y="330" fill="rgba(219, 227, 244, 0.3)" fontSize="10" fontFamily="serif" letterSpacing="2">BORNEO</text>

                {/* STRAITS LABELS */}
                <text x="400" y="275" fill="#e9c176" fontSize="11" fontFamily="serif" fontStyle="italic" letterSpacing="1.5" transform="rotate(-30 400 275)">
                  STRAIT OF MALACCA
                </text>
                <text x="535" y="495" fill="#e9c176" fontSize="9" fontFamily="serif" fontStyle="italic" letterSpacing="1" transform="rotate(-40 535 495)">
                  SUNDA STRAIT
                </text>

                {/* MARITIME TRADE ROUTES (Arteries) */}
                {(activeLayer === 'all' || activeLayer === 'trade-routes') && (
                  <g>
                    {/* From India / Bay of Bengal to Kedah */}
                    <path d="M 60 140 Q 220 160 380 180" fill="none" stroke="#e9c176" strokeWidth="2" strokeDasharray="5 3" />
                    <text x="110" y="145" fill="#e9c176" fontSize="8" fontFamily="sans-serif" letterSpacing="1">FROM NALANDA & BENGAL →</text>

                    {/* From Kedah through Strait to Palembang */}
                    <path d="M 380 180 Q 440 260 520 370" fill="none" stroke="#e9c176" strokeWidth="2.5" />

                    {/* From Palembang through Sunda Strait to Java */}
                    <path d="M 520 370 Q 560 460 620 520" fill="none" stroke="#c5a059" strokeWidth="2" strokeDasharray="5 3" />

                    {/* From Palembang northeast towards China (Guangzhou) */}
                    <path d="M 520 370 Q 640 260 880 70" fill="none" stroke="#e9c176" strokeWidth="2" strokeDasharray="5 3" />
                    <text x="710" y="140" fill="#e9c176" fontSize="8" fontFamily="sans-serif" letterSpacing="1" transform="rotate(-38 710 140)">
                      ROUTE TO CANTON (GUANGZHOU) →
                    </text>
                  </g>
                )}

                {/* MONSOON WINDS LAYER */}
                {(activeLayer === 'all' || activeLayer === 'monsoon') && (
                  <g>
                    {/* Northeast Monsoon (Nov–March) */}
                    <path d="M 780 100 L 730 140" stroke="#b5cad3" strokeWidth="2" markerEnd="url(#arrow)" />
                    <path d="M 720 130 L 670 170" stroke="#b5cad3" strokeWidth="2" />
                    <path d="M 660 160 L 610 200" stroke="#b5cad3" strokeWidth="2" />
                    <text x="640" y="90" fill="#b5cad3" fontSize="9" fontFamily="sans-serif" letterSpacing="1">
                      NE MONSOON (NOV–MAR): CHINA TO MALACCA
                    </text>

                    {/* Southwest Monsoon (May–Sept) */}
                    <path d="M 180 260 L 230 220" stroke="#e8c178" strokeWidth="2" />
                    <path d="M 240 220 L 290 180" stroke="#e8c178" strokeWidth="2" />
                    <path d="M 300 180 L 350 140" stroke="#e8c178" strokeWidth="2" />
                    <text x="120" y="280" fill="#e8c178" fontSize="9" fontFamily="sans-serif" letterSpacing="1">
                      SW MONSOON (MAY–SEP): INDIA TO SUNDA
                    </text>
                  </g>
                )}

                {/* INTERACTIVE PORT NODES */}
                {MARITIME_PORTS.map((port) => {
                  const isSelected = selectedPort.id === port.id;
                  return (
                    <g
                      key={port.id}
                      onClick={() => setSelectedPort(port)}
                      className="cursor-pointer group"
                    >
                      {/* Pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={port.svgX}
                          cy={port.svgY}
                          r="16"
                          fill="none"
                          stroke="#e9c176"
                          strokeWidth="1.5"
                          strokeDasharray="3 3"
                          className="animate-spin origin-center"
                        />
                      )}

                      {/* Port Node Anchor Symbol */}
                      <circle
                        cx={port.svgX}
                        cy={port.svgY}
                        r={isSelected ? 6 : 4.5}
                        fill={isSelected ? '#e9c176' : '#c5a059'}
                        stroke="#0c1420"
                        strokeWidth="1.5"
                        filter={isSelected ? 'url(#goldGlow)' : undefined}
                      />

                      {/* Port Label */}
                      <text
                        x={port.svgX + 10}
                        y={port.svgY + 4}
                        fill={isSelected ? '#ffffff' : '#ede4d3'}
                        fontSize={isSelected ? '11' : '9.5'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                        fontFamily="serif"
                        className="group-hover:fill-[#e9c176] transition-colors"
                      >
                        {port.name.split(' (')[0]}
                      </text>
                    </g>
                  );
                })}

                {/* Antique Compass Rose */}
                <g transform="translate(890, 500)">
                  <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(197, 160, 89, 0.4)" strokeWidth="1" />
                  <path d="M 0 -30 L 6 -6 L 30 0 L 6 6 L 0 30 L -6 6 L -30 0 L -6 -6 Z" fill="rgba(197, 160, 89, 0.25)" stroke="#e9c176" strokeWidth="1" />
                  <path d="M 0 -30 L 0 30 M -30 0 L 30 0" stroke="#9e7d3b" strokeWidth="0.8" />
                  <text x="-4" y="-34" fill="#e9c176" fontSize="10" fontWeight="bold">N</text>
                  <text x="-4" y="42" fill="#9e7d3b" fontSize="8">S</text>
                  <text x="35" y="3" fill="#9e7d3b" fontSize="8">E</text>
                  <text x="-44" y="3" fill="#9e7d3b" fontSize="8">W</text>
                </g>
              </svg>
            </div>

            {/* Curatorial Guide text under map */}
            <div className="mt-3 flex flex-wrap items-center justify-between text-[11px] font-sans text-[#9a8f80] gap-2">
              <span className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#e9c176]" />
                Select any port node on the chart to inspect its strategic commodities and role.
              </span>
              <span className="text-[#b5cad3]/70">Source: Stela Inscriptions & Chinese Song-Yuan Port Registry</span>
            </div>
          </div>

          {/* Port Detail Inspector Folio (4 cols) */}
          <div className="lg:col-span-4 border border-[#9e7d3b]/30 bg-[#141c28] p-6 space-y-5">
            <div className="border-b border-[#9e7d3b]/25 pb-3">
              <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>PORT SPECIMEN DOSSIER</span>
              </div>
              <h3 className="font-serif text-2xl text-[#ede4d3] mt-1">
                {selectedPort.name}
              </h3>
              <div className="text-xs font-serif italic text-[#b5cad3]/75 mt-0.5">
                Historical Moniker: {selectedPort.ancientName}
              </div>
            </div>

            {/* Geographical Coordinates */}
            <div className="bg-[#070e1a] p-3 border border-[#9e7d3b]/20 text-xs font-mono text-[#e9c176] flex justify-between items-center">
              <span>COORDINATES:</span>
              <span>{selectedPort.coordinates}</span>
            </div>

            {/* Functional Role */}
            <div>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#9a8f80] block mb-1">
                Strategic Function
              </span>
              <p className="font-serif text-sm text-[#ede4d3]">
                {selectedPort.role}
              </p>
            </div>

            {/* Commodities Traded */}
            <div>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#9a8f80] block mb-1.5">
                Key Merchandise & Tribute Items
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedPort.commodities.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sans text-[#ede4d3] bg-[#0c1420] border border-[#9e7d3b]/30 px-2.5 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Narrative Description */}
            <div className="text-xs font-sans text-[#b5cad3]/80 leading-relaxed space-y-2 font-light">
              <p>{selectedPort.description}</p>
              <div className="p-3 bg-[#0c1420]/80 border-l-2 border-[#e9c176] text-[#ede4d3]">
                <strong>Strategic Supremacy:</strong> {selectedPort.strategicSignificance}
              </div>
            </div>

            {/* Maritime Port Quick Switch List */}
            <div className="border-t border-[#9e7d3b]/20 pt-4">
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#9e7d3b] block mb-2">
                All Major Ports in Registry
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-sans">
                {MARITIME_PORTS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPort(p)}
                    type="button"
                    className={`text-left p-2 border transition-colors ${
                      selectedPort.id === p.id
                        ? 'border-[#e9c176] bg-[#0f232a] text-[#e9c176] font-medium'
                        : 'border-[#9e7d3b]/20 text-[#b5cad3]/80 hover:border-[#9e7d3b]/60 hover:text-[#ede4d3]'
                    }`}
                  >
                    {p.name.split(' (')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
