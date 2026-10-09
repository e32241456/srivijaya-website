/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BiographicalRecord } from './components/BiographicalRecord';
import { IntroductionSection } from './components/IntroductionSection';
import PillarsOfPowerSection from './components/PillarsOfPowerSection';import { TimelineSection } from './components/TimelineSection';
import { ExploreRulersSection } from './components/ExploreRulersSection';
import { ClosingSection } from './components/ClosingSection';
import { FolioModal } from './components/FolioModal';
import { Ruler, TimelineEvent } from './data/srivijayaData';

export default function App() {
  const [selectedRuler, setSelectedRuler] = useState<Ruler | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRulerFolio = (ruler: Ruler) => {
    setSelectedRuler(ruler);
    setSelectedEvent(null);
    setIsModalOpen(true);
  };

  const handleOpenEventFolio = (event: TimelineEvent) => {
    setSelectedEvent(event);
    setSelectedRuler(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRuler(null);
    setSelectedEvent(null);
  };

  const handleScrollToRulers = () => {
    const el = document.getElementById('explore-rulers');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1420] text-[#dbe3f4] selection:bg-[#e9c176]/30 selection:text-[#ffdea5]">
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Hero — RULERS OF SRIVIJAYA */}
        <HeroSection onExploreClick={handleScrollToRulers} />

        {/* Section 2: Biographical Record — Dapunta Hyang Sri Jayanasa */}
        <BiographicalRecord />

        {/* Section 3: Introduction — The Rise of Srivijaya */}
        <IntroductionSection />

        {/* Section 4: Pillars of Power */}
        <PillarsOfPowerSection />

        {/* Section 5: Pivotal Moments / Timeline */}
        <TimelineSection onSelectEventDetail={handleOpenEventFolio} />

        {/* Section 6: Explore the Rulers */}
        <ExploreRulersSection onSelectRuler={handleOpenRulerFolio} />

        {/* Section 7: Closing section */}
        <ClosingSection />
      </main>

      {/* Reusable Curatorial Folio Modal */}
      <FolioModal
        ruler={selectedRuler}
        event={selectedEvent}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
