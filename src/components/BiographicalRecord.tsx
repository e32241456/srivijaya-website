import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bookmark } from 'lucide-react';
import dapuntaImg from '../assets/images/dapunta_hyang_relic_1791336922702.jpg';

export const BiographicalRecord: React.FC = () => {
  // =========================================================
  // TRANSLATION TAB
  // =========================================================

  const [activeTab, setActiveTab] = useState<
    'translation-en' | 'translation-id'
  >('translation-en');

  // =========================================================
  // SELECTED EPIGRAPHIC WORD
  // =========================================================

  const [selectedWord, setSelectedWord] = useState<string | null>(
    'siddhayātra'
  );

  // =========================================================
  // EPIGRAPHIC WORD BREAKDOWN
  // =========================================================

  const wordsBreakdown: Record<
    string,
    {
      term: string;
      meaning: string;
      notes: string;
    }
  > = {
    siddhayātra: {
      term: 'Siddhayātra (Sanskrit)',
      meaning:
        'A sacred spiritual expedition undertaken to acquire supernatural potency, divine authority, and victorious statehood.',
      notes:
        'Not merely a military campaign, but a ritually consecrated conquest uniting naval prowess with tantric Buddhist merit.',
    },

    sāmvau: {
      term: 'Sāmvau (Old Malay)',
      meaning:
        'Large ocean-going vessel or royal outrigger war galley.',
      notes:
        'Signifies Srivijaya’s mastery over naval engineering, enabling 200+ ships to navigate river estuaries and stormy straits.',
    },

    koṭa: {
      term: 'Koṭa / Wanua (Old Malay / Sanskrit root)',
      meaning:
        'Fortified urban citadel or imperial capital settlement.',
      notes:
        'Refers to the newly consecrated royal capital established at the confluence of the Tatang and Musi rivers (Palembang).',
    },

    'dapunta hiyaṁ': {
      term: 'Dapunta Hiyang (Old Malay honorific)',
      meaning:
        'The Sacred Lord / Respected Divine Sovereign.',
      notes:
        'An indigenous Austronesian title of supreme sacral dignity, later fused with Sanskrit imperial epithets like Sri Maharaja.',
    },

    subhikṣa: {
      term: 'Subhikṣa (Sanskrit)',
      meaning:
        'Abundant prosperity, universal flourishing, and fertile peace.',
      notes:
        'The ultimate royal declaration of the inscription: that the triumph of Srivijaya bestows material and spiritual plenty on all.',
    },
  };

  return (
    <section
      id="biographical-record"
      className="py-24 border-b border-[#9e7d3b]/20 bg-[#070e1a] relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-12">

        {/* =========================================================
            SECTION SPECIMEN LABEL
        ========================================================= */}

        <div className="flex items-center justify-between border-b border-[#9e7d3b]/20 pb-3 mb-10 text-xs font-sans tracking-widest uppercase text-[#9e7d3b]">

          <div className="flex items-center gap-2">

            <span className="text-[#e9c176]">
              BIOGRAPHICAL SPECIMEN BIO-01
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              FOUNDING SOVEREIGN RECORD
            </span>

          </div>

          <span className="text-[#d1c5b4]/60 tabular-nums">
            REIGN: C. 671 – 692 CE
          </span>

        </div>


        {/* =========================================================
            SECTION HEADER
            CINEMATIC SCROLL REVEAL
        ========================================================= */}

        <div className="mb-12 max-w-3xl">

          {/* -------------------------------------------------------
              LAYER 1 — LABEL
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >

            <p className="text-xs font-sans tracking-[0.2em] uppercase text-[#e9c176] mb-2">
              First Sovereign & Architect of the Thalassocracy
            </p>

          </motion.div>


          {/* -------------------------------------------------------
              LAYER 2 — TITLE
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 45,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >

            <h2 className="font-serif text-3xl md:text-5xl text-[#ede4d3] [text-wrap:balance]">
              Dapunta Hyang Sri Jayanasa
            </h2>

          </motion.div>


          {/* -------------------------------------------------------
              LAYER 3 — DESCRIPTION
          ------------------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.3,
              delay: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >

            <p className="font-serif italic text-lg text-[#b5cad3]/80 mt-2">
              The Siddhayatra sacred voyage, the foundation of Palembang,
              and the birth of maritime sovereignty.
            </p>

          </motion.div>

        </div>


        {/* =========================================================
            12-COLUMN EDITORIAL GRID
        ========================================================= */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">


          {/* =======================================================
              LEFT COLUMN
              SOVEREIGN RELIC PRESENTATION
          ======================================================= */}

          <div className="lg:col-span-5 space-y-6">


            {/* -----------------------------------------------------
                PORTRAIT / RELIC CARD
            ----------------------------------------------------- */}

            <div className="border border-[#9e7d3b]/30 bg-[#0f232a] p-3 relative">


              {/* Corner Chamfers */}

              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#e9c176]" />

              <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#e9c176]" />

              <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#e9c176]" />

              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#e9c176]" />


              {/* -------------------------------------------------
                  IMAGE
              ------------------------------------------------- */}

              <div className="relative aspect-[3/4] bg-[#070e1a] overflow-hidden">

                <motion.img
                  src={dapuntaImg}
                  alt="Fine art museum portrayal of Dapunta Hyang Sri Jayanasa in royal regalia"
                  referrerPolicy="no-referrer"

                  initial={{
                    opacity: 0,
                    scale: 1.1,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  viewport={{
                    once: false,
                    amount: 0.25,
                  }}

                  className="w-full h-full object-cover object-top filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
                />


                {/* Image Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1420] via-transparent to-transparent opacity-70 pointer-events-none" />


                {/* -------------------------------------------------
                    IMAGE CAPTION
                ------------------------------------------------- */}

                <div className="absolute bottom-3 left-3 right-3 p-3 bg-[#0c1420]/90 backdrop-blur-sm border border-[#9e7d3b]/30">

                  <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176]">
                    IMPERIAL CORONATION ICONOGRAPHY
                  </div>

                  <div className="font-serif text-sm text-[#ede4d3] mt-0.5">
                    Śrī Mahārāja Dapunta Hiyang Śrī Jayanāśa
                  </div>

                </div>

              </div>


              {/* ---------------------------------------------------
                  ARCHIVAL METADATA
              --------------------------------------------------- */}

              <dl className="mt-4 divide-y divide-[#9e7d3b]/15 text-xs font-sans">


                <div className="py-2 flex justify-between">

                  <dt className="text-[#9a8f80]">
                    Regnal Dynasty
                  </dt>

                  <dd className="text-[#ede4d3] font-medium">
                    Jayanasa Royal House
                  </dd>

                </div>


                <div className="py-2 flex justify-between">

                  <dt className="text-[#9a8f80]">
                    Capital Seat
                  </dt>

                  <dd className="text-[#ede4d3] font-medium">
                    Palembang (Musi Estuary)
                  </dd>

                </div>


                <div className="py-2 flex justify-between">

                  <dt className="text-[#9a8f80]">
                    Key Expedition
                  </dt>

                  <dd className="text-[#e9c176] font-medium">
                    Siddhayatra (683 CE)
                  </dd>

                </div>


                <div className="py-2 flex justify-between">

                  <dt className="text-[#9a8f80]">
                    Epigraphic Record
                  </dt>

                  <dd className="text-[#ede4d3]">
                    Kedukan Bukit & Talang Tuo
                  </dd>

                </div>

              </dl>

            </div>


            {/* -----------------------------------------------------
                TALANG TUO CARD
            ----------------------------------------------------- */}

            <div className="border border-[#9e7d3b]/20 bg-[#18202c] p-5 space-y-3">

              <div className="flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#e9c176]">

                <Bookmark className="w-3.5 h-3.5 text-[#e9c176]" />

                <span>
                  The Talang Tuo Charter (684 CE)
                </span>

              </div>


              <h3 className="font-serif text-base text-[#ede4d3]">
                The Sri Ksetra Public Garden for All Beings
              </h3>


              <p className="text-xs text-[#b5cad3]/80 leading-relaxed font-sans font-light">
                One year following his conquest, Dapunta Hyang consecrated a
                vast botanical park planted with coconut, betel-nut, and sagu
                palms, dedicating all yields so that travelers, the
                impoverished, and wild beasts would never suffer hunger.
              </p>

            </div>

          </div>


          {/* =======================================================
              RIGHT COLUMN
              KEDUKAN BUKIT STELA
          ======================================================= */}

          <div className="lg:col-span-7 space-y-6">


            <div className="border border-[#9e7d3b]/30 bg-[#141c28] p-6 lg:p-8">


              {/* ---------------------------------------------------
                  FOLIO HEADER
              --------------------------------------------------- */}

              <div className="flex flex-wrap items-center justify-between border-b border-[#9e7d3b]/25 pb-4 mb-6 gap-3">

                <div>

                  <span className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176]">
                    PRIMARY EPIGRAPHIC FOLIO
                  </span>

                  <h3 className="font-serif text-xl md:text-2xl text-[#ede4d3]">
                    Prasasti Kedukan Bukit (23 April 683 CE)
                  </h3>

                </div>


                {/* -------------------------------------------------
                    TRANSLATION MODE TABS
                    ONLY ENGLISH + BAHASA
                ------------------------------------------------- */}

                <div className="flex items-center border border-[#9e7d3b]/40 p-0.5 bg-[#0c1420]">

                  {/* ENGLISH */}

                  <button
                    onClick={() => setActiveTab('translation-en')}
                    type="button"
                    className={`px-3 py-1 text-xs font-sans tracking-wider uppercase transition-colors ${
                      activeTab === 'translation-en'
                        ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                        : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
                    }`}
                  >
                    English
                  </button>


                  {/* BAHASA */}

                  <button
                    onClick={() => setActiveTab('translation-id')}
                    type="button"
                    className={`px-3 py-1 text-xs font-sans tracking-wider uppercase transition-colors ${
                      activeTab === 'translation-id'
                        ? 'bg-[#c5a059] text-[#1a1412] font-semibold'
                        : 'text-[#dbe3f4]/75 hover:text-[#ede4d3]'
                    }`}
                  >
                    Bahasa
                  </button>

                </div>

              </div>


              {/* ===================================================
                  INSCRIPTION CONTENT
                  FIXED / STABLE HEIGHT
              =================================================== */}

              <div className="bg-[#070e1a] border border-[#9e7d3b]/20 p-5 rounded-none font-serif text-sm md:text-base leading-relaxed min-h-[340px]">

                <AnimatePresence mode="wait">

                  {/* -------------------------------------------------
                      ENGLISH
                  ------------------------------------------------- */}

                  {activeTab === 'translation-en' && (

                    <motion.div
                      key="english"
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <p className="text-xs font-sans tracking-widest text-[#9e7d3b] uppercase not-italic mb-5">
                        Scholarly English Translation (Prof. G. Cœdès &
                        J.G. de Casparis)
                      </p>


                      <p className="mb-5">
                        &ldquo;Prosperity! Fortune! In the Saka year 605,
                        on the eleventh day of the waxing moon of the month
                        of Vaisakha [23 April 683 CE], His Sacred Majesty
                        boarded his vessel to embark on the sacred journey
                        for victory (Siddhayatra).&rdquo;
                      </p>


                      <p className="mb-5">
                        &ldquo;On the seventh day of the waxing moon of
                        Jyestha, His Sacred Majesty set forth from Minanga
                        Tamwan. He brought an army of twenty thousand men,
                        with two hundred vessels, while thirteen hundred and
                        twelve men marched on foot, arriving at Mukha
                        Upang.&rdquo;
                      </p>


                      <p>
                        &ldquo;With joyful heart on the fifth day of the
                        waning moon of Asadha, filled with mirth, he came to
                        found the city... May Srivijaya be victorious,
                        successful in her sacred expedition, and blessed
                        with abundant prosperity!&rdquo;
                      </p>

                    </motion.div>

                  )}


                  {/* -------------------------------------------------
                      BAHASA INDONESIA
                  ------------------------------------------------- */}

                  {activeTab === 'translation-id' && (

                    <motion.div
                      key="bahasa"
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >

                      <p className="text-xs font-sans tracking-widest text-[#9e7d3b] uppercase not-italic mb-5">
                        Terjemahan Bahasa Indonesia (Kajian Epigrafi
                        Nasional)
                      </p>


                      <p className="mb-5">
                        &ldquo;Selamat dan bahagia! Tahun Saka 605, hari
                        ke-11 bulan terang Vaisakha [23 April 683 M],
                        Dapunta Hyang naik perahu untuk mengambil siddhayatra
                        [perjalanan suci mencari kemenangan].&rdquo;
                      </p>


                      <p className="mb-5">
                        &ldquo;Pada hari ke-7 bulan terang Jyestha, Dapunta
                        Hyang berangkat dari Minanga Tamwan membawa bala
                        tentara sebanyak 20.000 orang, dengan 200 perahu
                        serta 1.312 orang berjalan kaki, lalu tiba di Mukha
                        Upang.&rdquo;
                      </p>


                      <p>
                        &ldquo;Dengan sukacita pada hari ke-5 bulan gelap
                        Asadha, datanglah membuat perkampungan/benteng
                        kota... Sriwijaya jaya, siddhayatra tercapai, makmur
                        dan sentosa!&rdquo;
                      </p>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>


              {/* ===================================================
                  INTERACTIVE EPIGRAPHIC WORD ANALYSIS
              =================================================== */}

              {selectedWord && wordsBreakdown[selectedWord] && (

                <div className="mt-6 border-t border-[#9e7d3b]/25 pt-5">

                  <div className="text-[11px] font-sans tracking-widest uppercase text-[#e9c176] mb-1">
                    SELECTED EPIGRAPHIC TERM ANALYSIS
                  </div>


                  <div className="font-serif text-lg text-[#ede4d3]">
                    {wordsBreakdown[selectedWord].term}
                  </div>


                  <p className="text-xs text-[#b5cad3] mt-1 font-sans">

                    <strong>
                      Philological Meaning:
                    </strong>{' '}

                    {wordsBreakdown[selectedWord].meaning}

                  </p>


                  <p className="text-xs text-[#9a8f80] mt-1 font-sans">

                    <strong>
                      Historical Context:
                    </strong>{' '}

                    {wordsBreakdown[selectedWord].notes}

                  </p>

                </div>

              )}


              {/* ===================================================
                  HISTORICAL SIGNIFICANCE
              =================================================== */}

              <div className="mt-6 border border-[#9e7d3b]/20 bg-[#0c1420] p-4 text-xs font-sans leading-relaxed text-[#b5cad3]/90">

                <span className="font-semibold text-[#e9c176] block mb-1">
                  HISTORICAL SIGNIFICANCE OF THE REIGN:
                </span>

                Dapunta Hyang’s genius lay in synthesizing indigenous
                Austronesian maritime chieftainship with Indian tantric
                Buddhist cosmology. Rather than relying solely on raw
                coercion, he bound riverine lords into a covenant of mutual
                prosperity, establishing Srivijaya as both a mercantile
                haven and an unassailable naval citadel.

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};