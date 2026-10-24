import React from 'react';
import { User, Terminal, Code, Sparkles, CheckCircle2, Heart } from 'lucide-react';

const About = ({ data }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-cyan-400 text-lg">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Mening Haqimda
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main narrative */}
          <div className="lg:col-span-7 bg-[#0b0f24]/80 backdrop-blur border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3 text-cyan-400 font-mono text-xs">
              <Terminal className="w-4 h-4" />
              <span>developer_manifesto.md</span>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              Men zamonaviy, tez va qulay veb-interfeyslar yaratishga qiziquvchi <span className="text-cyan-400 font-medium">Frontend Dasturchiman</span>. 
              Asosiy e'tiborim foydalanuvchilar uchun intuitiv va estetik jihatdan chiroyli dizaynlarni toza, mustahkam React komponentlari bilan birlashtirishga qaratilgan.
            </p>

            <p className="text-slate-300 leading-relaxed font-light">
              Har bir loyihada faqatgina kod yozish emas, balki foydalanuvchi tajribasi (UX), moslashuvchanlik (responsiveness) va silliq animatsiyalarni (Framer Motion) hisobga olgan holda yondashaman. Yangi texnologiyalar va amaliyotlarni chuqur o'rganishga ishtiyoqim baland.
            </p>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-[#080b18] border border-slate-800/80">
                <div className="text-cyan-400 text-2xl font-bold font-mono">React</div>
                <div className="text-slate-400 text-xs mt-1">Asosiy Mutaxassislik</div>
              </div>
              <div className="p-3 rounded-xl bg-[#080b18] border border-slate-800/80">
                <div className="text-purple-400 text-2xl font-bold font-mono">100%</div>
                <div className="text-slate-400 text-xs mt-1">Responsive Dizayn</div>
              </div>
              <div className="p-3 rounded-xl bg-[#080b18] border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="text-emerald-400 text-2xl font-bold font-mono">Fast</div>
                <div className="text-slate-400 text-xs mt-1">Yangi bilimlarni o'zlashtirish</div>
              </div>
            </div>
          </div>

          {/* Side quick info card */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <div className="bg-[#0b0f24]/80 border border-purple-900/30 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs mb-3">
                <Sparkles className="w-4 h-4" />
                <span>Qisqa profayl</span>
              </div>
              <ul className="space-y-3 font-mono text-xs sm:text-sm text-slate-300">
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">Mutaxassislik:</span>
                  <span className="text-white font-medium">Frontend Developer</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">Asosiy vosita:</span>
                  <span className="text-cyan-400 font-medium">React.js & Tailwind</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">Manzil:</span>
                  <span className="text-slate-200">Farg'ona, O'zbekiston</span>
                </li>
                <li className="flex justify-between py-1.5 border-b border-slate-800">
                  <span className="text-slate-500">GitHub:</span>
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline flex items-center gap-1"
                  >
                    @{data.githubUsername}
                  </a>
                </li>
                <li className="flex justify-between py-1.5">
                  <span className="text-slate-500">Ishga tayyorlik:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Ha (Tayyor)
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold">Kodlash falsafasi</h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  &quot;Foydalanuvchi zavq oladigan va tushunarli bo'lgan toza kod yozish — mening asosiy maqsadim.&quot;
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
