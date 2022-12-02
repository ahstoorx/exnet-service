
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParametrePage from './pages/ParametrePage';

function App() {
  return (
    <>
    <Routes>
      <Route path={"/"} element={<HomePage />} />
      <Route path={"/parametre"} element={<ParametrePage />} />
    </Routes>
    
    </>
  );
}

export default App;
