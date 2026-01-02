import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Lock, 
  Info, 
  ChevronRight, 
  Terminal, 
  Code2, 
  Cpu, 
  Globe 
} from "lucide-react";

// --- Custom Smart Rectangular Line Component ---

const RectangularLine = ({ from, to, borderColor, containerRef }) => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    const updatePosition = () => {
      const el1 = document.querySelector(`.${from}`);
      const el2 = document.querySelector(`.${to}`);
      const parent = containerRef.current;

      if (el1 && el2 && parent) {
        const rect1 = el1.getBoundingClientRect();
        const rect2 = el2.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        const isSourceAbove = rect1.top < rect2.top;

        // X: Center of elements
        const x1 = rect1.left + rect1.width / 2 - parentRect.left;
        const x2 = rect2.left + rect2.width / 2 - parentRect.left;

        // Y: Connect opposing edges
        const y1 = isSourceAbove ? (rect1.bottom - parentRect.top) : (rect1.top - parentRect.top);
        const y2 = isSourceAbove ? (rect2.top - parentRect.top) : (rect2.bottom - parentRect.top);

        setCoords({ x1, y1, x2, y2 });
      }
    };

    const timeoutId = setTimeout(updatePosition, 100);
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [from, to, containerRef]);

  if (!coords) return null;

  const midY = (coords.y1 + coords.y2) / 2;
  const path = `M ${coords.x1} ${coords.y1} L ${coords.x1} ${midY} L ${coords.x2} ${midY} L ${coords.x2} ${coords.y2}`;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-50 overflow-visible">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        d={path}
        stroke={borderColor}
        strokeWidth="2"
        strokeDasharray="6, 4"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx={coords.x1} cy={coords.y1} r="3" fill={borderColor} />
      <circle cx={coords.x2} cy={coords.y2} r="3" fill={borderColor} />
    </svg>
  );
};

// --- Main App Component ---

