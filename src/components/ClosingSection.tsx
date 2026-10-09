import React, { useState, useEffect } from 'react';
import { BookOpen, Copy, Check, MessageSquare, Send, Quote, Sparkles, Compass } from 'lucide-react';
import fleetImg from '../assets/images/srivijaya_maritime_fleet_1791336943442.jpg';
import { GLOSSARY_TERMS } from '../data/srivijayaData';

export const ClosingSection: React.FC = () => {
  const [citationCopied, setCitationCopied] = useState(false);
  const [activeGlossaryTerm, setActiveGlossaryTerm] = useState(GLOSSARY_TERMS[0]);

  // Visitor Guestbook / Reflection Notes State
  const [reflections, setReflections] = useState<Array<{ name: string; note: string; date: string }>>([
    {
      name: 'Dr. Raden Soekmono (In Memoriam)',
      note: 'The discovery that Srivijaya was not merely a local court, but an international maritime thalassocracy, fundamentally redefined Indonesian national identity.',
      date: 'Archival Note · Jakarta'
    },
    {
      name: 'Curator M. Hasan',
      note: 'The Talang Tuo inscription remains one of the earliest environmental conservation charters in human history.',
      date: 'Palembang Museum Study'
    }
  ]);
  const [userName, setUserName] = useState('');
  const [userNote, setUserNote] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('srivijaya_visitor_reflections');
      if (saved) {
        setReflections(JSON.parse(saved));
      }
    } catch {
      // Local storage fallback
    }
  }, []);

  const handleAddReflection = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !userNote.trim()) return;

    const newEntry = {
      name: userName.trim(),
      note: userNote.trim(),
      date: 'Visitor Reflection · ' + new Date().toLocaleDateString('en-GB')
    };

    const updated = [newEntry, ...reflections];
    setReflections(updated);
    setUserName('');
    setUserNote('');
    try {
      localStorage.setItem('srivijaya_visitor_reflections', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const copyCitation = (format: string) => {
    const citations: Record<string, string> = {
      chicago: 'Cœdès, George. 1918. "Le Royaume de Çrīvijaya." Bulletin de l\'École française d\'Extrême-Orient 18 (6): 1–36.',
      apa: 'Cœdès, G. (1918). Le Royaume de Çrīvijaya. Bulletin de l\'École française d\'Extrême-Orient, 18(6), 1–36.',
      mla: 'Cœdès, George. "Le Royaume de Çrīvijaya." Bulletin de l\'École française d\'Extrême-Orient 18.6 (1918): 1–36.'
    };

    navigator.clipboard.writeText(citations[format] || citations.chicago);
    setCitationCopied(true);
    setTimeout(() => setCitationCopied(false), 2000);
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
            <span className="text-[#e9c176]">EPILOGUE FOLIO EPI-08</span>
            <span aria-hidden="true">·</span>
            <span>HISTORIOGRAPHICAL REDISCOVERY & HERITAGE</span>
          </div>
          <span className="text-[#d1c5b4]/60 tabular-nums">1918 – CONTEMPORARY ERA</span>
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
            How centuries of historical amnesia were dissolved by a single French epigrapher in 1918.
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
                  For over half a millennium after the fall to Majapahit, Srivijaya was forgotten. European and Javanese histories knew only of Majapahit, while Chinese chronicles recorded a mysterious kingdom called &lsquo;San-fo-tsi&rsquo;.
                </p>
              </div>
              <div className="text-[11px] font-sans text-[#e9c176] bg-[#0c1420]/80 border border-[#9e7d3b]/40 px-3 py-1.5 whitespace-nowrap">
                DECIPHERED BY GEORGE CŒDÈS (1918)
              </div>
            </div>
          </div>
        </div>

        {/* 12-Column Grid: Epigraphic Glossary (6 cols) & Guestbook / Citation (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Epigraphic Philology Glossary (6 cols) */}
          <div className="lg:col-span-6 border border-[#9e7d3b]/30 bg-[#141c28] p-6 lg:p-8 space-y-6">
            <div className="border-b border-[#9e7d3b]/20 pb-3">
              <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>EPIGRAPHIC LEXICON</span>
              </div>
              <h3 className="font-serif text-2xl text-[#ede4d3] mt-1">
                Classical Terminology
              </h3>
              <p className="text-xs font-sans text-[#b5cad3]/75 mt-0.5">
                Key Old Malay and Sanskrit terms inscribed across the imperial stelae.
              </p>
            </div>

            {/* Glossary Pills / Grid */}
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
                  <span className="text-[10px] text-[#9a8f80] block">{item.language}</span>
                </button>
              ))}
            </div>

            {/* Selected Term Detail Display */}
            <div className="bg-[#070e1a] border border-[#9e7d3b]/25 p-5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#e9c176]">
                <span>{activeGlossaryTerm.term} ({activeGlossaryTerm.transcription})</span>
                <span className="text-[#9a8f80] uppercase">{activeGlossaryTerm.language}</span>
              </div>
              <div className="font-serif text-base text-[#ede4d3]">
                {activeGlossaryTerm.meaning}
              </div>
              <div className="text-xs font-sans text-[#b5cad3]/80 leading-relaxed pt-2 border-t border-[#9e7d3b]/15 font-light">
                <strong>Historical Occurrence:</strong> {activeGlossaryTerm.context}
              </div>
            </div>

            {/* Citation Generator Tool */}
            <div className="border border-[#9e7d3b]/20 bg-[#0c1420] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans tracking-widest uppercase text-[#e9c176]">
                  Academic Citation (Cœdès 1918)
                </span>
                <button
                  onClick={() => copyCitation('chicago')}
                  type="button"
                  className="flex items-center gap-1.5 text-xs font-sans text-[#e9c176] hover:text-white"
                >
                  {citationCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{citationCopied ? 'Copied' : 'Copy Citation'}</span>
                </button>
              </div>
              <p className="font-serif italic text-xs text-[#dbe3f4]/80">
                &ldquo;Cœdès, George. 1918. Le Royaume de Çrīvijaya. Bulletin de l&apos;École française d&apos;Extrême-Orient 18 (6): 1–36.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Curatorial Guestbook & Reflections (6 cols) */}
          <div className="lg:col-span-6 border border-[#9e7d3b]/30 bg-[#141c28] p-6 lg:p-8 space-y-6">
            <div className="border-b border-[#9e7d3b]/20 pb-3">
              <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-[#e9c176]" />
                <span>EXHIBITION REFLECTIONS</span>
              </div>
              <h3 className="font-serif text-2xl text-[#ede4d3] mt-1">
                Curatorial Guestbook
              </h3>
              <p className="text-xs font-sans text-[#b5cad3]/75 mt-0.5">
                Leave a scholarly remark or reflection on the thalassocracy.
              </p>
            </div>

            {/* Reflection Submission Form */}
            <form onSubmit={handleAddReflection} className="space-y-3 bg-[#0c1420] p-4 border border-[#9e7d3b]/20">
              <div>
                <label htmlFor="visitor-name" className="text-[11px] font-sans tracking-wider uppercase text-[#9a8f80] block mb-1">
                  Visitor / Scholar Name
                </label>
                <input
                  id="visitor-name"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="e.g. Raden Arya, Student of Archeology"
                  className="w-full px-3 py-1.5 bg-[#070e1a] border border-[#9e7d3b]/40 text-xs text-[#ede4d3] focus:outline-none focus:border-[#e9c176] font-sans"
                  required
                />
              </div>

              <div>
                <label htmlFor="visitor-reflection" className="text-[11px] font-sans tracking-wider uppercase text-[#9a8f80] block mb-1">
                  Historical Reflection Note
                </label>
                <textarea
                  id="visitor-reflection"
                  rows={3}
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Share a reflection regarding Srivijayan naval mastery, epigraphy, or Buddhist philosophy..."
                  className="w-full px-3 py-1.5 bg-[#070e1a] border border-[#9e7d3b]/40 text-xs text-[#ede4d3] focus:outline-none focus:border-[#e9c176] font-sans resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#c5a059] text-[#1a1412] text-xs font-semibold tracking-widest uppercase hover:bg-[#e9c176] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#1a1412]" />
                <span>Inscribe in Archival Register</span>
              </button>
            </form>

            {/* Display Previous Reflections */}
            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
              {reflections.map((r, i) => (
                <div key={i} className="p-3.5 bg-[#070e1a] border border-[#9e7d3b]/15 space-y-1 text-xs font-sans">
                  <div className="flex items-center justify-between text-[#e9c176]">
                    <span className="font-semibold">{r.name}</span>
                    <span className="text-[10px] text-[#9a8f80]">{r.date}</span>
                  </div>
                  <p className="text-[#dbe3f4]/85 leading-relaxed font-light">
                    &ldquo;{r.note}&rdquo;
                  </p>
                </div>
              ))}
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
            Based on primary epigraphy (Kedukan Bukit, Talang Tuo, Kota Kapur, Telaga Batu, Ligor, Nalanda, Leiden).
          </div>
        </div>
      </div>
    </section>
  );
};
