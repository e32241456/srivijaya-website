import React, { useState } from 'react';
import { Calendar, MapPin, BookOpen, ChevronRight, Filter } from 'lucide-react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/srivijayaData';

interface TimelineSectionProps {
  onSelectEventDetail: (event: TimelineEvent) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onSelectEventDetail }) => {
  const [activeEpoch, setActiveEpoch] = useState<string>('All');
  const [selectedEventId, setSelectedEventId] = useState<string>(TIMELINE_EVENTS[0].id);

  const epochs = [
    'All',
    'Foundation',
    'Shailendra Alliance',
    'Golden Age',
    'Chola Clashes',
    'Twilight'
  ];

  const filteredEvents = activeEpoch === 'All'
    ? TIMELINE_EVENTS
    : TIMELINE_EVENTS.filter((e) => e.epoch === activeEpoch);

  const activeEvent = TIMELINE_EVENTS.find((e) => e.id === selectedEventId) || TIMELINE_EVENTS[0];

  return (
    <section
      id="timeline"
      className="py-24 border-b border-[#9e7d3b]/20 bg-[#070e1a] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Archival Catalog Header */}
        <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-3 mb-10 text-xs font-sans tracking-widest uppercase text-[#9e7d3b]">
          <div className="flex items-center gap-2">
            <span className="text-[#e9c176]">CHRONOLOGICAL REGISTER CHR-06</span>
            <span aria-hidden="true">·</span>
            <span>PIVOTAL MOMENTS ACROSS SEVEN CENTURIES</span>
          </div>
          <span className="text-[#d1c5b4]/60 tabular-nums">683 – 1377 CE</span>
        </div>

        {/* Section Headline */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#e9c176] mb-2">
              The Curatorial Chronometer
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#ede4d3]">
              Pivotal Moments
            </h2>
            <p className="font-serif italic text-base md:text-lg text-[#b5cad3]/80 mt-2">
              From the initial Siddhayatra voyage to international Buddhist patronage and trans-oceanic naval conflict.
            </p>
          </div>

          {/* Epoch Selector (Zero pills, sharp segmented tabs) */}
          <div className="flex flex-wrap items-center border border-[#9e7d3b]/40 bg-[#0c1420] p-1 gap-1">
            {epochs.map((ep) => (
              <button
                key={ep}
                onClick={() => setActiveEpoch(ep)}
                type="button"
                className={`px-3 py-1.5 text-xs font-sans tracking-wider uppercase transition-colors whitespace-nowrap ${
                  activeEpoch === ep
                    ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                    : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
                }`}
              >
                {ep}
              </button>
            ))}
          </div>
        </div>

        {/* 12-Column Layout: 7 cols timeline scroller / 5 cols event inspection folio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Maritime Chronometer Timeline List (7 cols) */}
          <div className="lg:col-span-7 relative">
            {/* Maritime unbroken axis vertical rule */}
            <div className="absolute left-6 md:left-8 top-3 bottom-3 w-[1.5px] bg-[#9e7d3b]/40" />

            <div className="space-y-6">
              {filteredEvents.map((item) => {
                const isSelected = item.id === selectedEventId;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedEventId(item.id)}
                    className={`relative pl-14 md:pl-18 cursor-pointer group transition-all`}
                  >
                    {/* Timeline Node on the Axis */}
                    <div
                      className={`absolute left-6 md:left-8 top-4 -translate-x-1/2 w-3.5 h-3.5 rotate-45 border transition-all ${
                        isSelected
                          ? 'bg-[#e9c176] border-white ring-4 ring-[#e9c176]/20'
                          : 'bg-[#0c1420] border-[#9e7d3b] group-hover:border-[#e9c176]'
                      }`}
                    />

                    {/* Timeline Item Card */}
                    <div
                      className={`p-5 border transition-all ${
                        isSelected
                          ? 'border-[#e9c176] bg-[#0f232a] shadow-xl'
                          : 'border-[#9e7d3b]/20 bg-[#141c28] hover:border-[#9e7d3b]/60'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between text-xs font-sans mb-1.5 gap-2">
                        <span className="font-mono text-sm font-semibold text-[#e9c176] tabular-nums">
                          {item.yearLabel}
                        </span>
                        <span className="text-[11px] text-[#9a8f80] tracking-wider uppercase">
                          {item.epoch}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg text-[#ede4d3] group-hover:text-[#e9c176] transition-colors">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-1.5 text-xs font-sans text-[#b5cad3]/70 mt-1 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#9e7d3b]" />
                        <span>{item.location}</span>
                      </div>

                      <p className="text-xs font-sans text-[#dbe3f4]/80 leading-relaxed font-light">
                        {item.summary}
                      </p>

                      <div className="mt-3 pt-2 border-t border-[#9e7d3b]/15 flex items-center justify-between text-[11px] font-sans">
                        <span className="text-[#9a8f80] truncate max-w-[240px]">
                          Attested: {item.stelaOrSource}
                        </span>
                        <span className="text-[#e9c176] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Inspect Event <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Deep Curatorial Event Dossier (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 border border-[#9e7d3b]/30 bg-[#141c28] p-6 lg:p-8 space-y-6">
            <div className="border-b border-[#9e7d3b]/25 pb-4">
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176]">
                EPOCH DOSSIER RECORD
              </span>
              <div className="font-mono text-2xl text-[#e9c176] mt-1 tabular-nums">
                {activeEvent.yearLabel}
              </div>
              <h3 className="font-serif text-2xl text-[#ede4d3] mt-1">
                {activeEvent.title}
              </h3>
              <div className="flex items-center gap-1.5 text-xs font-sans text-[#b5cad3]/75 mt-2">
                <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>{activeEvent.location}</span>
              </div>
            </div>

            {/* Analysis */}
            <div className="space-y-4 text-xs md:text-sm font-sans leading-relaxed text-[#b5cad3]/90 font-light">
              <div>
                <strong className="block text-[11px] font-sans tracking-wider uppercase text-[#9a8f80] mb-1">
                  Historical Context & Analysis
                </strong>
                <p>{activeEvent.detailedAnalysis}</p>
              </div>

              <div className="p-3 bg-[#0c1420] border-l-2 border-[#e9c176] text-[#ede4d3]">
                <strong className="block text-[11px] font-sans tracking-wider uppercase text-[#e9c176] mb-1">
                  Long-Term Geo-Political Impact
                </strong>
                <p>{activeEvent.historicalImpact}</p>
              </div>
            </div>

            {/* Inscription / Primary Record Reference */}
            <div className="bg-[#070e1a] p-4 border border-[#9e7d3b]/20 text-xs font-sans">
              <span className="text-[11px] font-sans tracking-widest uppercase text-[#9e7d3b] block mb-1">
                Primary Archaeological Source
              </span>
              <div className="font-serif text-[#ede4d3] text-sm">
                {activeEvent.stelaOrSource}
              </div>
            </div>

            {/* Open Full Event Modal Action */}
            <button
              onClick={() => onSelectEventDetail(activeEvent)}
              type="button"
              className="w-full py-3 bg-[#c5a059] text-[#1a1412] text-xs font-semibold tracking-widest uppercase hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#1a1412]" />
              <span>Open Epigraphic Folio Viewer</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
