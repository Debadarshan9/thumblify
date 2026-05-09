import Feature from "./components/feature/Feature";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Testimonial from "./components/testimonials/Testimonial";
import "./App.css";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import LenisScroll from "./components/lenisScroll/LenisScroll";
function App() {
  return (
    <div className="app">
      <LenisScroll />
      <Navbar />
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
