import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, MapPin, Mail, Phone, Code2, Sparkles, Send } from 'lucide-react';
import { GithubIcon, TelegramIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Hero = ({ data }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = data.roles[roleIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % data.roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, data.roles]);

  const fireCelebrate = (color) => {
    confetti({
      particleCount: 75,
      spread: 75,
      origin: { y: 0.6 },
      colors: color ? [color, '#ffffff', '#00f2fe'] : ['#00f2fe', '#a855f7', '#ec4899']
    });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-400 text-xs font-mono shadow-lg shadow-cyan-500/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>{data.status}</span>
                <span className="text-slate-600">|</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3 h-3 text-purple-400" /> {data.location}
                </span>
              </div>

              {/* Direct Telegram pill */}
              <a
                href={data.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fireCelebrate('#0088cc')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-950/60 border border-sky-500/40 text-sky-400 hover:text-white text-xs font-mono transition-all hover:scale-105"
              >
                <TelegramIcon className="w-3.5 h-3.5" />
                <span>Telegram: {data.telegramUsername}</span>
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-purple-400 tracking-widest flex items-center gap-2">
                <span className="w-8 h-[1px] bg-purple-500" />
                SALOM, MENING ISMIM
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  {data.name}
                </span>
              </h1>
            </div>

            {/* Typewriter Banner */}
            <div className="h-12 flex items-center">
              <span className="font-mono text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400">
                {displayedText}
              </span>
              <span className="inline-block w-2.5 h-7 ml-1 bg-cyan-400 animate-pulse" />
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {data.bio}
            </p>

            {/* CTAs: Direct Telegram + GitHub + Projects */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Special Telegram Direct Chat Button */}
              <a
                href={data.telegram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fireCelebrate('#0088cc')}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono text-sm font-bold shadow-xl shadow-sky-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 overflow-hidden"
              >
                <TelegramIcon className="w-5 h-5 group-hover:scale-125 group-hover:-translate-y-0.5 transition-transform" />
                <span>Telegram Lichkaga Yozish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* GitHub Action Button */}
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fireCelebrate('#00f2fe')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0f1426] hover:bg-[#161e38] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-sm font-semibold transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                <GithubIcon className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>GitHub Profil</span>
              </a>

              {/* Projects link */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-slate-800 text-slate-300 hover:text-white font-mono text-sm transition-colors"
              >
                <Code2 className="w-4 h-4 text-purple-400" />
                <span>Loyihalar</span>
              </a>
            </div>

            {/* Social Network Quick Row: Telegram, GitHub, LinkedIn, Instagram */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono text-slate-500">// Ijtimoiy tarmoqlar:</span>
              
              <a
                href={data.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0b0f24] border border-slate-800 hover:border-sky-400 text-slate-400 hover:text-sky-300 text-xs font-mono transition-all"
              >
                <TelegramIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Telegram</span>
              </a>

              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0b0f24] border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 text-xs font-mono transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>

              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0b0f24] border border-slate-800 hover:border-blue-400 text-slate-400 hover:text-blue-300 text-xs font-mono transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0b0f24] border border-slate-800 hover:border-pink-500 text-slate-400 hover:text-pink-300 text-xs font-mono transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Quick Contacts */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <a
                href={'mailto:' + data.email}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> {data.email}
              </a>
              <a
                href={'tel:' + data.phone.replace(/\s+/g, '')}
                className="flex items-center gap-1.5 hover:text-purple-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-purple-400" /> {data.phone}
              </a>
            </div>
          </div>

          {/* Interactive Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0b0e1c] border border-cyan-500/40 p-1 terminal-glow overflow-hidden group hover:border-purple-500/60 transition-all duration-500">
              
              <div className="bg-[#0f152b] px-4 py-3 rounded-t-xl flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>bash — diyora@portfolio</span>
                </div>
                <div className="w-12 text-right">
                  <span className="text-[10px] font-mono text-emerald-400">LIVE</span>
                </div>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 bg-[#080b18]">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span>whoami</span>
                </div>
                <div className="text-slate-300 pl-4 border-l-2 border-cyan-500/30">
                  "Diyora Xolmatova" - Frontend React Developer. Specializing in High Motion UI.
                </div>

                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span>cat socials.json</span>
                </div>
                <div className="text-amber-300/90 pl-4 border-l-2 border-purple-500/30 text-xs">
                  {'{\n  "telegram": "@floweraza",\n  "github": "diyoraxolmatova10",\n  "linkedin": "diyora-xolmatova",\n  "instagram": "@_abdatullah_"\n}'}
                </div>

                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span>curl -s tg://resolve?domain=floweraza</span>
                </div>
                <div className="text-sky-400 pl-4 border-l-2 border-sky-500/30 text-xs flex items-center justify-between">
                  <span>✔ Telegram Online: @floweraza</span>
                  <a
                    href={data.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sky-300 hover:text-white"
                  >
                    chat now
                  </a>
                </div>

                <div className="flex items-center gap-2 text-slate-400 pt-2">
                  <span className="text-emerald-400">➜</span>
                  <span className="text-purple-400">~</span>
                  <span className="text-white">open portfolio --live</span>
                  <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                </div>
              </div>

              <div className="bg-[#0b0f24] px-4 py-2 text-[11px] font-mono text-slate-500 flex justify-between items-center border-t border-slate-800">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Terminal Online
                </span>
                <span>Click social buttons to connect</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
