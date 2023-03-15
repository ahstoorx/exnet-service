
import './App.css';
import { Routes, Route } from 'react-router-dom';
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
import LoginPage from './pages/LoginPage';
import ImportPage from './pages/ImportPage';
import NewImportPage from './pages/NewImportPage';
import ExportPage from './pages/ExportPage';
import NewExportPage from './pages/NewExportPage';
import CoursePage from './pages/CoursePage';

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<LoginPage />} />
        <Route path={'/dashboard'} element={<HomePage />} />
        <Route path={"/legal"} element={<LegalePage />} />
        <Route path={"/aide"} element={<Aide />} />
        <Route path={"/tarif"} element={<Tarif />} />
        <Route path={"/new-export"} element={<NewExportPage />} />
        <Route path={"/new-import"} element={<NewImportPage />} />
        <Route path={"/emballage"} element={<EmballagePage />} />
        <Route path={"/information-colis"} element={<InformationColisPage />} />
        <Route path={"/expedier"} element={<ExpedierPage />} />
        <Route path={"/details"} element={<DetailsPage />} />
        <Route path={"/tracking"} element={<RecaputilatifSuiviPage />} />
        <Route path={"/enlevement"} element={<EnlevementPage />} />
        <Route path={"/export"} element={<ExportPage />} />
        <Route path={"/course"} element={<CoursePage />} />
        <Route path={"/import"} element={<ImportPage />} />
        <Route path={"/expeditions-archive"} element={<ExpeditionArchivePage />} />
        <Route path={"/planifier-enlevement"} element={<PlanifierEnlevementPage />} />
        <Route path={"/parametre"} element={<ParametrePage />} />
        {/* EnlevementPage */}
      </Routes>

    </>
  );
}

export default App;
