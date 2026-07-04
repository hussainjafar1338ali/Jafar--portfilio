import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { certifications } from '../data/profile'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative">
      <img
  src="/image/photo2.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
/>

<div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <SectionHeading eyebrow="Proof of Work" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.credentialUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass glass-hover rounded-2xl p-6 flex flex-col group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center mb-4 text-white text-lg">
                <FiAward />
              </div>
              <h3 className="font-display font-medium text-base mb-2 leading-snug group-hover:text-accent-indigo transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-text-muted mb-1">{cert.issuer}</p>
              <p className="text-xs text-text-dim mb-4">{cert.date}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono text-accent-indigo">
                View credential <FiExternalLink />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
