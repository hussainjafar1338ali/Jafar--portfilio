import { useRef, useState, useEffect } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function useTilt({ max = 10 } = {}) {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springPx = useSpring(px, { stiffness: 200, damping: 20 })
  const springPy = useSpring(py, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springPy, [0, 1], [max, -max])
  const rotateY = useTransform(springPx, [0, 1], [-max, max])

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  const handleMouseMove = (e) => {
    if (!enabled || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return {
    ref,
    style: enabled ? { rotateX, rotateY, transformPerspective: 800 } : {},
    handlers: enabled ? { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave } : {},
  }
}
