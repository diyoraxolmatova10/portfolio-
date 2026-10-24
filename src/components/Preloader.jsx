import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Code2, Sparkles } from 'lucide-react';

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [stepIndex, setStepIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const logs = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING REACT 19 & TAILWIND V3 ENGINE...",
    "CONNECTING TO GITHUB API @diyoraxolmatova10...",
    "ESTABLISHING TELEGRAM GATEWAY: @floweraza...",
    "FETCHING REPOSITORIES & MOTION COMPONENT MATRIX...",
    "SYSTEM SECURE. LAUNCHING PORTFOLIO INTERFACE..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onFinish, 700);
          }, 300);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 4;
        return next > 100 ? 100 : next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  useEffect(() => {
    const currentStep = Math.min(
      Math.floor((progress / 100) * logs.length),
      logs.length - 1
    );
    setStepIndex(currentStep);
  }, [progress, logs.length]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050711] text-cyan-400 font-mono transition-opacity duration-700 select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background glow and code grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 code-grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md px-6 text-center space-y-6">
        
        {/* Animated Icon */}
        <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 border border-cyan-500/40 p-[1px] flex items-center justify-center shadow-2xl shadow-cyan-500/20 animate-pulse">
          <div className="w-full h-full bg-[#080b18] rounded-2xl flex items-center justify-center">
            <Terminal className="w-10 h-10 text-cyan-400 animate-bounce" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500" />
          </span>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <div className="text-xl sm:text-2xl font-bold tracking-wider text-white">
            DIYORA XOLMATOVA
          </div>
          <p className="text-xs tracking-widest text-purple-400 font-mono">
            // FRONTEND DEVELOPER SYSTEM
          </p>
        </div>

        {/* Progress bar container */}
        <div className="space-y-2 text-left">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {logs[stepIndex]}
            </span>
            <span className="font-bold text-cyan-400">{progress}%</span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden p-[1px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 transition-all duration-150 shadow-lg shadow-cyan-400/50"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Terminal Subtext */}
        <div className="text-[11px] text-slate-500 flex justify-center items-center gap-4 pt-2">
          <span>PORT: 5173</span>
          <span>•</span>
          <span>DEV_MODE: ACTIVE</span>
          <span>•</span>
          <span>STATUS: 200 OK</span>
        </div>

      </div>
    </div>
  );
};

export default Preloader;
