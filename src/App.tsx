import { Nav } from "./components/Nav";
import { MobileActionBar } from "./components/MobileActionBar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { useScrollReveals } from "./hooks/useScrollReveals";

function App() {
  useScrollReveals();

  return (
    <>
      <div className="grain-overlay" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}

export default App;
