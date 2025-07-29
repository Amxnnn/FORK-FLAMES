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
      {/* Desktop View (md and up) */}
      <div className="hidden lg:block">
        <Navbar />
        <Hero />
        <Page1 />
        <PizzaPage />
        <ShakeMenu />
        <Cookin />
        <Drink />
        <Footer />
      </div>

      {/* Mobile / Tablet View (smaller than md) */}
      <div className=" lg:hidden h-screen flex items-center justify-center text-center p-4 bg-black text-white">
        <h1 className="text-2xl font-bold">
          Please open this website on a desktop for the best experience.
        </h1>
      </div>
    </>
  )
}

export default App
