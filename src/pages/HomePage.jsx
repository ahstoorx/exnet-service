import { Box } from '@mui/material';
import React from 'react';
import BottomHeader from '../componentes/BottomHeader';
import Entete from '../componentes/Entete';
import Selecttab from '../componentes/Selecttab';

function HomePage(props) {
    return (
        <Box>
            <Entete />
            <Selecttab />
            <BottomHeader />
        </Box>
    );
}

export default HomePage;