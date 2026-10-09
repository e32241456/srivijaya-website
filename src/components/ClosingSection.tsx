
import React, { useState } from 'react';
import { BookOpen, Copy, Check } from 'lucide-react';
import fleetImg from '../assets/images/srivijaya_maritime_fleet_1791336943442.jpg';
import { GLOSSARY_TERMS } from '../data/srivijayaData';

export const ClosingSection: React.FC = () => {
  const [citationCopied, setCitationCopied] = useState(false);
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState(
    GLOSSARY_TERMS[0]
  );

  const copyCitation = async () => {
    const citation =
      'Cœdès, George. 1918. "Le Royaume de Çrīvijaya." Bulletin de l’École française d’Extrême-Orient 18 (6): 1–36.';

    try {
      await navigator.clipboard.writeText(citation);
      setCitationCopied(true);
      setTimeout(() => setCitationCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy citation:', error);
    }
  };

  return (
    <section
      id="closing"
      className="py-24 border-b border-[#9e7d3b]/20 bg-[#070e1a] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Archival Catalog Header */}
        <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-3 mb-12 text-xs font-sans tracking-widest uppercase text-[#9e7d3b]">
          <div className="flex items-center gap-2">
            <span className="text-[#e9c176]">
              EPILOGUE FOLIO EPI-08
            </span>
            <span aria-hidden="true">·</span>
            <span>HISTORIOGRAPHICAL REDISCOVERY & HERITAGE</span>
          </div>

          <span className="text-[#d1c5b4]/60 tabular-nums">
            1918 – CONTEMPORARY ERA
          </span>
        </div>

        {/* Section Headline */}
        <div className="mb-14 max-w-3xl">
          <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#e9c176] mb-2">
            The Resurrected Thalassocracy
          </p>

          <h2 className="font-serif text-3xl md:text-5xl text-[#ede4d3]">
            Rediscovery & Archival Legacy
          </h2>

          <p className="font-serif italic text-base md:text-lg text-[#b5cad3]/80 mt-2">
            How centuries of historical amnesia were dissolved by a
            single French epigrapher in 1918.
          </p>
        </div>

        {/* Large Cinematic Banner: The Eternal Fleet */}
        <div className="mb-16 border border-[#9e7d3b]/30 bg-[#0f232a] p-3 relative shadow-2xl">
          <div className="relative aspect-[21/9] md:aspect-[24/9] bg-[#070e1a] overflow-hidden">
            <img
              src={fleetImg}
              alt="Ancient Srivijayan naval fleet navigating the Strait of Malacca at golden hour"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1420] via-black/30 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-xl space-y-1">
                <span className="text-xs font-sans tracking-widest uppercase text-[#e9c176]">
                  ARCHIVAL MONOGRAPH
                </span>

                <h3 className="font-serif text-xl md:text-3xl text-[#ede4d3]">
                  The Vanished Empire That Commanded the Sea
                </h3>

                <p className="text-xs md:text-sm font-sans text-[#b5cad3]/85 line-clamp-2 md:line-clamp-none">
                  For over half a millennium after the fall to
                  Majapahit, Srivijaya was forgotten. European and
                  Javanese histories knew only of Majapahit, while
                  Chinese chronicles recorded a mysterious kingdom
                  called &lsquo;San-fo-tsi&rsquo;.
                </p>
              </div>

              <div className="text-[11px] font-sans text-[#e9c176] bg-[#0c1420]/80 border border-[#9e7d3b]/40 px-3 py-1.5 whitespace-nowrap">
                DECIPHERED BY GEORGE CŒDÈS (1918)
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Epigraphic Glossary and Citation */}
        <div className="grid grid-cols-1 gap-10 items-start">
          <div className="border border-[#9e7d3b]/30 bg-[#141c28] p-6 lg:p-8 space-y-6">
            {/* Glossary Header */}
            <div className="border-b border-[#9e7d3b]/20 pb-3">
              <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>EPIGRAPHIC LEXICON</span>
              </div>

              <h3 className="font-serif text-2xl text-[#ede4d3] mt-1">
                Classical Terminology
              </h3>

              <p className="text-xs font-sans text-[#b5cad3]/75 mt-0.5">
                Key Old Malay and Sanskrit terms inscribed across the
                imperial stelae.
              </p>
            </div>

            {/* Glossary Terms */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {GLOSSARY_TERMS.map((item) => (
                <button
                  key={item.term}
                  onClick={() => setActiveGlossaryTerm(item)}
                  type="button"
                  className={`p-2.5 text-left border text-xs font-sans transition-colors ${
                    activeGlossaryTerm.term === item.term
                      ? 'border-[#e9c176] bg-[#0f232a] text-[#e9c176] font-semibold'
                      : 'border-[#9e7d3b]/20 text-[#b5cad3]/80 hover:border-[#9e7d3b]/60 hover:text-[#ede4d3]'
                  }`}
                >
                  <span className="block truncate">{item.term}</span>
                  <span className="text-[10px] text-[#9a8f80] block">
                    {item.language}
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Term Details */}
            {activeGlossaryTerm && (
              <div className="bg-[#070e1a] border border-[#9e7d3b]/25 p-5 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono text-[#e9c176]">
                  <span>
                    {activeGlossaryTerm.term} (
                    {activeGlossaryTerm.transcription})
                  </span>

                  <span className="text-[#9a8f80] uppercase">
                    {activeGlossaryTerm.language}
                  </span>
                </div>

                <div className="font-serif text-base text-[#ede4d3]">
                  {activeGlossaryTerm.meaning}
                </div>

                <div className="text-xs font-sans text-[#b5cad3]/80 leading-relaxed pt-2 border-t border-[#9e7d3b]/15 font-light">
                  <strong>Historical Occurrence:</strong>{' '}
                  {activeGlossaryTerm.context}
                </div>
              </div>
            )}

            {/* Academic Citation */}
            <div className="border border-[#9e7d3b]/20 bg-[#0c1420] p-4 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <span className="text-xs font-sans tracking-widest uppercase text-[#e9c176]">
                  Academic Citation (Cœdès 1918)
                </span>

                <button
                  onClick={copyCitation}
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-sans text-[#e9c176] hover:text-white transition-colors"
                >
                  {citationCopied ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}

                  <span>
                    {citationCopied ? 'Copied' : 'Copy Citation'}
                  </span>
                </button>
              </div>

              <p className="font-serif italic text-xs text-[#dbe3f4]/80 break-words">
                &ldquo;Cœdès, George. 1918. Le Royaume de Çrīvijaya.
                Bulletin de l&apos;École française d&apos;Extrême-Orient
                18 (6): 1–36.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Curatorial Colophon & Footer */}
        <div className="mt-20 pt-8 border-t border-[#9e7d3b]/25 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-[#9a8f80] gap-4">
          <div className="flex items-center gap-2 text-[#ede4d3]">
            <span className="font-serif font-semibold tracking-wider text-[#e9c176]">
              RULERS OF SRIVIJAYA
            </span>

            <span aria-hidden="true">·</span>

            <span>Digital Epigraphic Museum & Research Archive</span>
          </div>

          <div className="text-[11px] text-center md:text-right">
            Based on primary epigraphy (Kedukan Bukit, Talang Tuo,
            Kota Kapur, Telaga Batu, Ligor, Nalanda, Leiden).
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;

