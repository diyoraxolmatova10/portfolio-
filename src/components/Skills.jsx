import React, { useState } from 'react';
import { Code2, Globe2 } from 'lucide-react';

const Skills = ({ skills, languages }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Frontend Core', 'Styling & UI', 'Dev Tools', 'Integration'];

  const filteredSkills = activeFilter === 'All' 
    ? skills 
    : skills.filter(s => s.category.includes(activeFilter) || s.category === activeFilter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-cyan-400 text-lg">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Ko'nikmalar & Texnologiyalar
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-purple-500/40 to-transparent ml-4" />
        </div>

        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={
                'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ' +
                (activeFilter === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-[#0f1426] text-slate-400 hover:text-white border border-slate-800')
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group relative bg-[#0b0f24]/90 border border-slate-800/80 hover:border-cyan-500/50 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 overflow-hidden"
            >
              <div 
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                style={{ width: skill.level + '%' }}
              />

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#070913] border border-slate-800 flex items-center justify-center group-hover:border-purple-500/40 transition-colors">
                    <Code2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-500">{skill.category}</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-purple-400 font-bold">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-700"
                  style={{ width: skill.level + '%' }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0b0f24]/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-6">
            <Globe2 className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-mono">
              // Tillar (Language Proficiency)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="bg-[#070913] border border-slate-800/90 rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="text-white font-semibold text-sm">{lang.name}</h4>
                    <span className="text-xs font-mono text-cyan-400 font-medium">
                      {lang.percentage}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 font-mono">{lang.level}</p>
                </div>
                
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-4">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    style={{ width: lang.percentage + '%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
