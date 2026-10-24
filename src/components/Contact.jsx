import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, Terminal, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, TelegramIcon, LinkedinIcon, InstagramIcon } from './SocialIcons';
import confetti from 'canvas-confetti';

const Contact = ({ personal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFakeSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
    confetti({
      particleCount: 65,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f2fe', '#0088cc', '#a855f7', '#ec4899']
    });
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-cyan-400 text-lg">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Aloqa & Tarmoqlar
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-white mb-2">
              Hamkorlik yoki Yangi Loyihalar bormi?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 font-light">
              Men doimo qiziqarli jamoaviy loyihalar, Frontend dasturchi vakansiyalari va professional takliflar uchun ochiqman. Telegram lichkaga to'g'ridan-to'g'ri yozishingiz mumkin!
            </p>

            {/* Prominent Telegram Direct Card */}
            <a
              href={personal.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 to-[#0e1633] border border-sky-500/50 hover:border-sky-400 flex items-center justify-between transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-sky-950/40 group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:rotate-6 transition-all">
                  <TelegramIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-sky-400 font-semibold tracking-wider">TEZKOR ALOQA (TELEGRAM LICHKA)</div>
                  <div className="text-sm font-mono text-white font-bold group-hover:text-sky-300">
                    {personal.telegramUsername}
                  </div>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-sky-500 text-white font-mono text-xs font-semibold flex items-center gap-1 group-hover:bg-sky-400 transition-colors">
                <span>Yozish</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#0b0f24] border border-slate-800 hover:border-cyan-500/40 flex items-center justify-between transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#070913] border border-slate-800 flex items-center justify-center text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">EMAIL ADRES</div>
                  <a href={'mailto:' + personal.email} className="text-sm font-mono text-white hover:text-cyan-300">
                    {personal.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.email, 'email')}
                className="p-2 rounded-lg bg-[#070913] text-slate-400 hover:text-cyan-400 border border-slate-800"
                title="Nusxalash"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl bg-[#0b0f24] border border-slate-800 hover:border-purple-500/40 flex items-center justify-between transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#070913] border border-slate-800 flex items-center justify-center text-purple-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500">TELEFON</div>
                  <a href={'tel:' + personal.phone.replace(/\s+/g, '')} className="text-sm font-mono text-white hover:text-purple-300">
                    {personal.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personal.phone, 'phone')}
                className="p-2 rounded-lg bg-[#070913] text-slate-400 hover:text-purple-400 border border-slate-800"
                title="Nusxalash"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links Row (GitHub, LinkedIn, Instagram) */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0b0f24] border border-slate-800 hover:border-cyan-400 flex flex-col items-center justify-center gap-1 text-center transition-all hover:scale-105 group"
              >
                <GithubIcon className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="text-[11px] font-mono text-slate-300">GitHub</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0b0f24] border border-slate-800 hover:border-blue-400 flex flex-col items-center justify-center gap-1 text-center transition-all hover:scale-105 group"
              >
                <LinkedinIcon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-mono text-slate-300">LinkedIn</span>
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#0b0f24] border border-slate-800 hover:border-pink-500 flex flex-col items-center justify-center gap-1 text-center transition-all hover:scale-105 group"
              >
                <InstagramIcon className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-mono text-slate-300">Instagram</span>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7 bg-[#0b0f24] border border-slate-800 rounded-2xl p-6 sm:p-8 relative">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-6">
              <Terminal className="w-4 h-4" />
              <span>send_message.sh</span>
            </div>

            {formSent ? (
              <div className="p-8 text-center bg-emerald-950/30 border border-emerald-500/40 rounded-xl space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-lg">Xabaringiz Qabul Qilindi!</h4>
                <p className="text-slate-300 text-xs font-mono">
                  Tez orada siz bilan bog'lanaman yoki to'g'ridan-to'g'ri Telegram orqali yozishingiz mumkin.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFakeSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      // Ismingiz
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ismingiz yoki kompaniya"
                      className="w-full bg-[#070913] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5">
                      // Email manzilingiz
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="aloqa@misol.uz"
                      className="w-full bg-[#070913] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5">
                    // Xabar matni
                  </label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Loyiha haqida yoki taklifingizni yozing..."
                    className="w-full bg-[#070913] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-mono transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Xabarni Yuborish</span>
                  </button>

                  <a
                    href={personal.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20 transition-all duration-300"
                  >
                    <TelegramIcon className="w-4 h-4" />
                    <span>Telegramda Yozish</span>
                  </a>
                </div>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Online & Ready</span>
              <span>Response time: &lt; 24h</span>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-slate-800/80 text-center font-mono text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 Diyora Xolmatova. Crafted with React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-3 text-cyan-400">
            <a href={personal.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline">Telegram: @floweraza</a>
            <span>•</span>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
