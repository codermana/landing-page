import Hero from "./sections/hero";
import Footer from "./sections/footer";
import Stats from "./sections/stats";
import Services from "./sections/services";
import Clients from "./sections/clients";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <>
      <Hero/>
      <Stats/>
      <Services/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  );
}
