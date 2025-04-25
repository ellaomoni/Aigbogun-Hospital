import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

