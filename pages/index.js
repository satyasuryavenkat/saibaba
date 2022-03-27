import Footer from './components/footer'
import Navbar from './components/navbar'
import OwlCarous from './components/owlcarousel'
import Quotes from './components/quotes'
import Slider from './components/slider'

export default function Home() {
  return (
    <>
   <Navbar/>
  <Slider/>
  <Quotes/>
  <OwlCarous/>
   <Footer/>
   </>
  )
}
