import React, { useEffect, useState, useMemo } from 'react';
import './features.css';
import { motion as Motion } from 'framer-motion';
import Envelope from './components/Envelope';
import HeroCover from './components/HeroCover';
import InsideDetails from './components/InsideDetails';
import Gallery from './components/Gallery';
import VenueSection from './components/VenueSection';
import ReceptionSection from './components/ReceptionSection';
import FamilySection from './components/FamilySection';
import RSVPForm from './components/RSVPForm';
import MusicWidget from './components/MusicWidget';
import AdminDashboard from './components/AdminDashboard';
import ScrollProgress from './components/ScrollProgress';
import { DarkModeToggle } from './components/UIControls';
import { useDarkMode } from './hooks/useLabHooks';
import { trackOpen } from './utils/analytics';

const DivineLightBeam = ({ className, style }) => (
  <Motion.div className={`fixed pointer-events-none z-0 ${className}`}
    style={{ ...style, background: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(184,145,58,0.05) 40%, transparent 100%)', filter: 'blur(35px)', width: '160px', height: '800px', transform: 'rotate(-25deg)' }}
    animate={{ opacity: [0.4, 0.75, 0.4], scaleX: [0.85, 1.15, 0.85] }}
    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
  />
);

const CelestialSparkle = ({ style, duration, delay }) => (
  <Motion.div className="fixed pointer-events-none z-0"
    style={{ ...style, width: '4px', height: '4px', borderRadius: '50%', background: 'white', boxShadow: '0 0 10px white, 0 0 20px rgba(184,145,58,0.4)' }}
    animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

const HolyDove = ({ style }) => (
  <Motion.div className="fixed pointer-events-none z-0 opacity-10" style={style}
    animate={{ x: [-20, 20], y: [-10, 10], opacity: [0.05, 0.15, 0.05] }}
    transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}>
    <svg viewBox="0 0 100 80" fill="var(--gold)" xmlns="http://www.w3.org/2000/svg" className="w-12 h-10">
      <path d="M50 40 C60 20 80 10 90 20 C80 30 60 40 50 40 C40 40 20 30 10 20 C20 10 40 20 50 40 Z" fillOpacity="0.4" />
      <path d="M50 40 C55 50 60 70 50 75 C40 70 45 50 50 40 Z" fillOpacity="0.3" />
    </svg>
  </Motion.div>
);

const SacredCross = ({ style, duration, delay }) => (
  <Motion.div className="fixed pointer-events-none z-0" style={style}
    animate={{ y: [0, -300], opacity: [0, 0.25, 0], rotate: [0, 10, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}>
    <svg viewBox="0 0 40 60" fill="none" stroke="var(--gold)" strokeWidth="0.8" xmlns="http://www.w3.org/2000/svg" className="w-6 h-8 opacity-40">
      <path d="M20 5 L20 55 M10 20 L30 20" strokeLinecap="round" />
    </svg>
  </Motion.div>
);

const SacredDustMote = ({ style, duration, delay }) => (
  <Motion.div className="fixed pointer-events-none z-0"
    style={{ ...style, width: '3px', height: '3px', borderRadius: '50%', backgroundColor: 'var(--gold)', boxShadow: '0 0 8px var(--gold)' }}
    animate={{ y: [0, -400], x: [0, 20], opacity: [0, 0.8, 0] }}
    transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
  />
);

function OliveLeaf({ style, className }) {
  return (
    <div className={`fixed pointer-events-none z-0 ${className}`} style={style}>
      <svg viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
        <path d="M20 75 C20 75 2 50 2 30 C2 10 15 2 20 2 C25 2 38 10 38 30 C38 50 20 75 20 75Z" fill="var(--gold)" fillOpacity="0.08" />
        <path d="M20 75 L20 2" stroke="var(--gold)" strokeWidth="0.4" strokeOpacity="0.12"/>
      </svg>
    </div>
  );
}

export default function App() {
  const [loaderDone, setLoaderDone] = useState(false);
  const [dark, setDark] = useDarkMode();

  const params = new URLSearchParams(window.location.search);
  const guestName = params.get('guest') || '';

  useEffect(() => { if (loaderDone) trackOpen(guestName); }, [loaderDone, guestName]);

  const crossPositions = useMemo(() => [...Array(6)].map((_, i) => ({ left: `${(i*17)%70+15}%`, top: `${(i*23)%20+80}%`, duration: 15+((i*7)%10), delay: (i*3)%10 })), []);
  const sparklePositions = useMemo(() => [...Array(12)].map((_, i) => ({ left: `${(i*13)%100}%`, top: `${(i*19)%100}%`, duration: 3+((i*1.5)%4), delay: (i*1.2)%5 })), []);
  const motePositions = useMemo(() => [...Array(8)].map((_, i) => ({ left: `${(i*29)%100}%`, top: `${(i*11)%30+70}%`, duration: 12+((i*5)%8), delay: (i*4)%10 })), []);

  if (window.location.pathname === '/admin') return <AdminDashboard />;

  return (
    <div className="relative w-full bg-[var(--pearl)]">
      {loaderDone && <ScrollProgress />}
      {loaderDone && <DarkModeToggle dark={dark} setDark={setDark} />}
      {!loaderDone && <Envelope onOpen={() => setLoaderDone(true)} />}

      <DivineLightBeam style={{ top: '-100px', left: '-50px' }} />
      <DivineLightBeam style={{ top: '-100px', right: '-80px' }} className="scale-x-[-1]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-divine opacity-50" />
      <HolyDove style={{ top: '20%', left: '10%' }} />
      <HolyDove style={{ top: '65%', right: '15%' }} />

      {crossPositions.map((pos, i) => <SacredCross key={`c${i}`} style={{ left: pos.left, top: pos.top }} duration={pos.duration} delay={pos.delay} />)}
      {sparklePositions.map((pos, i) => <CelestialSparkle key={`s${i}`} style={{ left: pos.left, top: pos.top }} duration={pos.duration} delay={pos.delay} />)}
      {motePositions.map((pos, i) => <SacredDustMote key={`m${i}`} style={{ left: pos.left, top: pos.top }} duration={pos.duration} delay={pos.delay} />)}

      <OliveLeaf className="float-leaf"       style={{ top: '8%',  left:  '-15px', width: 45, height: 90, opacity: 0.5 }} />
      <OliveLeaf className="float-leaf-delay" style={{ top: '12%', right: '-15px', width: 35, height: 75, opacity: 0.4, transform: 'scaleX(-1)' }} />
      <OliveLeaf className="float-leaf"       style={{ top: '50%', left:  '-12px', width: 30, height: 65, opacity: 0.3, transform: 'rotate(15deg)' }} />
      <OliveLeaf className="float-leaf-delay" style={{ top: '58%', right: '-12px', width: 30, height: 65, opacity: 0.3, transform: 'rotate(-15deg) scaleX(-1)' }} />

      <div className="scroll-container">
        <HeroCover guestName={guestName} />
        <InsideDetails guestName={guestName} />
        <VenueSection />
        <ReceptionSection />
        <Gallery />
        <FamilySection />
        <RSVPForm />
      </div>

      {loaderDone && <MusicWidget />}
    </div>
  );
}
