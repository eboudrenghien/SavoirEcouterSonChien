import Accueil from "./pages/Accueil";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Formules from "./pages/formules/Formules";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={<Accueil />}/>
      <Route path="/accueil" element={<Accueil />}/>
      <Route path="/formules" element={<Formules />}/>
      <Route path="/tarifs" element={<Tarifs />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
