import { motion } from 'motion/react'
import { navSections } from '../data'

export function Nav() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-silver"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap justify-center gap-4">
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="font-display text-granite hover:text-slate text-sm transition-colors"
          >
            {label}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}
