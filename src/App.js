import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Entete from './componentes/Entete';
import BottomHeader from './componentes/BottomHeader';
import Selecttab from './componentes/Selecttab';
import './App.css';

function App() {
  return (
    <Box>
      <Entete />
      <Selecttab />
      <BottomHeader />
    </Box>
  );
}

export default App;
