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
} from './components'

function App() {
  return (
    <div className="min-h-screen bg-white text-charcoal antialiased">
      <Nav />
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
  )
}

export default App
