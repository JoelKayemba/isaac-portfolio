import { motion } from 'motion/react'
import { Section } from './Section'

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-charcoal/90 mb-4">
          Pour collaborations, bookings et partenariats :
        </p>
        <a
          href="mailto:Centmilliondaziprod@gmail.com"
          className="font-display text-slate font-medium hover:underline break-all"
        >
          Centmilliondaziprod@gmail.com
        </a>
      </motion.div>
    </Section>
  )
}
