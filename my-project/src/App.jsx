import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Content from "./components/Content/content.jsx";
import Card from "./components/Cards/Card.jsx";
import BookAppointment from "./components/Content/BookAppointment.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AboutUs from "./components/Content/AboutUs.jsx";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mb-12">
        <HeroSection />
        <Content />
        <AboutUs />
        <Card />
        <BookAppointment />
      </main>
      <Footer />
    </div>
  );
};

export default App;