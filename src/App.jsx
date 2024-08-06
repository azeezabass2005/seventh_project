import { About, Navbar, Hero, Skills, Works, Network, Contact, Footer } from "./components"
function App() {
  return (
    <div className={`w-full min-h-[100%] relative overflow-hidden`}>
      <div className={`sm:py-5 sm:px-10 py-1 px-2 w-full top-0 fixed fixed-nav z-[10]`}>
        <Navbar />
      </div>
        <div className={`bg-primary sm:pt-[80px] pt-[55px]`}>
          <Hero />
        </div>
      <div className={`bg-primary`}>
        <About />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>

  )
}

export default App
