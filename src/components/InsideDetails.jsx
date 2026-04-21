import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, useInView } from 'framer-motion';
import { weddingData } from '../config/weddingData';

const WEDDING_DATE = new Date(weddingData.dates.preciseDateIso);

function getTimeLeft() {
  const now = new Date();
  const diff = WEDDING_DATE - now;
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

const DetailRow = ({ label, value, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className="text-center py-4"
    >
      <div className="font-inter text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-1">{label}</div>
      <p className="font-cormorant text-2xl font-medium text-[var(--text-dark)] leading-tight">{value}</p>
    </Motion.div>
  );
};

const MuralDivider = ({ delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, scaleX: 0 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className="flex items-center gap-4 my-2"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
      <svg width="24" height="20" viewBox="0 0 24 20" fill="none" className="opacity-40">
        {/* Soft floral vine motif parity with Hindu circles */}
        <path d="M4 10 C8 5, 16 15, 20 10" stroke="var(--gold)" strokeWidth="1" strokeLinecap="round" />
        <circle cx="12" cy="10" r="2" fill="var(--gold)" />
      </svg>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
    </Motion.div>
  );
};

const MinimalCountdown = () => {
  const [time, setTime] = useState(getTimeLeft());
  const isPast = WEDDING_DATE <= new Date();

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (isPast) return null;

  return (
    <div className="flex justify-center gap-5 mt-6 mb-2">
      {Object.entries(time).map(([label, value]) => (
        <div key={label} className="text-center flex flex-col items-center">
          <span className="font-playfair italic text-2xl text-[var(--text-dark)] leading-none mb-1">{String(value).padStart(2, '0')}</span>
          <span className="font-inter text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] opacity-70">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default function InsideDetails() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: '-60px' });

  return (
    <section className="scroll-section flex items-center justify-center bg-transparent px-6 py-12 overflow-hidden">
      <div className="w-full max-w-sm mx-auto">
        {/* Section heading (Hindu parity) */}
        <Motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 18 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-10"
        >
          <p className="font-inter text-[10px] uppercase tracking-[0.4em] text-[var(--dusty-blue)] mb-3 opacity-80">The Details</p>
          <h2 className="font-playfair italic text-3xl font-medium text-[var(--text-dark)] drop-shadow-sm">Ceremony &amp; Celebration</h2>
        </Motion.div>

        {/* Card (Parity) */}
        <div className="glass-card floral-border rounded-[28px] px-7 py-10 relative">
          <div className="absolute top-4 left-4 w-10 h-10 border-t border-l border-[var(--gold)] border-opacity-20 rounded-tl-[20px]" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t border-r border-[var(--gold)] border-opacity-20 rounded-tr-[20px]" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b border-l border-[var(--gold)] border-opacity-20 rounded-bl-[20px]" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b border-r border-[var(--gold)] border-opacity-20 rounded-br-[20px]" />

          {/* Calendar Block (Hindu Parity) */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center border border-[var(--gold)]/15 rounded-2xl p-6 mb-10 bg-white/40 shadow-sm"
          >
            <div className="flex items-center justify-center gap-6 text-[var(--text-dark)]">
              <div className="text-right border-r border-[var(--gold)]/20 pr-6">
                <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]">{weddingData.dates.calendar.dayOfWeek}</p>
              </div>
              <div className="text-center -mt-2">
                <span className="font-playfair font-light italic text-6xl leading-none text-[var(--gold)] drop-shadow-sm">{weddingData.dates.calendar.dayNumber}</span>
              </div>
              <div className="text-left border-l border-[var(--gold)]/20 pl-6">
                <p className="font-playfair italic font-semibold text-xl leading-tight text-[var(--text-dark)]">{weddingData.dates.calendar.month}</p>
                <p className="font-inter text-[10px] tracking-widest text-[var(--text-muted)] opacity-80">{weddingData.dates.calendar.year}</p>
              </div>
            </div>

            <div className="w-full mt-6 pt-5 border-t border-[var(--gold)]/10">
              <MinimalCountdown />
            </div>
          </Motion.div>

          <MuralDivider delay={0.15} />
          <DetailRow label={
            <div className="flex flex-col items-center">
              <span>{weddingData.events.ceremony.titleEn}</span>
              <span className="font-malayalam text-[13px] text-[var(--dusty-blue)] tracking-normal mt-1 opacity-80">{weddingData.events.ceremony.titleMl}</span>
            </div>
          } value={weddingData.events.ceremony.timeText} delay={0.2} />
          <MuralDivider delay={0.25} />
          <DetailRow label={
            <div className="flex flex-col items-center">
              <span>{weddingData.events.reception.titleEn}</span>
              <span className="font-malayalam text-[13px] text-[var(--dusty-blue)] tracking-normal mt-1 opacity-80">{weddingData.events.reception.titleMl}</span>
            </div>
          } value={weddingData.events.reception.timeText} delay={0.3} />
          <MuralDivider delay={0.35} />

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center py-6"
          >
             <p className="font-inter text-[10px] uppercase tracking-[0.3em] text-[var(--gold)] mb-2">The Sanctuary</p>
             <p className="font-playfair italic text-2xl font-medium text-[var(--text-dark)] leading-tight mb-3">{weddingData.venue.name}</p>
             <p className="font-inter text-[12px] text-[var(--text-muted)] leading-relaxed opacity-90 mx-auto max-w-[220px]">
              {weddingData.venue.addressEn[0]}<br />{weddingData.venue.addressEn[1]}
            </p>
          </Motion.div>

          <MuralDivider delay={0.5} />

          {/* Hosted by (Parity) */}
          <Motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-center pt-6"
          >
            <p className="font-inter text-[9.5px] uppercase tracking-[0.35em] text-[var(--text-muted)] mb-3">With Gratitude</p>
            <p className="font-cormorant italic text-[16px] text-[var(--dusty-dark)] leading-relaxed font-medium">
              {weddingData.hosts[0]}
              <br />
              {weddingData.hosts.length > 1 && (
                <>
                  <span className="text-[var(--gold)] my-2 inline-block opacity-40">✧</span>
                  <br />
                  {weddingData.hosts[1]}
                </>
              )}
            </p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
