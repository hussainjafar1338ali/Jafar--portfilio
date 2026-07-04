import { motion } from 'framer-motion'
import { FiBookOpen } from 'react-icons/fi'
import { education } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <img
  src="/image/photo2.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
/>

<div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Academics" title="Education" />

        <div className="relative pl-8 border-l border-white/10 space-y-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-base-900 border-2 border-accent-indigo flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-indigo" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                    <FiBookOpen className="text-accent-indigo" /> {ed.degree}
                  </h3>
                  <span className="tag-pill">{ed.duration}</span>
                </div>
                <p className="text-sm text-accent-indigo font-medium mb-1">{ed.institution}</p>
                <p className="text-xs text-text-dim mb-3">{ed.location} · {ed.score}</p>
                <p className="text-sm text-text-muted leading-relaxed">{ed.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
