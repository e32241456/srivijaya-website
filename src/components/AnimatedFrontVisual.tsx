import React from 'react';
import { motion } from 'motion/react';

interface AnimatedFrontVisualProps {
  type: 'geography' | 'maritime' | 'knowledge' | 'diplomacy';
}

export const AnimatedFrontVisual: React.FC<AnimatedFrontVisualProps> = ({
  type,
}) => {
  return (
    <div className="absolute inset-0 h-[45%] overflow-hidden pointer-events-none">

      {/* =====================================================
          GEOGRAPHY — COMPASS
      ===================================================== */}

      {type === 'geography' && (
        <div className="absolute inset-0">

          {/* =================================================
              OUTER COMPASS RING
              Tidak berputar, hanya pulse
          ================================================= */}

          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.45, 0.8, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >
             <div className="relative w-28 h-28 rounded-full border-2 border-[#e9c176]/45">
              {/* Inner ring */}
              <div className="absolute inset-3 rounded-full border border-dashed border-[#e9c176]/25" />

              {/* Compass tick marks */}
              <div className="absolute left-1/2 top-1 w-px h-3 bg-[#e9c176]/60 -translate-x-1/2" />

              <div className="absolute left-1/2 bottom-1 w-px h-3 bg-[#e9c176]/60 -translate-x-1/2" />

              <div className="absolute left-1 top-1/2 w-3 h-px bg-[#e9c176]/60 -translate-y-1/2" />

              <div className="absolute right-1 top-1/2 w-3 h-px bg-[#e9c176]/60 -translate-y-1/2" />

            </div>
          </motion.div>


          {/* =================================================
              COMPASS NEEDLE
              HANYA JARUM YANG BERPUTAR
          ================================================= */}

          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 w-36 h-36 -translate-x-1/2 -translate-y-1/2"
          >

            {/* Needle */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              {/* North needle */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  bottom: 0,
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderBottom: '58px solid rgba(233,193,118,0.9)',
                }}
              />

              {/* South needle */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: 0,
                  transform: 'translateX(-50%)',
                  width: 0,
                  height: 0,
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: '58px solid rgba(233,193,118,0.25)',
                }}
              />

            </div>

          </motion.div>


          {/* =================================================
              CENTER PIN
              Tetap diam
          ================================================= */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-[#e9c176] bg-[#141c28] z-20">
            <div className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-[#e9c176] -translate-x-1/2 -translate-y-1/2" />
          </div>


          {/* =================================================
              DIRECTION LABELS
              Tetap diam
          ================================================= */}

          <span className="absolute left-1/2 top-[calc(50%-90px)] -translate-x-1/2 text-[10px] font-serif text-[#e9c176]">
            N
          </span>

          <span className="absolute left-[calc(50%+90px)] top-1/2 -translate-y-1/2 text-[10px] font-serif text-[#e9c176]">
            E
          </span>

          <span className="absolute left-1/2 top-[calc(50%+82px)] -translate-x-1/2 text-[10px] font-serif text-[#e9c176]">
            S
          </span>

          <span className="absolute left-[calc(50%-90px)] top-1/2 -translate-y-1/2 text-[10px] font-serif text-[#e9c176]">
            W
          </span>


          {/* =================================================
              FLOATING LOCATION POINTS
          ================================================= */}

          <motion.div
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-[18%] top-[28%]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#e9c176]" />
          </motion.div>

          <motion.div
            animate={{
              opacity: [1, 0.3, 1],
              scale: [1.2, 0.8, 1.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-[18%] top-[30%]"
          >
            <div className="w-2 h-2 rounded-full bg-[#e9c176]" />
          </motion.div>

        </div>
      )}


      {/* =====================================================
          MARITIME — SHIP
      ===================================================== */}

      {type === 'maritime' && (
        <div className="absolute inset-0">

          {/* Ship movement */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
              rotate: [-1.5, 1.5, -1.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-[12%] -translate-x-1/2"
          >

            <svg
              width="190"
              height="120"
              viewBox="0 0 190 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* Main mast */}
              <line
                x1="95"
                y1="12"
                x2="95"
                y2="82"
                stroke="#E9C176"
                strokeWidth="2"
              />

              {/* Main sail */}
              <motion.path
                d="M98 18 L98 65 L145 65 Z"
                fill="rgba(233,193,118,0.22)"
                stroke="#E9C176"
                strokeOpacity="0.7"
                strokeWidth="1.5"
                animate={{
                  opacity: [0.65, 1, 0.65],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Sail lines */}
              <line
                x1="98"
                y1="28"
                x2="130"
                y2="64"
                stroke="#E9C176"
                strokeOpacity="0.25"
              />

              <line
                x1="98"
                y1="42"
                x2="130"
                y2="64"
                stroke="#E9C176"
                strokeOpacity="0.2"
              />

              {/* Front sail */}
              <path
                d="M91 28 L91 65 L58 65 Z"
                fill="rgba(233,193,118,0.12)"
                stroke="#E9C176"
                strokeOpacity="0.55"
                strokeWidth="1.5"
              />

              {/* Flag */}
              <path
                d="M97 12 L122 18 L97 24 Z"
                fill="#E9C176"
                fillOpacity="0.8"
              />

              {/* Ship hull */}
              <path
                d="M32 72
                   Q95 88 158 72
                   L143 96
                   Q95 108 47 96
                   Z"
                fill="rgba(233,193,118,0.10)"
                stroke="#E9C176"
                strokeOpacity="0.85"
                strokeWidth="2"
              />

              {/* Hull upper line */}
              <path
                d="M32 72 Q95 84 158 72"
                stroke="#E9C176"
                strokeOpacity="0.7"
                strokeWidth="2"
              />

              {/* Hull detail */}
              <path
                d="M58 88 Q95 96 132 88"
                stroke="#E9C176"
                strokeOpacity="0.25"
                strokeWidth="1"
              />

              {/* Bow */}
              <path
                d="M158 72 L169 68 L158 83"
                stroke="#E9C176"
                strokeOpacity="0.8"
                strokeWidth="2"
                fill="none"
              />

              {/* Water */}
              <motion.path
                d="M15 105 Q35 98 55 105 T95 105 T135 105 T175 105"
                stroke="#E9C176"
                strokeOpacity="0.4"
                strokeWidth="2"
                fill="none"
                animate={{
                  d: [
                    'M15 105 Q35 98 55 105 T95 105 T135 105 T175 105',
                    'M15 105 Q35 111 55 105 T95 105 T135 105 T175 105',
                    'M15 105 Q35 98 55 105 T95 105 T135 105 T175 105',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.path
                d="M30 113 Q55 107 80 113 T130 113 T170 113"
                stroke="#E9C176"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                fill="none"
                animate={{
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

            </svg>

          </motion.div>

          {/* Moving light across water */}
          <motion.div
            animate={{
              x: ['-100%', '400%'],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-[76%] left-0 w-2 h-2 rounded-full bg-[#e9c176]"
          />

        </div>
      )}


      {/* =====================================================
          KNOWLEDGE — OPEN BOOK
      ===================================================== */}

      {type === 'knowledge' && (
        <div className="absolute inset-0">

          {/* Halo */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-dashed border-[#e9c176]/25"
          />

          {/* Book */}
          <motion.div
            animate={{
              y: [-4, 4, -4],
              rotate: [-1, 1, -1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          >

            <svg
              width="130"
              height="90"
              viewBox="0 0 130 90"
              fill="none"
            >

              {/* Left page */}
              <path
                d="M65 20
                   Q42 10 12 18
                   L18 70
                   Q42 62 65 72
                   Z"
                fill="rgba(233,193,118,0.08)"
                stroke="#E9C176"
                strokeOpacity="0.65"
              />

              {/* Right page */}
              <path
                d="M65 20
                   Q88 10 118 18
                   L112 70
                   Q88 62 65 72
                   Z"
                fill="rgba(233,193,118,0.08)"
                stroke="#E9C176"
                strokeOpacity="0.65"
              />

              {/* Spine */}
              <line
                x1="65"
                y1="20"
                x2="65"
                y2="72"
                stroke="#E9C176"
                strokeWidth="2"
              />

              {/* Text lines */}
              <path
                d="M25 32 Q43 28 57 34"
                stroke="#E9C176"
                strokeOpacity="0.3"
              />

              <path
                d="M23 42 Q42 38 57 44"
                stroke="#E9C176"
                strokeOpacity="0.25"
              />

              <path
                d="M73 34 Q88 28 105 32"
                stroke="#E9C176"
                strokeOpacity="0.3"
              />

              <path
                d="M73 44 Q90 38 107 42"
                stroke="#E9C176"
                strokeOpacity="0.25"
              />

            </svg>

          </motion.div>

        </div>
      )}


      {/* =====================================================
          DIPLOMACY — CONNECTIONS
      ===================================================== */}

      {type === 'diplomacy' && (
        <div className="absolute inset-0">

          <svg
            viewBox="0 0 400 180"
            className="absolute inset-0 w-full h-full"
          >

            {/* Connections */}
            <motion.path
              d="M70 45 Q135 45 200 90"
              fill="none"
              stroke="#E9C176"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.path
              d="M330 45 Q265 45 200 90"
              fill="none"
              stroke="#E9C176"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              animate={{
                strokeDashoffset: [0, -40],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

            <motion.path
              d="M200 90 Q200 120 200 150"
              fill="none"
              stroke="#E9C176"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              animate={{
                strokeDashoffset: [0, -30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />

          </svg>

          {/* Central power */}
          <motion.div
            animate={{
              scale: [0.9, 1.15, 0.9],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-[#e9c176]/65 bg-[#141c28] flex items-center justify-center"
          >
            <div className="w-5 h-5 rounded-full bg-[#e9c176]/80" />
          </motion.div>

          {/* Left node */}
          <motion.div
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-[13%] top-[17%]"
          >
            <div className="w-12 h-12 rounded-full border border-[#e9c176]/55 flex items-center justify-center">
              <div className="w-4 h-4 rotate-45 border border-[#e9c176]/70" />
            </div>
          </motion.div>

          {/* Right node */}
          <motion.div
            animate={{
              y: [5, -5, 5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute right-[13%] top-[17%]"
          >
            <div className="w-12 h-12 rounded-full border border-[#e9c176]/55 flex items-center justify-center">
              <div className="w-4 h-4 rotate-45 border border-[#e9c176]/70" />
            </div>
          </motion.div>

          {/* Bottom node */}
          <motion.div
            animate={{
              x: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 bottom-[2%] -translate-x-1/2"
          >
            <div className="w-11 h-11 rounded-full border border-[#e9c176]/45 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#e9c176]/70" />
            </div>
          </motion.div>

        </div>
      )}

    </div>
  );
};