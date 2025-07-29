import { useEffect, useState } from "react"
import Hamburger from "./Hamburger"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBlack, setIsBlack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the Cookin, PizzaPage, and Page1 sections
      const cookinSection = document.getElementById("cookin-container")
      const pizzaSection = document.getElementById("container")
      const page1Section = document.getElementById("page1-section")
      let shouldBeBlack = false
      if (cookinSection) {
        const rect = cookinSection.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 80) shouldBeBlack = true
      }
      if (pizzaSection) {
        const rect = pizzaSection.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 80) shouldBeBlack = true
      }
      if (page1Section) {
        const rect = page1Section.getBoundingClientRect()
        if (rect.top <= 80 && rect.bottom > 80) shouldBeBlack = true
      }
      setIsBlack(shouldBeBlack)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={`w-full flex fixed justify-between py-6 text-sm p-4 items-center z-50 transition-colors duration-300 ${isBlack ? "text-black" : "text-white"}`}>
        <h1>FORK & FLAMES</h1>
        <h1 onClick={() => setIsOpen(isOpen ? false : true)}>{isOpen ? "CLOSE" : "MENU"}</h1>
      </div>
      {isOpen && <Hamburger />}
    </>
  )
}

export default Navbar
