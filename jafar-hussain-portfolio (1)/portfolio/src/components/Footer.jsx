import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import { profile } from '../data/profile'

const SOCIALS = [
  { icon: FaGithub, href: profile.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: profile.socials.linkedin, label: 'LinkedIn' },
  { icon: FaTwitter, href: profile.socials.twitter, label: 'Twitter' },
  { icon: FaInstagram, href: profile.socials.instagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] mt-10">
      <div className="max-w-6xl mx-auto section-padding !py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="#home" className="font-display font-semibold text-lg">
          <span className="gradient-text">Jafar</span>
          <span className="text-text-primary">.dev</span>
        </a>

        <div className="flex items-center gap-5 text-lg text-text-muted">
          {SOCIALS.map((s) => {
            const Icon = s.icon
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="hover:text-text-primary hover:-translate-y-0.5 transition-all"
              >
                <Icon />
              </a>
            )
          })}
        </div>

        <p className="text-xs text-text-dim font-mono">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
