import { AmbianceProvider } from './contexts/AmbianceContext'
import {
  Nav,
  Hero,
  HeroTransition,
  Univers,
  Musiques,
  Phrases,
  Bio,
  Reseaux,
  Contact,
  Footer,
  AmbianceWidget,
} from './components'

function App() {
  return (
    <AmbianceProvider>
      <div className="min-h-screen bg-white text-charcoal antialiased">
        <Nav />
        <AmbianceWidget />
        <Hero />
      <HeroTransition />
      <Univers />
      <Musiques />
      <Phrases />
      <Bio />
      <Reseaux />
      <Contact />
        <Footer />
      </div>
    </AmbianceProvider>
  )
}

export default App
