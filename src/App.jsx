import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="font-outfit">
            <Navbar />
            <Hero />
            <Features />
            <Services />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
