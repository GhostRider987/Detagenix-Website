import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./layout/Navbar/Navbar.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import BlogPage from "./pages/Blog/BlogPage.jsx";
import BlogDetailPage from "./pages/Blog/BlogDetailPage.jsx";
import Service from "./pages/Service/Service.jsx";
import Projectpage from "./pages/Project/Projectpage.jsx";
import Contactus from "./pages/Contact/Contactus.jsx"; 
import Aboutus from "./pages/About/Aboutus.jsx"; 
import Careers from "./pages/career/Career.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/projects" element={<Projectpage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetailPage />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

    
