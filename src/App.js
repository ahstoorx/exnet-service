
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParametrePage from './pages/ParametrePage';
import ExpedierPage from './pages/ExpedierPage';
import EnlevementPage from './pages/EnlevementPage';
import RecaputilatifSuiviPage from './pages/RecaputilatifSuiviPage';
import PlanifierEnlevementPage from './pages/PlanifierEnlevementPage';
import ExpeditionsPage from './pages/ExpeditionsPage';
import ExpeditionArchivePage from './pages/ExpeditionArchivePage';
import Aide from './pages/Aide';
import Tarif from './pages/Tarif';
import DetailsPage from './pages/DetailsPage';
import EmballagePage from './pages/EmballagePage';
import LegalePage from './pages/LegalePage';
import InformationColisPage from './pages/InformationColisPage';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/legal"} element={<LegalePage />} />
      <Route path={"/aide"} element={<Aide />} />
      <Route path={"/tarif"} element={<Tarif />} />
      <Route path={"/emballage"} element={<EmballagePage />} />
      <Route path={"/information-colis"} element={<InformationColisPage />} />
      <Route path={"/expedier"} element={<ExpedierPage />} />
      <Route path={"/details"} element={<DetailsPage />} />
      <Route path={"/tracking"} element={<RecaputilatifSuiviPage />} />
      <Route path={"/enlevement"} element={<EnlevementPage />} />
       <Route path={"/expeditions"} element={<ExpeditionsPage />} />
       <Route path={"/expeditions-archive"} element={<ExpeditionArchivePage />} />
      <Route path={"/planifier-enlevement"} element={<PlanifierEnlevementPage />} />
      <Route path={"/parametre"} element={<ParametrePage />} />
    </Routes>
    
    </>
  );
}

export default App;
