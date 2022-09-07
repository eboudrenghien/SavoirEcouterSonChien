import { BrowserRouter, Route, Routes } from 'react-router-dom'



//MENU
import Navbar from "./components/Navbar.jsx";
import Accueil from "./pages/Accueil";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Connexion from './pages/authentification/Connexion.jsx';
import Senregistrer from './pages/authentification/Senregistrer.jsx';
// SOUS-MENU
import StageIntensif from './pages/formules/StageIntensif'
import CoursEssentiels from './pages/formules/CoursEssentiels'
import SeptJoursReeducation from './pages/formules/SeptJoursReeducation'
import Attestation from './pages/formules/Attestation'
import CoursCollectifs from './pages/formules/CoursCollectifs'
import Footer from './components/Footer.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import LaMeute from './components/albums-photos/LaMeute.jsx';
import LesEleves from './components/albums-photos/LesEleves.jsx';
import AlbumCollectif from './components/albums-photos/AlbumCollectif.jsx';
import Sport from './components/albums-photos/Sport.jsx';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/stage-intensif" element={<StageIntensif />} />
        <Route path="/cours-essentiels" element={<CoursEssentiels />} />
        <Route path="/7-jours-de-reeducation" element={<SeptJoursReeducation />} />
        <Route path="/attestation-chien-de-categorie" element={<Attestation />} />
        <Route path="/cours-collectifs" element={<CoursCollectifs />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales/>} />
        <Route path="/albums-photos/LaMeute" element={<LaMeute />} />
        <Route path="/albums-photos/LesEleves" element={<LesEleves />} />
        <Route path="/albums-photos/AlbumCollectifs" element={<AlbumCollectif />} />
        <Route path="/albums-photos/Sport" element={<Sport />} />
        <Route path="/senregistrer" element={<Senregistrer />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
