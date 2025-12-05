import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Manifeste from "./pages/Manifeste";
import Installer from "./pages/Installer";
import Contact from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-neutral-950 text-neutral-100 font-syne">
        <NavBar />
        <div className="flex-1 pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manifeste" element={<Manifeste />} />
            <Route path="/installer" element={<Installer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
