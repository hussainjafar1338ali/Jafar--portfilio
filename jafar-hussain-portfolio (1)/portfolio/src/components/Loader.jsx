import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-900"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <motion.div
            className="font-mono text-sm tracking-[0.3em] text-text-muted mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            INITIALIZING PORTFOLIO
          </motion.div>

          <div className="relative w-16 h-16">
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-blue border-r-accent-purple"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-display font-semibold text-lg gradient-text">
              JH
            </span>
          </div>

          <motion.div
            className="mt-6 h-[2px] w-40 bg-white/10 overflow-hidden rounded-full"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
