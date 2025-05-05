import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import BookAppointment from "../Pages/BookAppointment";
import Gallery from "../Pages/Gallery";
import Department from "../Pages/Department";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Department" element={<Department/>} />
        <Route path="/Book-Appointment"element={<BookAppointment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

