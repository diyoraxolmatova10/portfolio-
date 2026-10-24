import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  Calendar, 
  Award
} from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Cpu,
  Users,
  TrendingUp,
};

const StrengthsAndEducation = ({ strengths, education }) => {
  return (
    <section id="strengths" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-400 text-lg">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Kuchli Tomonlarim & Ta'lim
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/40 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 tracking-wider mb-2">
              // KUCHLI TOMONLARIM (CORE ATTRIBUTES)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {strengths.map((item) => {
                const IconComponent = iconMap[item.icon] || Award;
                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-[#0b0f24] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#070913] border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className={'w-5 h-5 ' + item.color} />
                    </div>
                    <h4 className="text-white font-semibold text-base mb-1.5 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="text-xs font-mono text-slate-400 tracking-wider mb-2">
              // TA'LIM & SERTIFIKATSIYA
            </h3>

            <div className="rounded-2xl bg-[#0b0f24] border border-cyan-500/30 p-6 relative overflow-hidden group hover:border-cyan-400 transition-all">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">
                    {education.degree}
                  </h4>
                  <p className="text-xs font-mono text-purple-400">
                    {education.institution}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#070913] border border-slate-800 text-slate-300 font-mono text-xs mb-4">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{education.period}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                {education.description}
              </p>

              <div className="space-y-2 pt-4 border-t border-slate-800 font-mono text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>React.js, Hooks, Custom Hooks, Redux Toolkit</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>Responsive UI with Tailwind CSS & Motion Effects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>REST API integration & Real-World Projects</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrengthsAndEducation;
