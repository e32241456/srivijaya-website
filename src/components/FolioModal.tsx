import React from 'react';
import { X, BookOpen, Crown, Calendar, MapPin, Scroll, ExternalLink } from 'lucide-react';
import { Ruler, TimelineEvent } from '../data/srivijayaData';

interface FolioModalProps {
  ruler: Ruler | null;
  event: TimelineEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FolioModal: React.FC<FolioModalProps> = ({ ruler, event, isOpen, onClose }) => {
  if (!isOpen || (!ruler && !event)) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      {/* Modal Dialog Container with Sharp Chamfer Styling */}
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#141c28] border border-[#e9c176]/50 shadow-2xl flex flex-col overflow-hidden text-[#dbe3f4]">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 md:p-6 border-b border-[#9e7d3b]/30 bg-[#0c1420]">
          <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#e9c176]">
            {ruler ? <Crown className="w-4 h-4 text-[#e9c176]" /> : <Calendar className="w-4 h-4 text-[#e9c176]" />}
            <span>{ruler ? 'SOVEREIGN ARCHIVAL FOLIO' : 'CHRONOLOGICAL EPIGRAPHIC FOLIO'}</span>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close archival folio"
            className="p-1.5 text-[#b5cad3] hover:text-[#e9c176] border border-[#9e7d3b]/30 hover:border-[#e9c176] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-8 overflow-y-auto space-y-6 font-sans">
          {ruler && (
            <>
              {/* Ruler Details */}
              <div className="border-b border-[#9e7d3b]/20 pb-4">
                <span className="text-xs font-mono text-[#e9c176] tracking-wider block mb-1">
                  REIGN: {ruler.reignPeriod} · {ruler.dynasty.toUpperCase()} DYNASTY
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-[#ede4d3]">
                  {ruler.name}
                </h2>
                <div className="text-sm font-serif italic text-[#b5cad3]/80 mt-1">
                  {ruler.fullTitle}
                </div>
                <div className="text-xs text-[#9a8f80] mt-1">
                  Royal Capital / Seat: {ruler.seat}
                </div>
              </div>

              {/* Quote Plate if exists */}
              {ruler.quote && (
                <div className="p-4 bg-[#070e1a] border-l-2 border-[#e9c176] font-serif italic text-sm text-[#f4ede0]">
                  &ldquo;{ruler.quote}&rdquo;
                  <div className="text-[11px] font-sans not-italic text-[#e9c176] mt-1 uppercase tracking-wider">
                    — {ruler.quoteAuthor}
                  </div>
                </div>
              )}

              {/* Historical Narrative */}
              <div>
                <span className="text-xs tracking-wider uppercase font-sans text-[#9a8f80] block mb-2 font-semibold">
                  Curatorial Biography & Historical Context
                </span>
                <p className="text-sm leading-relaxed text-[#dbe3f4]/90 font-light">
                  {ruler.narrative}
                </p>
              </div>

              {/* Major Regnal Deeds & Achievements */}
              <div>
                <span className="text-xs tracking-wider uppercase font-sans text-[#9a8f80] block mb-2 font-semibold">
                  Major Imperial Achievements
                </span>
                <ul className="space-y-2 text-xs md:text-sm text-[#b5cad3]/90">
                  {ruler.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#e9c176] font-bold mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Epigraphic Attestation */}
              <div className="p-4 bg-[#070e1a] border border-[#9e7d3b]/20">
                <span className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] block mb-1.5">
                  Primary Epigraphic Stelae & Attested Sources
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {ruler.inscriptions.map((ins, idx) => (
                    <span
                      key={idx}
                      className="bg-[#141c28] border border-[#9e7d3b]/30 px-2.5 py-1 text-[#ede4d3]"
                    >
                      {ins}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}

          {event && (
            <>
              {/* Event Details */}
              <div className="border-b border-[#9e7d3b]/20 pb-4">
                <div className="font-mono text-2xl text-[#e9c176] tabular-nums">
                  {event.yearLabel}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-[#ede4d3] mt-1">
                  {event.title}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-[#b5cad3]/75 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-[#e9c176]" />
                  <span>{event.location}</span>
                </div>
              </div>

              <div>
                <span className="text-xs tracking-wider uppercase font-sans text-[#9a8f80] block mb-1 font-semibold">
                  Executive Summary
                </span>
                <p className="text-sm leading-relaxed text-[#ede4d3]/90">
                  {event.summary}
                </p>
              </div>

              <div>
                <span className="text-xs tracking-wider uppercase font-sans text-[#9a8f80] block mb-1 font-semibold">
                  Historiographical Deep Analysis
                </span>
                <p className="text-sm leading-relaxed text-[#b5cad3]/90 font-light">
                  {event.detailedAnalysis}
                </p>
              </div>

              <div className="p-4 bg-[#070e1a] border-l-2 border-[#e9c176] text-xs">
                <span className="text-[#e9c176] uppercase tracking-wider block mb-1 font-semibold">
                  Long-Term Hegemonic Impact
                </span>
                <p className="text-[#ede4d3]/90">{event.historicalImpact}</p>
              </div>

              <div className="p-3 bg-[#0c1420] border border-[#9e7d3b]/25 text-xs">
                <span className="text-[#9a8f80] block uppercase tracking-wider text-[11px] mb-1">
                  Primary Epigraphic Stela / Archaeological Source
                </span>
                <span className="font-serif text-[#e9c176] text-sm">
                  {event.stelaOrSource}
                </span>
              </div>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-[#9e7d3b]/20 bg-[#0c1420] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 bg-[#c5a059] text-[#1a1412] text-xs font-semibold tracking-widest uppercase hover:bg-[#e9c176] transition-colors"
          >
            Close Folio
          </button>
        </div>
      </div>
    </div>
  );
};
