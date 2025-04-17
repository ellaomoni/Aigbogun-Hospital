import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Content from "./components/Content/content.jsx";
const App = () => {
  return (
    <>
     <Navbar />
     <HeroSection />
     <Content />
     <div className="bg-white w-full h-screen"></div>
     </>
  )
}

export default App