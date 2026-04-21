import React from 'react';
import { motion as Motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

// Floating decorative petal SVG
const PetalSvg = ({ className }) => (
  <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M40 110 C40 110 5 70 5 40 C5 18 20 5 40 5 C60 5 75 18 75 40 C75 70 40 110 40 110Z"
      fill="var(--gold)"
      fillOpacity="0.1"
    />
    <path d="M40 110 L40 5" stroke="var(--gold)" strokeWidth="0.8" strokeOpacity="0.1"/>
  </svg>
);

// Minimalist Cross accent
const CrossMini = () => (
  <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-10 mx-auto opacity-60">
    <path d="M30 10 L30 60 M20 25 L40 25" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8" />
    <circle cx="30" cy="25" r="10" stroke="var(--gold)" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.4" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HeroCover({ guestName }) {
  return (
    <section className="scroll-section relative flex items-center justify-center overflow-hidden bg-transparent">
      {/* Background decorative elements (Hindu structure parity) */}
      <div className="float-leaf absolute -top-4 -left-6 opacity-40 pointer-events-none" style={{ width: 100 }}>
        <PetalSvg />
      </div>
      <div className="float-leaf-delay absolute -top-2 -right-8 opacity-30 pointer-events-none scale-x-[-1]" style={{ width: 80 }}>
        <PetalSvg />
      </div>
      <div className="float-leaf absolute -bottom-8 -left-4 opacity-25 pointer-events-none rotate-180" style={{ width: 90 }}>
        <PetalSvg />
      </div>
      <div className="float-leaf-delay absolute -bottom-6 -right-6 opacity-25 pointer-events-none rotate-180 scale-x-[-1]" style={{ width: 70 }}>
        <PetalSvg />
      </div>

      {/* Main card */}
      <div className="w-full max-w-sm mx-auto px-6 py-12 text-center z-10 relative">
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="glass-card floral-border rounded-[20px] px-8 pt-8 pb-14 relative"
        >
          {/* Corner flourishes (Hindu base parity) */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[var(--gold)] border-opacity-20 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[var(--gold)] border-opacity-20 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[var(--gold)] border-opacity-20 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[var(--gold)] border-opacity-20 rounded-br-lg" />

          {/* Small invitation label / Guest personalization badge */}
          {guestName ? (
            <Motion.div variants={itemVariants} className="flex justify-center mb-5">
              <Motion.div 
                animate={{ boxShadow: ['0px 0px 0px rgba(184,145,58,0)', '0px 4px 24px rgba(184,145,58,0.25)', '0px 0px 0px rgba(184,145,58,0)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-block relative rounded-full px-7 py-3 bg-gradient-to-br from-[var(--pearl)] to-[#F2EBE0] border border-[var(--gold-pale)] overflow-hidden shadow-sm"
              >
                {/* Premium Glass Light Sweep */}
                <Motion.div 
                   animate={{ x: ['-200%', '250%'] }}
                   transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                   className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-12 z-0"
                />
                <p className="relative z-10 font-inter text-[9px] uppercase tracking-[0.25em] text-[var(--text-muted)] leading-relaxed">
                  Especially Invited
                  <span className="font-semibold text-[var(--gold)] tracking-[0.2em] text-[11px] mt-0.5 block drop-shadow-sm">{guestName}</span>
                </p>
              </Motion.div>
            </Motion.div>
          ) : (
            <Motion.div variants={itemVariants} className="flex justify-center mb-5">
              <div className="inline-block border border-[var(--gold)]/20 shadow-sm rounded-full px-6 py-2 bg-[var(--cream)]/40 backdrop-blur-sm">
                <p className="font-inter text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] font-medium">
                  Wedding Invitation
                </p>
              </div>
            </Motion.div>
          )}

          {/* Bible Verse Header (Matching Hindu Parity) */}
          <Motion.div variants={itemVariants} className="mb-5 mt-0 px-2">
            <p className="font-playfair text-[14px] italic text-[var(--text-dark)] leading-relaxed mb-1.5 opacity-90">
              "{weddingData.strings.bibleVerse}"
            </p>
            <p className="font-inter text-[9px] uppercase tracking-[0.15em] text-[var(--dusty-blue)] font-medium opacity-70 mb-4">
              — {weddingData.strings.bibleReference}
            </p>
            <p className="font-cormorant text-[14.5px] italic text-[var(--text-muted)] leading-relaxed opacity-95 max-w-[250px] mx-auto">
              {weddingData.strings.inviteSecondaryEn}
            </p>
          </Motion.div>

          {/* Couple names (Fluid sizing for long-name 'Evangeline' compatibility) */}
          <Motion.h1 variants={itemVariants} className="font-playfair font-bold text-[clamp(1.8rem,8vw,2.4rem)] leading-tight mb-2 gold-shimmer drop-shadow-sm">
            {weddingData.couple.groom}
          </Motion.h1>
          <Motion.p variants={itemVariants} className="font-cormorant italic text-lg text-[var(--dusty-blue)] mb-2">{weddingData.couple.ampersand}</Motion.p>
          <Motion.h1 variants={itemVariants} className="font-playfair font-bold text-[clamp(1.8rem,8vw,2.4rem)] leading-tight mb-6 gold-shimmer drop-shadow-sm">
            {weddingData.couple.bride}
          </Motion.h1>

          {/* Cross icon parity with Lotus */}
          <Motion.div variants={itemVariants} className="mb-4">
            <CrossMini />
          </Motion.div>

          {/* Date teaser */}
          <Motion.div variants={itemVariants}>
            <div className="ornamental-divider text-[var(--gold)] text-xs mb-4">
              <span className="opacity-30">✧</span>
            </div>
            <p className="font-inter text-[12px] uppercase tracking-[0.3em] text-[var(--text-dark)] opacity-70 font-medium">
              {weddingData.dates.headerDisplay}
            </p>
          </Motion.div>
        </Motion.div>

        {/* Scroll indicator */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-3"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] opacity-70">Scroll to open</p>
          <div className="scroll-indicator text-[var(--gold)] opacity-50">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
