import Cookin from "./Components/Cookin"
import Drink from "./Components/Drink"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Page1 from "./Components/Page1"
import PizzaPage from "./Components/PizzaPage"
import ShakeMenu from "./Components/ShakeMenu"

import ScrollTrigger from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Page1 />
        <PizzaPage />
        <ShakeMenu />
        <Cookin />
        <Drink />
        <Footer />
      </div>

     
    </>
  )
}

export default App
