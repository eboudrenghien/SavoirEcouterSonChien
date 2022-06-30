import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";

// import Formules from "./pages/formules/Formules";
//MENU
import Logo from './styles/assets/logo.png'

import Navbar from "./components/navbar/Navbar.jsx";
import Accueil from "./pages/Accueil";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
import Contact from "./pages/Contact";

// SOUS-MENU
import StageIntensif from './pages/formules/formulesPlus/StageIntensif'
import CoursEssentiels from './pages/formules/formulesPlus/CoursEssentiels'
import SeptJoursReeducation from './pages/formules/formulesPlus/SeptJoursReeducation'
import Attestation from './pages/formules/formulesPlus/Attestation'
import CoursCollectifs from './pages/formules/formulesPlus/CoursCollectifs'


function App() {
  return (
    <BrowserRouter>
      <Link to="/" title="Accueil"> <a href="/accueil"></a>
        <img src={Logo} alt="" className="logo-accueil" style={{ width: '160px' }} /></Link>
      <Navbar />
     
      <Routes>

        <Route path="/" element={<Accueil />} />
        {/* <Route path="/formules" element={<Formules />}/> */}
        <Route path="/stage-intensif" element={<StageIntensif />} />
        <Route path="/cours-essentiels" element={<CoursEssentiels />} />
        <Route path="/7-jours-de-reeducation" element={<SeptJoursReeducation />} />
        <Route path="/attestation-chien-de-categorie" element={<Attestation />} />
        <Route path="/cours-collectifs" element={<CoursCollectifs />} />

        4785
        :
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
