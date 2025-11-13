import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Ingredients from './components/Ingredients'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Ingredients />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App
