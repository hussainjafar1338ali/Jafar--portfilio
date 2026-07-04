import { motion } from 'framer-motion'
import { skillGroups } from '../data/skills'
import SectionHeading from './SectionHeading'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <img
    src="/image/photo2.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover opacity-30 -z-20"
  />
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Toolbox"
          title="Skills & Technologies"
          description="A blend of AI/ML tooling and full stack technologies I use to take ideas from concept to production."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.05 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              <h3 className="font-display font-medium text-lg mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" aria-hidden="true" />
                {group.title}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {group.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={item}
                      whileHover={{ y: -3, scale: 1.05 }}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-sm text-text-primary hover:border-accent-indigo/40 hover:bg-white/[0.06] transition-colors"
                    >
                      <Icon className="text-accent-indigo text-base" aria-hidden="true" />
                      {skill.name}
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
