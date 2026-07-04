import { useRef, } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { FiDownload, FiMail, FiChevronDown } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import useTypewriter from '../hooks/useTypewriter'
import { profile } from '../data/profile'
import Magnetic from "./Magnetic.jsx";
const ROLES = [
  'AI/ML Developer',
  'Computer Vision Engineer',
  'Full Stack Developer',
  'B.Tech CSE Student',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' },
  }),
}

export default function Hero() {
const typed = useTypewriter(ROLES)
const sectionRef = useRef(null)


  

  // Mouse spotlight: a soft light that follows the cursor within the hero,
  // driven purely by GPU-friendly transforms (no layout thrash).
  const spotX = useMotionValue(-9999)
  const spotY = useMotionValue(-9999)
  const springSpotX = useSpring(spotX, { damping: 30, stiffness: 200 })
  const springSpotY = useSpring(spotY, { damping: 30, stiffness: 200 })

  const handleMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    const rect = sectionRef.current.getBoundingClientRect()
    spotX.set(e.clientX - rect.left)
    spotY.set(e.clientY - rect.top)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center pt-32 pb-20 section-padding overflow-hidden"
    >
      {/* <AuroraBackground /> */}

<video
controls
  autoPlay
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/video/intro.mp4" type="video/mp4" />
</video>


      {/* Mouse spotlight, decorative only */}
      <motion.div
        aria-hidden="true"
        className="hidden lg:block absolute w-[500px] h-[500px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        style={{
          x: springSpotX,
          y: springSpotY,
          background: 'radial-gradient(circle, #fff, transparent 70%)',
        }}
      />

      <div className="relative z-20 max-w-6xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="eyebrow mb-5"
          >
           {"Hello, I'm"}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6"
          >
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="font-mono text-lg sm:text-xl text-text-muted mb-6 h-8"
          >
            <span className="text-text-primary">{'>'} </span>
            {typed}
            <span className="inline-block w-[2px] h-5 bg-accent-purple ml-1 align-middle animate-blink" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-text-muted text-base sm:text-lg leading-relaxed max-w-xl mb-10"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="flex flex-wrap items-center gap-4 mb-10"
          >
            <Magnetic>
              <a href={profile.resumeUrl} download className="btn-primary">
                <FiDownload /> Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-secondary">
                <FiMail /> Contact Me
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="flex items-center gap-5 text-xl text-text-muted"
          >
            <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-text-primary hover:-translate-y-0.5 transition-all">
              <FaGithub />
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-text-primary hover:-translate-y-0.5 transition-all">
              <FaLinkedin />
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-text-primary hover:-translate-y-0.5 transition-all">
              <FaTwitter />
            </a>
          </motion.div>
        </div>

        {/* Right: profile image / terminal signature card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 blur-2xl animate-float" />

          <div className="relative glass rounded-[2rem] p-3 shadow-glass w-72 sm:w-80">
            <div className="rounded-[1.5rem] overflow-hidden aspect-square bg-gradient-to-br from-base-700 to-base-800 flex items-center justify-center relative">
              <img
                src="/profile.jpg"
                alt="Jafar Hussain"
                width="800"
                height="800"
                loading="eager"
                
                decoding="async"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>

            {/* Mini terminal strip */}
            <div className="mt-3 rounded-xl bg-base-950/80 border border-white/5 p-3 font-mono text-[11px] text-text-muted">
              <div className="flex gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400/70" />
                <span className="w-2 h-2 rounded-full bg-yellow-400/70" />
                <span className="w-2 h-2 rounded-full bg-green-400/70" />
              </div>
              <p><span className="text-accent-indigo">status</span>: <span className="text-green-400">open_to_work</span></p>
              <p><span className="text-accent-indigo">stack</span>: react · python · tensorflow</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-dim text-2xl"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FiChevronDown />
      </motion.a>
    </section>
  )
}
