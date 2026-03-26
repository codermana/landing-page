import Hero from "./sections/hero";
import Stats from "./sections/stats";
import Services from "./sections/services";
import TheHourCTA from "./sections/thehourcta";
import Products from "./sections/products";
import Clients from "./sections/clients";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Stats/>
      <Services/>
      <TheHourCTA/>
      <Products/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  );
}
