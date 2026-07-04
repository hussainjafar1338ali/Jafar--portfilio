import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { projects, categories } from '../data/projects'
import SectionHeading from './SectionHeading'
import useTilt from '../hooks/useTilt'

const GRADIENTS = [
  'from-blue-500/25 to-purple-500/25',
  'from-indigo-500/25 to-pink-500/25',
  'from-cyan-500/25 to-blue-500/25',
  'from-purple-500/25 to-fuchsia-500/25',
]

// Category-specific header motif, standing in for a screenshot until one
// exists. Each nods to the actual discipline instead of repeating a plain
// gradient + title watermark on every card.
function CardMotif({ category }) {
  if (category === 'AI/ML') {
    return (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="relative w-20 h-20">
          {[
            'top-0 left-0 border-t-2 border-l-2',
            'top-0 right-0 border-t-2 border-r-2',
            'bottom-0 left-0 border-b-2 border-l-2',
            'bottom-0 right-0 border-b-2 border-r-2',
          ].map((pos) => (
            <span key={pos} className={`absolute w-4 h-4 border-accent-indigo/70 ${pos}`} />
          ))}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
        </div>
        <span className="absolute bottom-3 left-3 font-mono text-[10px] tracking-[0.2em] text-accent-indigo/80">
          MODEL::ACTIVE
        </span>
      </div>
    )
  }
  if (category === 'Full Stack') {
    return (
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="flex flex-col gap-1.5 w-24">
          <span className="h-2 rounded-full bg-accent-blue/40 w-full" />
          <span className="h-2 rounded-full bg-accent-indigo/40 w-4/5" />
          <span className="h-2 rounded-full bg-accent-purple/40 w-3/5" />
        </div>
        <span className="absolute top-3 right-3 font-mono text-xs text-text-primary/60">{'</>'}</span>
      </div>
    )
  }
  return (
    <div className="absolute inset-0 flex flex-col" aria-hidden="true">
      <div className="flex gap-1.5 px-3 pt-3">
        <span className="w-2 h-2 rounded-full bg-red-400/70" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
        <span className="w-2 h-2 rounded-full bg-green-400/70" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <span className="w-2/3 h-1.5 rounded-full bg-white/10" />
      </div>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const { ref, style, handlers } = useTilt({ max: 8 })

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <motion.div
        ref={ref}
        {...handlers}
        style={style}
        className="tilt-card gradient-border-anim glass rounded-2xl overflow-hidden flex flex-col h-full"
      >
        <div
          className={`h-40 bg-gradient-to-br ${GRADIENTS[index % GRADIENTS.length]} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" aria-hidden="true" />
          <CardMotif category={project.category} />
          {project.featured && (
            <span className="absolute top-3 right-3 flex items-center gap-1 text-[10px] font-mono px-2 py-1 rounded-full bg-black/40 text-yellow-300 backdrop-blur">
              <FiStar className="text-[10px]" aria-hidden="true" /> Featured
            </span>
          )}
        </div>

        <div className="p-6 flex flex-col flex-1">
          <span className="tag-pill w-fit mb-3">{project.category}</span>
          <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent-indigo transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/[0.04] text-text-dim border border-white/[0.06]">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-auto">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-medium px-3 py-2.5 rounded-xl border border-white/10 text-text-primary hover:border-white/25 hover:bg-white/5 transition-colors"
            >
              <FiGithub aria-hidden="true" /> Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-medium px-3 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white hover:shadow-glow transition-shadow"
            >
              <FiExternalLink aria-hidden="true" /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <img
  src="/image/photo3.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
/>

<div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="A mix of computer vision systems, ML tools, and full stack applications — built end to end."
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filter projects by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`px-4 py-2 rounded-full text-sm font-medium font-mono transition-all duration-300 border ${
                active === cat
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white border-transparent shadow-glow'
                  : 'border-white/10 text-text-muted hover:text-text-primary hover:border-white/25'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard project={project} index={i} key={project.id} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
