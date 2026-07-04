import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { profile } from '../data/profile'
import SectionHeading from './SectionHeading'
import Magnetic from './Magnetic'

const CONTACT_ITEMS = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: FiMapPin, label: 'Location', value: profile.location, href: null },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/jafarhussain', href: profile.socials.linkedin },
  { icon: FaGithub, label: 'GitHub', value: 'github.com/jafarhussain', href: profile.socials.github },
]

const FIELDS = [
  { id: 'contact-name', name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
  { id: 'contact-email', name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend is wired up in this project, so the most honest "send" is
    // to hand the message off to the visitor's own email client, prefilled,
    // rather than silently discarding it after a fake success state.
    const subject = encodeURIComponent(form.subject || `Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`

    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="section-padding relative">
      <img
  src="/image/photo1.png"
  alt=""
  className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
/>

<div className="absolute inset-0 bg-black/60 -z-10"></div>
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something"
          description="Open to internships, freelance work, and collaborations in AI/ML or full stack development. Reach out — I usually reply within a day."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center text-accent-indigo text-lg" aria-hidden="true">
                    <Icon />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-text-dim font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-text-primary truncate">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              )
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onSubmit={handleSubmit}
            noValidate={false}
            className="gradient-border-anim glass rounded-2xl p-6 sm:p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {FIELDS.map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="text-xs font-mono text-text-dim uppercase tracking-wider mb-2 block">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.name}
                    required={f.required}
                    type={f.type}
                    value={form[f.name]}
                    onChange={handleChange}
                    placeholder={f.placeholder}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-indigo/50 transition-colors"
                  />
                </div>
              ))}
            </div>
            <div>
              <label htmlFor="contact-subject" className="text-xs font-mono text-text-dim uppercase tracking-wider mb-2 block">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-indigo/50 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="text-xs font-mono text-text-dim uppercase tracking-wider mb-2 block">Message</label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent-indigo/50 transition-colors resize-none"
              />
            </div>

            <Magnetic>
              <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                {status === 'sent' ? 'Opening your email app…' : (<>Send Message <FiSend aria-hidden="true" /></>)}
              </button>
            </Magnetic>
            <p className="text-xs text-text-dim" role="status" aria-live="polite">
              {status === 'sent' ? 'Your email client should open with this message pre-filled.' : ''}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
