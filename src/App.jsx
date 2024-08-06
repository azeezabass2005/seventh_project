import { About, Navbar, Hero, Skills, Works, Network, Contact, Footer } from "./components"
function App() {
  return (
    <div className={`w-full min-h-[100%] relative overflow-hidden`}>
      <div className={`sm:py-5 sm:px-10 py-1 px-2 w-full top-0 fixed fixed-nav z-[10]`}>
        <Navbar />
      </div>
      <div>
        <div className="relative h-full w-full bg-[#080A19]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
        <div className={`bg-primary sm:pt-[80px] pt-[55px]`}>
          <Hero />
        </div>
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
