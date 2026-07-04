import { motion } from 'framer-motion'
import { about } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    

    <section id="about" className="section-padding relative">
    
  <img
    src="/image/photo1.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
  />

  {/* Baaki About ka code yahin rahega */}
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Who I Am" title="About Me" />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-text-muted leading-relaxed text-base sm:text-lg">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-2xl p-6 grid grid-cols-2 gap-6"
          >
            {about.highlights.map((h) => (
              <div key={h.label}>
                <p className="font-mono text-xs uppercase tracking-wider text-text-dim mb-1.5">
                  {h.label}
                </p>
                <p className="text-sm text-text-primary font-medium leading-snug">{h.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
