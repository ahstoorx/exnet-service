import { Box } from '@mantine/core';
import React from 'react';
import EnteteNiveau2 from '../componentes/EnteteNiveau2';

function Tarif(props) {
    return (
        <div>
             <EnteteNiveau2 libelle={"Tarifs"} />
           
           <Box style={{paddingInline:'15px',marginTop:90}}>
            liste des prix
            </Box>
        </div>
    );
}

export default Tarif;