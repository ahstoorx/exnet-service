import { Box } from '@mantine/core';
import React from 'react';
import EnteteNiveau2 from '../componentes/EnteteNiveau2';

function Aide(props) {
    return (
        <div>
             <EnteteNiveau2 libelle={"Aides"} />
           
           <Box style={{paddingInline:'15px',marginTop:90}}>
            liste des prix
            </Box>
        </div>
    );
}

export default Aide;