import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <img
  src="/image/photo1.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
/>

<div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <SectionHeading eyebrow="Journey" title="Experience" />

        <div className="relative pl-8 border-l border-white/10 space-y-10">
          {experience.map((ex, i) => (
            <motion.div
              key={ex.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full bg-base-900 border-2 border-accent-purple flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-accent-purple" />
              </span>

              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg flex items-center gap-2">
                    <FiBriefcase className="text-accent-purple" /> {ex.role}
                  </h3>
                  <span className="tag-pill">{ex.duration}</span>
                </div>
                <p className="text-sm text-accent-purple font-medium mb-1">{ex.company}</p>
                <p className="text-xs text-text-dim mb-3">{ex.location}</p>
                <p className="text-sm text-text-muted leading-relaxed mb-4">{ex.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ex.tags.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
