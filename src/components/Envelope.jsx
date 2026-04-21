import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 2400); 
  };

  return (
    <Motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1E24] overflow-hidden"
      animate={{ 
         backgroundColor: isOpen ? 'rgba(26,30,36,0)' : '#1A1E24',
         opacity: isOpen ? 0 : 1
      }}
      transition={{ delay: 1.6, duration: 0.8 }}
    >
      <Motion.div className="relative w-[320px] h-[220px]">
        {/* Back of Envelope */}
        <Motion.div 
          className="absolute inset-0 bg-[#E8E6E0] rounded-sm shadow-2xl"
          animate={{ y: isOpen ? 500 : 0, opacity: isOpen ? [1, 1, 1, 0] : 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
        />

        {/* The Invitation Card sliding up and scaling - Structural Parity */}
        <Motion.div 
          className="absolute inset-x-3 top-4 h-[200px] bg-[var(--pearl)] rounded-t-lg flex flex-col items-center justify-start pt-8 border border-[var(--gold)]/15 z-10"
          initial={{ y: 0, scale: 1 }}
          animate={{ 
            y: isOpen ? -180 : 0,
            scale: isOpen ? [1, 1, 1, 10] : 1, 
          }}
          transition={{ duration: 2.2, times: [0, 0.2, 0.6, 1], ease: "easeInOut" }}
        >
          <Motion.div 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            transition={{ delay: 0.8, duration: 0.4 }}
            className="px-4 text-center"
          >
            <p className="font-inter text-[8px] uppercase tracking-[0.3em] text-[var(--gold)] mb-3 opacity-80">{weddingData.strings.envelopeSmallTitle}</p>
            <p className="font-playfair italic text-3xl text-[var(--text-dark)] drop-shadow-sm">
              {weddingData.couple.groom} 
              <span className="text-[var(--dusty-blue)] text-xl mx-2">and</span> 
              {weddingData.couple.bride}
            </p>
          </Motion.div>
        </Motion.div>

        {/* Front Flaps Layer (Parity with Hindu) */}
        <Motion.div 
          className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none z-20"
          animate={{ y: isOpen ? 500 : 0, opacity: isOpen ? [1, 1, 1, 0] : 1 }}
          transition={{ delay: 0.8, duration: 1, ease: 'easeIn' }}
        >
          {/* Left Flap */}
          <div 
            className="absolute bg-[#F0EEEA] border-r border-t border-white/40"
            style={{
              width: '240px', height: '240px',
              transform: 'rotate(45deg)',
              left: '-120px', top: '10px'
            }}
          />
          {/* Right Flap */}
          <div 
            className="absolute bg-[#F0EEEA] border-l border-t border-white/40"
            style={{
              width: '240px', height: '240px',
              transform: 'rotate(45deg)',
              right: '-120px', top: '10px'
            }}
          />
          {/* Bottom Flap */}
          <div 
            className="absolute bg-[#EAE8E2] shadow-[0_-4px_15px_rgba(0,0,0,0.02)]"
            style={{
              width: '320px', height: '320px',
              transform: 'rotate(45deg)',
              left: '0px', top: '70px'
            }}
          />
        </Motion.div>

        {/* Top Flap (Animated - Parity) */}
        <Motion.div 
          className="absolute inset-x-0 top-0 h-[120px] origin-top z-30"
          initial={{ rotateX: 0, y: 0, opacity: 1 }}
          animate={{ 
            rotateX: isOpen ? -180 : 0,
            y: isOpen ? [0, 0, 500] : 0,
            opacity: isOpen ? [1, 1, 0] : 1
          }}
          transition={{ duration: 1.8, times: [0, 0.3, 1], ease: "easeInOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* The Flap Triangle */}
          <div 
            className="absolute w-full h-[160px] bg-[#DED9CE] drop-shadow-md origin-top flex items-end justify-center"
            style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
          />

          {/* Wax Seal Button (Gold Cross Seal) */}
          {!isOpen && (
            <button 
              onClick={handleOpen} 
              className="absolute z-10 bottom-[-24px] left-1/2 -ml-9 w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[var(--gold)] via-[var(--gold-light)] to-[#A67C2E] shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center justify-center text-white border-2 border-[var(--gold-pale)]/50 hover:scale-105 active:scale-95 transition-all group"
            >
              {/* Wax effect + Cross */}
              <div className="flex flex-col items-center">
                <span className="font-playfair italic text-xl drop-shadow-md tracking-tighter">{weddingData.couple.initials}</span>
                <div className="w-5 h-5 mt-[-2px] opacity-80">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4V20M8 8H16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </button>
          )}
        </Motion.div>
      </Motion.div>
      
      {/* Instruction text */}
      {!isOpen && (
        <Motion.p 
          className="absolute bottom-12 text-white/50 font-inter text-[10px] tracking-[0.4em] uppercase pointer-events-none"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          Tap the seal to open
        </Motion.p>
      )}
    </Motion.div>
  );
}
