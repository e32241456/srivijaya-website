import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import { RULERS_DATA } from '../data/srivijayaData';

export const ExploreRulersSection: React.FC = () => {
  const [selectedDynasty, setSelectedDynasty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeRuler, setActiveRuler] = useState<string | null>(null);

  const dynasties = [
    'All',
    'Jayanasa',
    'Shailendra',
    'Cudamani',
    'Late Era',
  ];

  const filteredRulers = useMemo(() => {
    return RULERS_DATA.filter((ruler) => {
      const matchesDynasty =
        selectedDynasty === 'All' ||
        ruler.dynasty === selectedDynasty;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        ruler.name.toLowerCase().includes(query) ||
        ruler.fullTitle.toLowerCase().includes(query) ||
        ruler.significance.toLowerCase().includes(query) ||
        ruler.narrative.toLowerCase().includes(query) ||
        ruler.inscriptions.some((inscription) =>
          inscription.toLowerCase().includes(query)
        ) ||
        ruler.primarySources.some((source) =>
          source.toLowerCase().includes(query)
        );

      return matchesDynasty && matchesSearch;
    });
  }, [selectedDynasty, searchQuery]);

  const handleRulerClick = (rulerId: string) => {
    setActiveRuler((current) =>
      current === rulerId ? null : rulerId
    );
  };

  const handleDynastyChange = (dynasty: string) => {
    setSelectedDynasty(dynasty);
    setActiveRuler(null);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
    setActiveRuler(null);
  };

  return (
    <section
      id="explore-rulers"
      className="relative bg-[#0b111a] py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9e7d3b]/30 to-transparent" />

        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#9e7d3b]/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#29465b]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* SECTION HEADER */}
        <div className="mb-14 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-[#e9c176]" />

            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#9e7d3b] font-sans">
              Historical Figures
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#e8dfd2] leading-tight max-w-4xl">
            Rulers of
            <span className="block italic text-[#e9c176]">
              Srivijaya
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm md:text-base leading-relaxed text-[#9a8f80] font-sans">
            Explore the rulers who shaped Srivijaya through
            maritime expansion, political alliances, religious
            patronage, and control of strategic trade routes.
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-10 md:mb-12">
          <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <Search
                size={17}
                strokeWidth={1.5}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9e7d3b]"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search rulers, inscriptions, sources..."
                className="w-full bg-[#111925] border border-[#9e7d3b]/25 px-11 py-3.5 text-sm text-[#d1c5b4] placeholder:text-[#6e665b] outline-none transition-all duration-300 focus:border-[#e9c176]/60 focus:bg-[#141d29]"
              />
            </div>

            {/* Dynasty Filter */}
            <div className="flex flex-wrap gap-2">
              {dynasties.map((dynasty) => {
                const isSelected = selectedDynasty === dynasty;

                return (
                  <button
                    key={dynasty}
                    type="button"
                    onClick={() => handleDynastyChange(dynasty)}
                    className={`px-4 py-2.5 text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans border transition-all duration-300 ${
                      isSelected
                        ? 'border-[#e9c176]/70 bg-[#e9c176]/10 text-[#e9c176]'
                        : 'border-[#9e7d3b]/20 bg-[#111925] text-[#8f877b] hover:border-[#e9c176]/50 hover:text-[#d1c5b4]'
                    }`}
                  >
                    {dynasty}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RESULT COUNT */}
        <div className="flex items-center justify-between mb-5">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#6f685e] font-sans">
            {filteredRulers.length} Historical Figure
            {filteredRulers.length !== 1 ? 's' : ''}
          </p>

          <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-[#6f685e] font-sans">
            Select a ruler to explore
          </div>
        </div>

        {/* RULER LIST */}
        <div className="space-y-3">
          {filteredRulers.map((ruler, index) => {
            const isActive = activeRuler === ruler.id;

            return (
              <article
                key={ruler.id}
                className={`border overflow-hidden transition-all duration-500 ${
                  isActive
                    ? 'border-[#e9c176]/60 bg-[#101d29] -translate-y-1 shadow-[0_10px_30px_rgba(233,193,118,0.10)]'
                    : 'border-[#9e7d3b]/25 bg-[#141c28] hover:border-[#e9c176]/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(233,193,118,0.12)]'
                }`}
              >
                {/* RULER HEADER */}
                <button
                  type="button"
                  onClick={() => handleRulerClick(ruler.id)}
                  className={`w-full px-5 md:px-7 py-5 md:py-6 flex items-center gap-4 md:gap-8 text-left transition-all duration-300 ${
                    isActive
                      ? 'bg-[#101d29]'
                      : 'hover:bg-[#18202c]'
                  }`}
                >
                  {/* Number */}
                  <div className="hidden sm:flex w-12 md:w-16 shrink-0 items-center">
                    <span className="text-[10px] md:text-xs tracking-[0.15em] text-[#9e7d3b] font-sans">
                      RUL-{String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Ruler Name */}
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-serif text-xl md:text-2xl lg:text-3xl transition-colors duration-300 ${
                        isActive
                          ? 'text-[#e9c176]'
                          : 'text-[#d8d0c5]'
                      }`}
                    >
                      {ruler.name}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#9e7d3b] font-sans">
                        {ruler.dynasty}
                      </span>

                      <span className="w-1 h-1 rounded-full bg-[#6f6659]" />

                      <span className="text-xs md:text-sm text-[#827a6e] font-sans">
                        {ruler.reignPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Plus / Minus */}
                  <div
                    className={`shrink-0 w-9 h-9 md:w-10 md:h-10 border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'border-[#e9c176]/60 text-[#e9c176] bg-[#e9c176]/5'
                        : 'border-[#9e7d3b]/30 text-[#9e7d3b]'
                    }`}
                  >
                    {isActive ? (
                      <Minus size={16} strokeWidth={1.5} />
                    ) : (
                      <Plus size={16} strokeWidth={1.5} />
                    )}
                  </div>
                </button>

                {/* EXPANDED CONTENT */}
                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-7 pb-8 md:pb-10">
                      {/* Divider */}
                      <div className="h-px bg-[#9e7d3b]/20 mb-8" />

                      <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-14">
                        {/* MAIN CONTENT */}
                        <div>
                          {/* Full Title */}
                          <div className="mb-8">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Full Title
                            </p>

                            <p className="font-serif text-lg md:text-xl italic text-[#e9c176]/90 leading-relaxed">
                              {ruler.fullTitle}
                            </p>
                          </div>

                          {/* Historical Significance */}
                          <div className="mb-7">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Historical Significance
                            </p>

                            <p className="font-serif text-base md:text-lg leading-relaxed text-[#d1c5b4]/90 max-w-3xl">
                              {ruler.significance}
                            </p>
                          </div>

                          {/* Historical Narrative */}
                          <div className="mb-7">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Historical Narrative
                            </p>

                            <p className="font-serif text-base md:text-lg leading-relaxed text-[#d1c5b4]/90 max-w-3xl">
                              {ruler.narrative}
                            </p>
                          </div>

                          {/* Major Achievements */}
                          <div className="mb-7">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Major Achievements
                            </p>

                            <ul className="space-y-3">
                              {ruler.achievements.map(
                                (achievement, achievementIndex) => (
                                  <li
                                    key={`${ruler.id}-achievement-${achievementIndex}`}
                                    className="flex gap-3 text-sm md:text-base leading-relaxed text-[#d1c5b4]/90 font-sans"
                                  >
                                    <span className="text-[#e9c176] mt-1 shrink-0">
                                      ◆
                                    </span>

                                    <span>{achievement}</span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Primary Inscriptions */}
                          <div className="mb-7">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Primary Inscriptions
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {ruler.inscriptions.map(
                                (inscription, inscriptionIndex) => (
                                  <span
                                    key={`${ruler.id}-inscription-${inscriptionIndex}`}
                                    className="px-3 py-1.5 border border-[#9e7d3b]/30 bg-[#0c1420] text-xs md:text-sm text-[#d1c5b4] font-sans"
                                  >
                                    {inscription}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          {/* Primary Sources */}
                          <div className="mt-7">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                              Primary Sources
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {ruler.primarySources.map(
                                (source, sourceIndex) => (
                                  <span
                                    key={`${ruler.id}-source-${sourceIndex}`}
                                    className="px-3 py-1.5 border border-[#9e7d3b]/30 bg-[#0c1420] text-xs md:text-sm text-[#d1c5b4] font-sans"
                                  >
                                    {source}
                                  </span>
                                )
                              )}
                            </div>
                          </div>

                          {/* Optional Quote */}
                          {ruler.quote && (
                            <div className="mt-8 pt-6 border-t border-[#9e7d3b]/20">
                              <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-3">
                                Historical Record
                              </p>

                              <blockquote className="font-serif italic text-lg md:text-xl leading-relaxed text-[#e9c176]/90">
                                “{ruler.quote}”
                              </blockquote>

                              {ruler.quoteAuthor && (
                                <p className="mt-3 text-xs text-[#9a8f80] font-sans">
                                  — {ruler.quoteAuthor}
                                </p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* SIDE METADATA */}
                        <aside>
                          <div className="border border-[#9e7d3b]/20 bg-[#0d1520] p-5 md:p-6">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#9e7d3b] font-sans mb-5">
                              Historical Record
                            </p>

                            <div className="space-y-5">
                              {/* Reign */}
                              <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#6f685e] font-sans mb-1.5">
                                  Reign
                                </p>

                                <p className="text-sm text-[#d1c5b4] font-sans">
                                  {ruler.reignPeriod}
                                </p>
                              </div>

                              {/* Dynasty */}
                              <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#6f685e] font-sans mb-1.5">
                                  Dynasty
                                </p>

                                <p className="text-sm text-[#d1c5b4] font-sans">
                                  {ruler.dynasty}
                                </p>
                              </div>

                              {/* Seat */}
                              <div>
                                <p className="text-[9px] uppercase tracking-[0.18em] text-[#6f685e] font-sans mb-1.5">
                                  Seat of Power
                                </p>

                                <p className="text-sm leading-relaxed text-[#d1c5b4] font-sans">
                                  {ruler.seat}
                                </p>
                              </div>
                            </div>
                          </div>
                        </aside>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredRulers.length === 0 && (
          <div className="border border-[#9e7d3b]/20 bg-[#111925] px-6 py-16 text-center">
            <p className="font-serif text-xl text-[#d1c5b4] mb-2">
              No rulers found
            </p>

            <p className="text-sm text-[#7d756a] font-sans">
              Try another ruler name, inscription, source, or dynasty.
            </p>
          </div>
        )}

        {/* FOOTNOTE */}
        <div className="mt-10 pt-6 border-t border-[#9e7d3b]/15">
          <p className="text-[10px] md:text-xs leading-relaxed text-[#625c53] font-sans max-w-3xl">
            The historical records presented here are drawn from
            inscriptions and other primary historical sources
            associated with the rulers of Srivijaya.
          </p>
        </div>
      </div>
    </section>
  );
};