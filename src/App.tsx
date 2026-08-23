import { ThemeProvider } from './context/ThemeContext'
import { Layout } from './components/layout/Layout'
import { Hero } from './components/sections/Hero'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Education } from './components/sections/Education'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </Layout>
    </ThemeProvider>
  )
}

export default App