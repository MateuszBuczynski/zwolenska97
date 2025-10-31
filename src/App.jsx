import Header from "./components/Header.jsx";
import Showcase from "./components/Showcase.jsx"; // <— NOWE HERO + thumbs + lightbox
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Showcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
