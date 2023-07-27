import About from './components/about'
import Client from './components/client'
import Contact from './components/contact'
import Footer from './components/footer'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Services from './components/services'
// import TesModal from './components/tesmodal'
import '/index.css'


export default function App() {
  console.log('Confirmed!')
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Client />
      <Contact />

      <Footer />
    </>
  )
}