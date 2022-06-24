import Accueil from "./pages/Accueil";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar.jsx";
import Formules from "./pages/formules/Formules";
// SOUS-MENU
import StageIntensif from './pages/formules/formulesPlus/StageIntensif'
import CoursEssentiels from './pages/formules/formulesPlus/CoursEssentiels'
import SeptJoursReeducation from './pages/formules/formulesPlus/SeptJoursReeducation'
import Attestation from './pages/formules/formulesPlus/Attestation'
import RencontresCanines from './pages/formules/formulesPlus/RencontresCanines'

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
        <Route path="/stage-intensif" element={<StageIntensif/>}/>
        <Route path="/cours-essentiels" element={<CoursEssentiels />}/>
        <Route path="/7-jours-de-reeducation" element={<SeptJoursReeducation />}/>
        <Route path="/attestation-chien-de-categorie" element={<Attestation />}/>
        <Route path="/rencontres-canines" element={<RencontresCanines />}/>

            4785
            :
      <Route path="/tarifs" element={<Tarifs />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
