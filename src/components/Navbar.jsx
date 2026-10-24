import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Send } from 'lucide-react';
import { GithubIcon, TelegramIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Navbar = ({ personal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCelebrate = (color) => {
    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.1 },
      colors: color ? [color, '#ffffff', '#00f2fe'] : ['#00f2fe', '#a855f7', '#ec4899', '#ffffff']
    });
  };

  const navLinks = [
    { name: '// 01. Haqimda', href: '#about' },
    { name: '// 02. Ko\'nikmalar', href: '#skills' },
    { name: '// 03. Loyihalar', href: '#projects' },
    { name: '// 04. Kuchli Tomonlar', href: '#strengths' },
    { name: '// 05. Aloqa', href: '#contact' },
  ];

  return (
    <header className={
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' +
      (scrolled 
        ? 'bg-[#070913]/95 backdrop-blur-md border-b border-cyan-500/20 py-2.5 shadow-xl shadow-black/60' 
        : 'bg-transparent py-4')
    }>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo / Terminal prompt */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-[1.5px] transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full bg-[#090d1c] rounded-lg flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1 font-mono font-bold text-xs sm:text-sm tracking-wide text-white">
              <span className="text-cyan-400">dx</span>
              <span className="text-purple-400">@</span>
              <span>portfolio:~$</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400 tracking-wider">
              DIYORA XOLMATOVA
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors py-1 relative group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Fast Action Buttons: Telegram + GitHub + Socials */}
        <div className="hidden sm:flex items-center gap-2.5">
          
          {/* Telegram Direct Action Button */}
          <a
            href={personal.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerCelebrate('#0088cc')}
            className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-sky-500/20 to-blue-600/20 border border-sky-400/40 hover:border-sky-400 text-sky-300 hover:text-white font-mono text-xs font-semibold shadow-md transition-all duration-300 hover:scale-105"
            title="Telegramda xabar yozish"
          >
            <TelegramIcon className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 group-hover:-translate-y-0.5 transition-transform" />
            <span>@floweraza</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          </a>

          {/* GitHub Direct Action Button */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerCelebrate('#00f2fe')}
            className="relative group overflow-hidden rounded-full p-[1.5px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse-glow" />
            <span className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b0f24] text-xs font-mono font-medium text-white transition-all duration-300 group-hover:bg-[#121838]">
              <GithubIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>GitHub</span>
            </span>
          </a>

          {/* LinkedIn Icon */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#0b0f24] border border-slate-800 hover:border-blue-400 text-slate-400 hover:text-blue-400 transition-all hover:scale-110"
            title="LinkedIn Profil"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>

          {/* Instagram Icon */}
          <a
            href={personal.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#0b0f24] border border-slate-800 hover:border-pink-500 text-slate-400 hover:text-pink-400 transition-all hover:scale-110"
            title="Instagram Profil"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e22]/95 backdrop-blur-xl border-b border-purple-900/30 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-mono text-slate-300 hover:text-cyan-400 transition-colors py-1.5 border-b border-slate-800/50"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile direct social links */}
          <div className="pt-2 space-y-2">
            <a
              href={personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerCelebrate('#0088cc')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold shadow-md shadow-sky-600/30"
            >
              <TelegramIcon className="w-4 h-4" />
              <span>Telegram: @floweraza (Lichkaga o'tish)</span>
            </a>

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerCelebrate('#00f2fe')}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-xs font-medium shadow-md shadow-cyan-500/20"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub: diyora_xolmatova</span>
            </a>

            <div className="flex gap-2 pt-1">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#0f1426] border border-slate-800 text-xs font-mono text-slate-300 hover:text-blue-400"
              >
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#0f1426] border border-slate-800 text-xs font-mono text-slate-300 hover:text-pink-400"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