export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const containerRef = useRef(null);

  // Projects Data mapped to specific skills
  const projects = [
    {
      id: "win-road-test",
      title: "Win Road Test",
      description: "5-star rated driving test resource forum.",
      overlay: "High-performance forum engine built with Next.js and Node.js.",
      tech: ["skill-ts", "skill-next", "skill-tailwind", "skill-sql", "skill-node"],
      github: "https://apps.apple.com/ca/app/win-road-test/id6739723461",
      link: "https://apps.apple.com/ca/app/win-road-test/id6739723461",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "spotube",
      title: "Spotube",
      isGithub: true,
      description: "38k+ stars. Cross-platform desktop integration using Flutter and modern UI motion.",
      overlay: "Add multi language support and enhance UI animations.",
      tech: ["skill-java", "skill-tailwind", "skill-motion", "skill-docker"],
      github: "https://github.com/JusArthur/spotube",
      link: "https://spotube.krtirtho.dev/",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: "reconciliation",
      title: "Road to Reconciliation",
      isGithub: true,
      description: "Full-stack community portal with real-time data visualization.",
      overlay: "Add dynamic routes and interactive data charts.",
      tech: ["skill-js", "skill-react", "skill-tailwind", "skill-sql", "skill-node", "skill-motion"],
      github: "https://github.com/BuildersLeague/BuildersLeague-Edition1",
      link: "https://github.com/BuildersLeague/BuildersLeague-Edition1",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const skills = [
    { id: "skill-ts", name: "TypeScript", color: "text-blue-400" },
    { id: "skill-js", name: "JavaScript", color: "text-yellow-400" },
    { id: "skill-react", name: "React", color: "text-cyan-400" },
    { id: "skill-next", name: "Next.js", color: "text-white" },
    { id: "skill-node", name: "Node.js", color: "text-green-500" },
    { id: "skill-sql", name: "PostgreSQL", color: "text-indigo-400" },
    { id: "skill-mongo", name: "MongoDB", color: "text-emerald-500" },
    { id: "skill-java", name: "Java", color: "text-red-400" },
    { id: "skill-python", name: "Python", color: "text-amber-400" },
    { id: "skill-tailwind", name: "Tailwind", color: "text-sky-400" },
    { id: "skill-motion", name: "Motion", color: "text-purple-400" },
    { id: "skill-docker", name: "Docker", color: "text-blue-500" }
  ];

  return (
    <main 
      ref={containerRef}
      className="relative bg-[#050505] text-zinc-300 min-h-screen font-sans selection:bg-purple-500/30 overflow-x-hidden"
    >
      {/* 1. Experience Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-zinc-500 text-[10px] font-mono mb-6 uppercase tracking-[0.3em]">Work Experience</h2>
        <motion.div 
           initial={{ opacity: 0, y: 20 }} 
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative group border-2 border-dotted border-zinc-800 p-8 rounded-xl flex flex-col md:flex-row md:items-center justify-between hover:bg-zinc-900/10 transition-all cursor-default"
        >
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl">
              <Terminal size={28} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-white font-bold text-2xl">Studio Boreas</h2>
                <span className="flex items-center gap-1 bg-green-900/20 text-green-500 border border-green-900/50 text-[10px] uppercase font-black px-2 py-0.5 rounded tracking-tighter">
                  Current
                </span>
              </div>
              <p className="text-zinc-400 text-lg mt-1">Co-founded Studio Boreas, delivering innovative projects globally.</p>
            </div>
          </div>
          <div className="text-right mt-4 md:mt-0">
            <p className="text-sm text-zinc-500 font-mono">Dec 2024 - Present</p>
            <p className="text-xs text-zinc-600 uppercase tracking-widest mt-1">Winnipeg, CA</p>
          </div>

          {/* Experience Overlay */}
          <div className="absolute inset-0 bg-zinc-900/95 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
            <p className="px-6 text-center text-lg font-medium max-w-md">
              Studio Boreas is dedicated to creating innovative and impactful projects.
            </p>
          </div>
        </motion.div>
      </section>

      {/* 2. Tech Stack Section (Connectors target) */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-zinc-500 text-[10px] font-mono mb-6 uppercase tracking-[0.3em]">Core Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className={`${skill.id} border-2 border-dotted border-zinc-800 p-5 rounded-xl bg-zinc-900/5 flex flex-col items-center justify-center hover:border-zinc-600 transition-all group`}
            >
              <span className={`text-[10px] font-black uppercase tracking-widest ${skill.color} group-hover:scale-110 transition-transform`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Projects Section (Connectors source) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-zinc-500 text-[10px] font-mono mb-10 flex items-center gap-2 uppercase tracking-[0.3em]">
           <ChevronRight size={14} /> PROJECTS_LOG
        </h2>

        <div className="space-y-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`project-${project.id} border-2 border-dotted border-zinc-800 bg-black/50 p-6 rounded-2xl flex flex-col lg:flex-row gap-8 hover:border-zinc-700 transition-all group relative z-10 overflow-hidden`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.01 }}
            >
              {/* Image Preview */}
              <div className="lg:w-1/4 relative">
                <div className="relative aspect-video rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-opacity duration-700" 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-3/4 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                    {project.isGithub && <Github size={18} className="text-zinc-600" />}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="p-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                      <Github size={16} />
                    </a>
                    <a href={project.link} className="p-2 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <p className="text-zinc-400 text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold px-2 py-1 rounded border border-zinc-800 bg-zinc-900/50 text-zinc-500 uppercase tracking-tighter">
                      {t.split('-')[1]}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Overlay */}
              <div className="absolute inset-0 bg-zinc-900/95 text-white flex justify-center items-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                <p className="px-8 text-center text-lg font-medium">{project.overlay}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Connection Lines Animation --- */}
      <AnimatePresence>
        {hoveredProject && projects.find(p => p.id === hoveredProject)?.tech.map((skillId, index) => (
          <RectangularLine
            key={`${hoveredProject}-${skillId}-${index}`}
            from={`project-${hoveredProject}`}
            to={skillId}
            borderColor="#8b5cf6" // Purple
            containerRef={containerRef}
          />
        ))}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-20 border-t border-dotted border-zinc-800 text-center">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.5em]">
          Designed & Built by Qinglan Xia © 2026
        </p>
      </footer>
    </main>
  );
}