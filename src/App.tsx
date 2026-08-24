import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/layout/Layout'
import { Loader } from './components/ui/Loader'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Services } from './components/sections/Services'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import { StatsBar } from './components/sections/StatsBar'
import { ScrollToTop } from './components/ui/ScrollToTop'

function App() {
  return (
    <ThemeProvider>
      <Loader />
      <Layout>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Services />
        <StatsBar />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </Layout>
      <ScrollToTop />
    </ThemeProvider>
  )
}

export default App