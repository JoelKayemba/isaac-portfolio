import { motion } from 'motion/react'
import { Section } from './Section'

export function Bio() {
  return (
    <Section id="bio" title="Bio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <p className="text-charcoal/90 leading-relaxed">
          <strong className="font-display text-slate">Kip's</strong> (Isaac Miyongo Kipundu)
          est un artiste congolais originaire de Kinshasa, né le 17 mai 2002 et
          élevé à Ngaliema. Chanteur, rappeur, compositeur et interprète, il
          incarne une nouvelle vague d'artistes africains qui transforment leur
          réalité en art universel.
        </p>
        <p className="text-charcoal/90 leading-relaxed">
          Puisant son inspiration dans la rue, l'amour et les combats du
          quotidien, Kip's façonne un son R&B trap mélodique à la fois
          émotionnel et puissant, porté par des mélodies envoûtantes et des
          textes sincères. Sa musique raconte des histoires vraies : celles
          d'une jeunesse qui aime fort, tombe, se relève et rêve plus grand que
          son environnement.
        </p>
        <p className="text-charcoal/90 leading-relaxed">
          Bercé par les influences culturelles congolaises et ouvert aux
          tendances internationales, il construit une identité sonore moderne,
          entre sensibilité africaine et esthétique urbaine mondiale. Chaque
          morceau est une immersion, chaque performance une connexion directe
          avec l'âme de l'auditeur.
        </p>
        <p className="text-charcoal/90 leading-relaxed">
          Kip's ne cherche pas à plaire à tout le monde — il cherche à marquer.
          Sa musique traverse les frontières, touche les émotions et parle un
          langage universel : celui de la vérité, de la passion et de la
          résilience.
        </p>
        <p className="font-display text-slate font-medium">
          🌍 Kip's est plus qu'un artiste, c'est une expérience.
        </p>
      </motion.div>
    </Section>
  )
}
