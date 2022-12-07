
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParametrePage from './pages/ParametrePage';
import ExpedierPage from './pages/ExpedierPage';
import EnlevementPage from './pages/EnlevementPage';
import RecaputilatifSuiviPage from './pages/RecaputilatifSuiviPage';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/expedier"} element={<ExpedierPage />} />
      <Route path={"/tracking"} element={<RecaputilatifSuiviPage />} />
      <Route path={"/enlevement"} element={<EnlevementPage />} />
      <Route path={"/parametre"} element={<ParametrePage />} />
    </Routes>
    
    </>
  );
}

export default App;
