import Header from "./components/Header.jsx";
import Showcase from "./components/Showcase.jsx";
import About from "./components/About.jsx";
import Plans from "./components/Plans.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Showcase />
        <About />
        <Plans />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
