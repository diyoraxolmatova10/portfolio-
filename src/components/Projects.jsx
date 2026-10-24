import React from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import confetti from 'canvas-confetti';

const Projects = ({ projects, userGithub }) => {

  const handleProjectClick = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#00f2fe', '#a855f7', '#10b981']
    });
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-cyan-400 text-lg">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Loyihalar & Portfolio
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-cyan-500/40 to-transparent ml-4" />
        </div>
        <p className="text-slate-400 text-sm font-mono mb-12">
          // Haqiqiy vazifalar, API integratsiyalari va yuqori UI sifatiga ega ishlarim
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0b0f24] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-950/40"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-tr-2xl blur-xl group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#070913] border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:text-purple-400 group-hover:border-purple-500/40 transition-colors">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleProjectClick}
                      className="p-2.5 rounded-lg bg-[#070913] border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleProjectClick}
                      className="p-2.5 rounded-lg bg-[#070913] border border-slate-800 hover:border-purple-400 text-slate-300 hover:text-purple-400 transition-colors"
                      title="Havolani ochish"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-medium mb-3 bg-gradient-to-r from-cyan-950 to-purple-950 border border-cyan-800/40 text-cyan-300">
                  {project.tag}
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <h4 className="text-xs font-mono text-purple-400 mb-3">
                  {project.subtitle}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#070913] text-slate-400 border border-slate-800 group-hover:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleProjectClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-950 to-[#0f152d] hover:from-cyan-900/60 hover:to-purple-900/60 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 hover:text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-md group/btn"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400 group-hover/btn:rotate-12 transition-transform" />
                  <span>Repo: {project.repoName}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-gradient-to-r from-cyan-950/60 via-[#0e142e] to-purple-950/60 border border-cyan-500/30 p-8 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Barcha kodlar va yangi loyihalar GitHub sahifamda!
            </h3>
            <p className="text-slate-300 text-sm">
              Har bir loyihaning to'liq manba kodlari, commit tarixi va arxitekturasi ochiq manbalarda taqdim etilgan.
            </p>
            <div className="pt-2">
              <a
                href={userGithub}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleProjectClick}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-mono text-sm font-bold shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
                <span>github.com/diyoraxolmatova10 ga O'tish</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
