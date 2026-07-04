import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`mb-14 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : ''}`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-muted mt-4 leading-relaxed">{description}</p>
      )}
    </motion.div>
  )
}
