import Hero from "../components/hero/Hero";
import Feature from "../components/feature/Feature";
import Testimonial from "../components/testimonials/Testimonial";
import Pricing from "../components/pricing/Pricing";
import Contact from "../components/contact/Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Contact />
    </>
  );
};

export default HomePage;
