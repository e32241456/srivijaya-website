import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Compass } from 'lucide-react';
import { ambientSound } from '../utils/audioSynth';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {  const [isAudioActive, setIsAudioActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const active = ambientSound.toggle();
    setIsAudioActive(active);
  };

    const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Dapunta Hyang', href: '#biographical-record' },
    { label: 'The Rise', href: '#introduction' },
    { label: 'Pillars', href: '#pillars-of-power' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Rulers', href: '#explore-rulers' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[#0c1420]/95 backdrop-blur-md border-[#9e7d3b]/30 py-3 shadow-lg shadow-black/40'
          : 'bg-[#0c1420]/75 backdrop-blur-sm border-[#9e7d3b]/15 py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">
        {/* Zone 1: Brand title, single element in display serif */}
        <a
          href="#hero"
          className="font-serif text-lg md:text-xl font-semibold tracking-wide text-[#ede4d3] hover:text-[#e9c176] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e9c176]"
        >
          RULERS OF SRIVIJAYA
        </a>

        {/* Zone 2: Navigation Links (Text with hover underlines, no pills) */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] tracking-wider uppercase font-sans text-[#b5cad3]/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#e9c176] transition-colors relative py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#e9c176] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#e9c176] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions (Single-line controls) */}
        <div className="flex items-center gap-3">
          {/* Ambient Soundscape Toggle */}
          <button
            onClick={handleAudioToggle}
            type="button"
            title={isAudioActive ? 'Mute Maritime Soundscape' : 'Enable Ocean & Temple Soundscape'}
            aria-label="Toggle ambient soundscape"
            className={`flex items-center gap-2 px-3 py-1.5 text-xs tracking-wider uppercase border transition-colors whitespace-nowrap ${
              isAudioActive
                ? 'border-[#e9c176] text-[#e9c176] bg-[#0f232a]'
                : 'border-[#9e7d3b]/40 text-[#dbe3f4]/75 hover:border-[#9e7d3b] hover:text-[#ede4d3]'
            }`}
          >
            {isAudioActive ? (
              <Volume2 className="w-3.5 h-3.5 text-[#e9c176]" />
            ) : (
              <VolumeX className="w-3.5 h-3.5 opacity-60" />
            )}
            <span className="hidden sm:inline">
              {isAudioActive ? 'Sound On' : 'Soundscape'}
            </span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 text-[#dbe3f4] border border-[#9e7d3b]/40 hover:border-[#e9c176]"
          >
            <Compass className="w-4 h-4 text-[#e9c176]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1420] border-b border-[#9e7d3b]/40 px-6 py-4 flex flex-col gap-3 mt-2 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs tracking-widest uppercase text-[#dbe3f4]/90 hover:text-[#e9c176] py-1 border-b border-[#9e7d3b]/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
